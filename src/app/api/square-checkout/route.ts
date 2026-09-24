import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getStoreProducts } from "@/lib/store-products";
import { getParcelPostShippingCents } from "@/lib/shipping";

type CheckoutItem = {
  id: string;
  quantity: number;
};

type SquareLineItem = {
  quantity: string;
  name: string;
  note: string;
  base_price_money: { amount: number; currency: "AUD" };
};

function getSquareBaseUrl() {
  const environment = (process.env.SQUARE_ENVIRONMENT || "sandbox").toLowerCase();
  return environment === "production"
    ? "https://connect.squareup.com"
    : "https://connect.squareupsandbox.com";
}

export async function POST(request: Request) {
  try {
    const { items } = (await request.json()) as {
      items: CheckoutItem[];
    };

    const accessToken = process.env.SQUARE_ACCESS_TOKEN;
    const locationId = process.env.SQUARE_LOCATION_ID;

    if (!accessToken || !locationId) {
      return NextResponse.json(
        { error: "Square environment variables are missing." },
        { status: 500 }
      );
    }

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Your bag is empty." }, { status: 400 });
    }

    const hasInvalidQuantity = items.some(
      (item) => !Number.isInteger(item.quantity) || item.quantity < 1
    );

    if (hasInvalidQuantity) {
      return NextResponse.json(
        { error: "Invalid product quantity." },
        { status: 400 }
      );
    }

    const storeProducts = await getStoreProducts();
    if (storeProducts.length === 0) {
      return NextResponse.json(
        { error: "We could not confirm product availability. Please try again." },
        { status: 503 }
      );
    }

    const storeProductsBySlug = new Map(
      storeProducts.map((product) => [product.store_slug, product])
    );

    const unavailableItems = items.filter((item) => {
      const liveProduct = storeProductsBySlug.get(item.id);
      return !liveProduct || liveProduct.available_to_sell === false;
    });

    if (unavailableItems.length > 0) {
      return NextResponse.json(
        {
          error: "One or more products in your bag are no longer available.",
          unavailableItemIds: unavailableItems.map((item) => item.id),
        },
        { status: 409 }
      );
    }

    const totalWeightGrams = items.reduce((total, item) => {
      const product = storeProductsBySlug.get(item.id);
      const weight = Number(product?.shipping_weight_grams);

      if (!product || !Number.isFinite(weight) || weight <= 0) {
        throw new Error(`Product is missing a valid shipping weight: ${item.id}`);
      }

      return total + weight * item.quantity;
    }, 0);

    const shippingCents = getParcelPostShippingCents(totalWeightGrams);

    const lineItems: SquareLineItem[] = items.map((item) => {
      const product = storeProductsBySlug.get(item.id);
      if (!product || product.retail_price == null) {
        throw new Error(`Product is missing live HQ pricing: ${item.id}`);
      }

      return {
        quantity: String(item.quantity),
        name: product.name,
        note: `WS_PRODUCT_ID:${product.id}`,
        base_price_money: {
          amount: Math.round(Number(product.retail_price) * 100),
          currency: "AUD" as const,
        },
      };
    });

    const response = await fetch(
      `${getSquareBaseUrl()}/v2/online-checkout/payment-links`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "Square-Version": "2026-08-19",
        },
        body: JSON.stringify({
          idempotency_key: randomUUID(),
          order: {
            location_id: locationId,
            line_items: lineItems,
          },
          checkout_options: {
            ask_for_shipping_address: true,
            shipping_fee: {
              name: "Parcel Post",
              charge: {
                amount: shippingCents,
                currency: "AUD",
              },
            },
          },
          pre_populated_data: {
            buyer_address: {
              country: "AU",
            },
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Square error:", data);
      return NextResponse.json(
        {
          error: "Square checkout could not be created.",
          details: data,
        },
        { status: response.status }
      );
    }

    const url = data.payment_link?.url;
    if (!url) {
      return NextResponse.json(
        { error: "Square checkout did not return a payment link." },
        { status: 502 }
      );
    }

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Something went wrong creating checkout." },
      { status: 500 }
    );
  }
}

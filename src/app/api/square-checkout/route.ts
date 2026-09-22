import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { products } from "@/lib/products";
import { getStoreProducts } from "@/lib/store-products";

type CheckoutItem = {
  id: string;
  quantity: number;
};

type SquareLineItem = {
  quantity: string;
  catalog_object_id: string;
};

const SQUARE_CATALOG_VARIATIONS: Record<string, string> = {
  "wild-renewal": "ASJRSUEPKYDWATVEF2SFZESQ",
  "sunlit-bloom": "OCEASGEDMDYYI5VEXMMPKPDP",
  "desert-calm": "L454ZXTHGK5IJJH4JRTC2OWP",
  "ocean-drift": "5SN4KQOC4WLO36GF7NB4APBB",
  "first-light": "FP4YZ3VQVOZMGIB52XPCRQAM",
  "highland-mist": "KHTJ2B2KX2BPKG4AARLCBEGT",
  "highland-recovery": "RX5ZL7GIZXH65HXQHTQRMXQN",
  "petal-plum": "SCQZ3CWRXO22OUZ3JPWLJEES",
  ironwood: "SDXISJK3SEG54QTINREXQTD5",
  "red-dust": "PNILPFCYUUCHVC6W4WPZLJEK",
  "golden-grove": "SC6G5MDOO3C6KEMKBJQD3BEY",
  "bush-relief": "F2SXNYL7PFATONEZGZBINWVV",
  "misty-glen": "7FB3P3GNVHSGOM5A4IQV2MAC",
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

    const resolvedItems = items.map((item) => {
      const product = products[item.id as keyof typeof products];
      if (!product) throw new Error(`Unknown product: ${item.id}`);

      const catalogObjectId = SQUARE_CATALOG_VARIATIONS[item.id];
      if (!catalogObjectId) {
        throw new Error(`Product is not connected to Square: ${item.id}`);
      }

      return {
        quantity: item.quantity,
        catalogObjectId,
      };
    });

    const lineItems: SquareLineItem[] = resolvedItems.map(
      ({ catalogObjectId, quantity }) => ({
        quantity: String(quantity),
        catalog_object_id: catalogObjectId,
      })
    );

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

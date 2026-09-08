import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { products } from "@/lib/products";

type CheckoutItem = {
  id: string;
  quantity: number;
};

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
      return NextResponse.json(
        { error: "Your bag is empty." },
        { status: 400 }
      );
    }

    const hasInvalidQuantity = items.some(
  (item) =>
    !Number.isInteger(item.quantity) ||
    item.quantity < 1
);

if (hasInvalidQuantity) {
  return NextResponse.json(
    { error: "Invalid product quantity." },
    { status: 400 }
  );
}

    const response = await fetch(
      "https://connect.squareupsandbox.com/v2/online-checkout/payment-links",
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
           line_items: items.map((item) => {
  const product = products[item.id as keyof typeof products];

  if (!product) {
    throw new Error(`Unknown product: ${item.id}`);
  }

  return {
    name: product.name,
    quantity: String(item.quantity),
    base_price_money: {
      amount: Math.round(product.price * 100),
      currency: "AUD",
    },
  };
}),
          },
          checkout_options: {
            ask_for_shipping_address: true,
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

    return NextResponse.json({
      url: data.payment_link?.url,
    });
  } catch (error) {
    console.error("Checkout error:", error);

    return NextResponse.json(
      { error: "Something went wrong creating checkout." },
      { status: 500 }
    );
  }
}
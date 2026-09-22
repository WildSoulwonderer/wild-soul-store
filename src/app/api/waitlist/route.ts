import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { productId, email } = await request.json();

    if (typeof productId !== "string" || typeof email !== "string") {
      return NextResponse.json({ error: "Product and email are required." }, { status: 400 });
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !key) {
      return NextResponse.json({ error: "Waitlist is temporarily unavailable." }, { status: 503 });
    }

    const response = await fetch(`${url}/rest/v1/rpc/join_product_waitlist`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ p_product_id: productId, p_email: email }),
      cache: "no-store",
    });

    if (!response.ok) {
      const detail = await response.json().catch(() => null);
      return NextResponse.json(
        { error: detail?.message || "Could not join the waitlist." },
        { status: response.status >= 500 ? 500 : 400 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not join the waitlist." }, { status: 500 });
  }
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { useBag } from "@/context/BagContext";

export default function BagPage() {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useBag();

  const [loading, setLoading] = useState(false);

async function handleCheckout() {
  try {
    setLoading(true);

    const response = await fetch("/api/square-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  items: items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
  })),
}),
    });

    const data = await response.json();

    if (!response.ok || !data.url) {
      console.error(data);
      alert("Checkout could not be started. Please try again.");
      return;
    }

    window.location.href = data.url;
  } catch (error) {
    console.error(error);
    alert("Checkout could not be started. Please try again.");
  } finally {
    setLoading(false);
  }
}

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-[#f6f1e8] px-6 py-10 text-[#243f35]">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-4xl font-semibold">Your Bag</h1>

          <Link
            href="/shop"
            className="text-sm uppercase tracking-[0.18em] opacity-70 hover:opacity-100"
          >
            Continue Shopping
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-black/10 bg-white/40 p-8">
            <p className="text-lg">Your bag is empty.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white/40 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="mt-1 text-sm opacity-70">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(item.id)}
                    className="h-10 w-10 border border-black/20"
                  >
                    −
                  </button>

                  <span className="min-w-8 text-center">
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => increaseQuantity(item.id)}
                    className="h-10 w-10 border border-black/20"
                  >
                    +
                  </button>

                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="ml-2 text-sm underline opacity-70 hover:opacity-100"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-8 border-t border-black/10 pt-6">
  <div className="flex items-center justify-between text-xl font-semibold">
    <span>Subtotal</span>
    <span>${subtotal.toFixed(2)}</span>
  </div>

 <button
  type="button"
  onClick={handleCheckout}
  disabled={loading}
  className="mt-6 inline-flex min-h-14 w-full items-center justify-center bg-[#243f35] px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#1c332b] disabled:cursor-wait disabled:opacity-60"
>
  {loading ? "Opening Checkout..." : "Checkout"}
</button>
</div>
          </div>
        )}
      </div>
    </main>
  );
}
"use client";

import { useState } from "react";
import { useBag } from "@/context/BagContext";

type AddToBagButtonProps = {
  id: string;
  name: string;
  price: number;
};

export default function AddToBagButton({
  id,
  name,
  price,
}: AddToBagButtonProps) {
  const { addItem } = useBag();
  const [added, setAdded] = useState(false);

  function handleAddToBag() {
    addItem({
      id,
      name,
      price,
    });

    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1200);
  }

  return (
    <button
      type="button"
      onClick={handleAddToBag}
      className="mt-10 inline-flex min-h-14 w-full items-center justify-center bg-[#243f35] px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#1c332b] sm:w-auto"
    >
      {added ? "Added to Bag ✓" : "Add to Bag"}
    </button>
  );
}
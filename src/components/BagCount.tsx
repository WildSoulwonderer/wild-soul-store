"use client";

import Link from "next/link";
import { useBag } from "@/context/BagContext";

export default function BagCount() {
  const { itemCount } = useBag();

  return (
    <Link href="/bag" className="opacity-60 transition-opacity hover:opacity-100">
      Bag ({itemCount})
    </Link>
  );
}
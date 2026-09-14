"use client";

import { useEffect } from "react";
import { useBag } from "@/context/BagContext";

export default function BagLinkSync() {
  const { itemCount } = useBag();

  useEffect(() => {
    const legacyBagLinks = document.querySelectorAll<HTMLAnchorElement>('a[href="#cart"]');

    legacyBagLinks.forEach((link) => {
      link.href = "/bag";

      const label = link.querySelector("span");
      if (label) {
        label.textContent = `Bag (${itemCount})`;
      }
    });
  }, [itemCount]);

  return null;
}

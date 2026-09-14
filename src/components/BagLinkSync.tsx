"use client";

import { useEffect } from "react";
import { useBag } from "@/context/BagContext";

export default function BagLinkSync() {
  const { itemCount } = useBag();

  useEffect(() => {
    const legacyBagLinks = document.querySelectorAll<HTMLAnchorElement>('a[href="#cart"], a[href="/bag"]');

    legacyBagLinks.forEach((link) => {
      const label = Array.from(link.querySelectorAll("span")).find((span) =>
        span.textContent?.trim().startsWith("Bag (")
      );

      if (!label) return;

      link.href = "/bag";
      label.textContent = `Bag (${itemCount})`;
    });

    const legacyBagLabels = Array.from(
      document.querySelectorAll<HTMLSpanElement>("nav span")
    ).filter((span) => span.textContent?.trim().startsWith("Bag ("));

    legacyBagLabels.forEach((span) => {
      if (span.closest("a")) return;

      const link = document.createElement("a");
      link.href = "/bag";
      link.className = span.className;
      link.textContent = `Bag (${itemCount})`;
      span.replaceWith(link);
    });
  }, [itemCount]);

  return null;
}

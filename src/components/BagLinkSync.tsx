"use client";

import { useEffect } from "react";
import { useBag } from "@/context/BagContext";

function getStoredItemCount() {
  try {
    const savedBag = window.localStorage.getItem("wild-soul-bag");
    if (!savedBag) return 0;

    const items = JSON.parse(savedBag) as Array<{ quantity?: number }>;
    if (!Array.isArray(items)) return 0;

    return items.reduce(
      (total, item) => total + (Number.isFinite(item.quantity) ? Number(item.quantity) : 0),
      0
    );
  } catch {
    return 0;
  }
}

function syncLegacyProductLinks() {
  const linkUpdates: Record<string, string> = {
    "#bush-relief": "/shop/bush-relief",
    "#misty-glen": "/shop/misty-glen",
    "#wild-renewal": "/shop/wild-renewal",
  };

  for (const [oldHref, newHref] of Object.entries(linkUpdates)) {
    document
      .querySelectorAll<HTMLAnchorElement>(`a[href="${oldHref}"]`)
      .forEach((link) => {
        link.href = newHref;
      });
  }

  const wildRenewalLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>('a[href="/shop/wild-renewal"]')
  );

  wildRenewalLinks.forEach((link) => {
    const article = link.closest("article");
    if (!article) return;

    const price = Array.from(article.querySelectorAll<HTMLParagraphElement>("p")).find(
      (paragraph) => paragraph.textContent?.trim() === "$29.95"
    );

    if (price) {
      price.textContent = "$24.95";
    }
  });
}

export default function BagLinkSync() {
  const { itemCount } = useBag();

  useEffect(() => {
    function syncStorefront() {
      const count = Math.max(itemCount, getStoredItemCount());

      const legacyBagLinks = document.querySelectorAll<HTMLAnchorElement>(
        'a[href="#cart"], a[href="/bag"]'
      );

      legacyBagLinks.forEach((link) => {
        const label = Array.from(link.querySelectorAll("span")).find((span) =>
          span.textContent?.trim().startsWith("Bag (")
        );

        if (!label) return;

        link.href = "/bag";
        label.textContent = `Bag (${count})`;
      });

      const legacyBagLabels = Array.from(
        document.querySelectorAll<HTMLSpanElement>("nav span")
      ).filter((span) => span.textContent?.trim().startsWith("Bag ("));

      legacyBagLabels.forEach((span) => {
        if (span.closest("a")) return;

        const link = document.createElement("a");
        link.href = "/bag";
        link.className = span.className;
        link.textContent = `Bag (${count})`;
        span.replaceWith(link);
      });

      syncLegacyProductLinks();
    }

    syncStorefront();

    const observer = new MutationObserver(syncStorefront);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("storage", syncStorefront);

    const timeout = window.setTimeout(syncStorefront, 250);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", syncStorefront);
      window.clearTimeout(timeout);
    };
  }, [itemCount]);

  return null;
}

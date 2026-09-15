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
        if (link.getAttribute("href") !== newHref) link.setAttribute("href", newHref);
      });
  }

  document
    .querySelectorAll<HTMLAnchorElement>('a[href="/shop/wild-renewal"]')
    .forEach((link) => {
      const article = link.closest("article");
      if (!article) return;

      const price = Array.from(article.querySelectorAll<HTMLParagraphElement>("p")).find(
        (paragraph) => paragraph.textContent?.trim() === "$29.95"
      );

      if (price && price.textContent !== "$24.95") price.textContent = "$24.95";
    });
}

export default function BagLinkSync() {
  const { itemCount } = useBag();

  useEffect(() => {
    function syncStorefront() {
      const count = Math.max(itemCount, getStoredItemCount());

      document
        .querySelectorAll<HTMLAnchorElement>('a[href="#cart"], a[href="/bag"]')
        .forEach((link) => {
          const label = Array.from(link.querySelectorAll("span")).find((span) => {
  const text = span.textContent?.trim() ?? "";
  return text === "Bag" || text.startsWith("Bag (");
});

if (link.getAttribute("href") !== "/bag") {
  link.setAttribute("href", "/bag");
}

const nextText = `Bag (${count})`;

if (label) {
  if (label.textContent !== nextText) {
    label.textContent = nextText;
  }
} else if (link.textContent?.trim() === "Bag") {
  link.textContent = nextText;
}
        });

      Array.from(document.querySelectorAll<HTMLSpanElement>("nav span"))
        .filter((span) => span.textContent?.trim().startsWith("Bag ("))
        .forEach((span) => {
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
    window.addEventListener("storage", syncStorefront);

    return () => {
      window.removeEventListener("storage", syncStorefront);
    };
  }, [itemCount]);

  return null;
}

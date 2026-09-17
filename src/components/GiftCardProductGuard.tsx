"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GiftCardProductGuard() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/shop") return;

    const giftHref = "/shop/gift-card";
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(`a[href="${giftHref}"]`));

    for (const link of links) {
      if (link.closest("#wild-soul-gift-cards")) continue;
      const darkCollection = link.closest<HTMLElement>("section");
      if (darkCollection?.className.includes("bg-[#243f35]")) link.remove();
    }
  }, [pathname]);

  return null;
}

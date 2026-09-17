"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const serif = "var(--font-wild-serif), Georgia, 'Times New Roman', serif";

function findSection(first: string, second: string) {
  return Array.from(document.querySelectorAll<HTMLElement>("section")).find(
    (section) => section.textContent?.includes(first) && section.textContent?.includes(second)
  );
}

function addFooterLink() {
  const footer = document.querySelector("footer");
  if (!footer) return;
  const nav = Array.from(footer.querySelectorAll("nav")).find(
    (item) => item.textContent?.includes("Shop") && item.textContent?.includes("Our Story")
  );
  if (!nav || nav.querySelector('a[href="/shop/gift-card"]')) return;
  const link = document.createElement("a");
  link.href = "/shop/gift-card";
  link.className = "transition-opacity hover:opacity-60";
  link.textContent = "Gift Cards";
  nav.appendChild(link);
}

function removeShopGiftCardSection() {
  findSection("Wild Soul Gift Cards", "Shop Gift Cards")?.remove();
  document.getElementById("wild-soul-gift-cards")?.remove();
}

function addHomeGiftCardSection() {
  if (document.getElementById("wild-soul-home-gift-cards")) return;
  const takeFive = findSection("Not another thing", "for your to-do list");
  if (!takeFive) return;

  const section = document.createElement("section");
  section.id = "wild-soul-home-gift-cards";
  section.className = "bg-[#e8e1d5] px-7 py-20 sm:px-12 sm:py-24 lg:px-20";
  const wrapper = document.createElement("div");
  wrapper.className = "mx-auto max-w-[1450px] border-y border-[#243f35]/15 py-14 sm:py-18";
  const grid = document.createElement("div");
  grid.className = "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center";

  const left = document.createElement("div");
  const eyebrow = document.createElement("p");
  eyebrow.className = "mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#9a6545]";
  eyebrow.textContent = "Wild Soul Gift Cards";
  const heading = document.createElement("h2");
  heading.className = "text-[clamp(3.2rem,6vw,6rem)] font-normal leading-[0.9] text-[#243f35]";
  heading.style.fontFamily = serif;
  heading.append("Give them a little", document.createElement("br"));
  const accent = document.createElement("span");
  accent.className = "italic text-[#704a35]";
  accent.textContent = "Wild Soul.";
  heading.appendChild(accent);
  left.append(eyebrow, heading);

  const right = document.createElement("div");
  right.className = "max-w-[650px]";
  const intro = document.createElement("p");
  intro.className = "text-2xl italic leading-snug text-[#704a35]";
  intro.style.fontFamily = serif;
  intro.textContent = "Not sure what they'll love most? Let them choose.";
  const body = document.createElement("p");
  body.className = "mt-5 text-base leading-8 text-[#5f574f] sm:text-lg";
  body.textContent = "Choose the value, add your message and send a Wild Soul eGift Card straight to them.";
  const button = document.createElement("a");
  button.href = "/shop/gift-card";
  button.className = "mt-8 inline-flex border border-[#243f35] bg-[#243f35] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#f4eee4] transition-opacity hover:opacity-85";
  button.textContent = "Shop Gift Cards";
  right.append(intro, body, button);

  grid.append(left, right);
  wrapper.appendChild(grid);
  section.appendChild(wrapper);
  takeFive.parentNode?.insertBefore(section, takeFive);
}

export default function GiftCardPlacement() {
  const pathname = usePathname();
  useEffect(() => {
    const apply = () => {
      addFooterLink();
      if (pathname === "/") addHomeGiftCardSection();
      if (pathname === "/shop") removeShopGiftCardSection();
    };
    apply();
    const timer = window.setTimeout(apply, 100);
    return () => window.clearTimeout(timer);
  }, [pathname]);
  return null;
}

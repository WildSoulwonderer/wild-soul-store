"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type StorefrontContent = {
  id: number;
  section: "news" | "coming_soon";
  title: string;
  label: string | null;
  body: string | null;
  status: string | null;
  display_order: number;
  visible: boolean;
};

const serif = "var(--font-wild-serif), Georgia, 'Times New Roman', serif";

const fallbackNews: StorefrontContent[] = [
  { id: -1, section: "news", title: "New little luxuries have landed", label: "New at Wild Soul", body: "Desert Woods and Vanilla Glow whipped body soaps are joining the line-up alongside Vanilla Glow Shimmer Oil and our Bare and Wild Orange lip balms.", status: "New", display_order: 1, visible: true },
  { id: -2, section: "news", title: "Bracknell Lodge is next", label: "Out in the Wild", body: "Wild Soul is heading to Bracknell Lodge in Toowoomba. Come smell everything, try the testers and see the new additions in person.", status: "Market News", display_order: 2, visible: true },
  { id: -3, section: "news", title: "Earthbound is taking shape", label: "Behind the Scenes", body: "Earthbound is our Jesmonite homewares collection — earthy handmade pieces such as soap dishes and other practical little objects designed to sit alongside your Wild Soul favourites.", status: "In Development", display_order: 3, visible: true },
];

const fallbackComingSoon: StorefrontContent[] = [
  { id: -4, section: "coming_soon", title: "Earthbound", label: "Jesmonite Homewares", body: "Earthy, handmade Jesmonite pieces including soap dishes and practical little objects made to live alongside your Wild Soul favourites.", status: "Coming Soon", display_order: 1, visible: true },
  { id: -5, section: "coming_soon", title: "Bicarb-Free Stick Deodorant", label: "Everyday Care", body: "A Queensland-friendly deodorant stick is in development, with a bicarb-free formula and a proper Wild Soul scent profile.", status: "Testing", display_order: 2, visible: true },
  { id: -6, section: "coming_soon", title: "Shampoo & Conditioner Bars", label: "Hair Care", body: "Low-waste hair care is being explored for a future Wild Soul release, with formulas and suppliers still being tested.", status: "In Development", display_order: 3, visible: true },
];

async function loadContent(): Promise<StorefrontContent[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return [];

  try {
    const response = await fetch(
      `${url}/rest/v1/storefront_content?select=id,section,title,label,body,status,display_order,visible&visible=eq.true&order=section.asc,display_order.asc,id.asc`,
      { headers: { apikey: key, Authorization: `Bearer ${key}` }, cache: "no-store" }
    );
    if (!response.ok) return [];
    return (await response.json()) as StorefrontContent[];
  } catch {
    return [];
  }
}

function findComingSoonSection() {
  return Array.from(document.querySelectorAll<HTMLElement>("section")).find((section) =>
    section.textContent?.includes("Coming to Wild Soul")
  );
}

function makeCard(item: StorefrontContent, minHeight = true) {
  const article = document.createElement("article");
  article.className = `${minHeight ? "flex min-h-[330px] flex-col justify-between " : ""}border border-[#243f35]/15 bg-[#f4eee4] p-8 sm:p-10`;

  const content = document.createElement("div");
  const label = document.createElement("p");
  label.className = "text-xs font-semibold uppercase tracking-[0.25em] text-[#9a6545]";
  label.textContent = item.label || item.section.replace("_", " ");

  const title = document.createElement("h3");
  title.className = "mt-5 text-4xl font-normal text-[#243f35]";
  title.style.fontFamily = serif;
  title.textContent = item.title;

  const body = document.createElement("p");
  body.className = "mt-5 text-base leading-8 text-[#5f574f]";
  body.textContent = item.body || "";

  content.append(label, title, body);
  article.appendChild(content);

  if (item.status) {
    const status = document.createElement("p");
    status.className = "mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#704a35]";
    status.textContent = item.status;
    article.appendChild(status);
  }

  return article;
}

function renderComingSoon(items: StorefrontContent[]) {
  const section = findComingSoonSection();
  if (!section || items.length === 0) return;

  const existingGrid = Array.from(section.querySelectorAll<HTMLDivElement>("div")).find((div) =>
    div.className.includes("sm:grid-cols-2") && div.querySelector("article")
  );

  if (!existingGrid) return;
  existingGrid.replaceChildren(...items.map((item) => makeCard(item)));
}

function renderNews(items: StorefrontContent[]) {
  const comingSoonSection = findComingSoonSection();
  if (!comingSoonSection || items.length === 0) return;

  document.getElementById("wild-soul-news")?.remove();

  const section = document.createElement("section");
  section.id = "wild-soul-news";
  section.className = "bg-[#f4eee4] px-7 py-24 sm:px-12 sm:py-32 lg:px-20";

  const wrapper = document.createElement("div");
  wrapper.className = "mx-auto max-w-[1450px]";

  const headingGrid = document.createElement("div");
  headingGrid.className = "grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end";

  const headingBlock = document.createElement("div");
  const eyebrow = document.createElement("p");
  eyebrow.className = "mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#9a6545]";
  eyebrow.textContent = "Wild Soul News";

  const heading = document.createElement("h2");
  heading.className = "text-[clamp(3.4rem,5vw,5.8rem)] font-normal leading-[0.92] text-[#243f35]";
  heading.style.fontFamily = serif;
  heading.append("Fresh from", document.createElement("br"));
  const italic = document.createElement("span");
  italic.className = "italic text-[#704a35]";
  italic.textContent = "the Wild Soul bench.";
  heading.appendChild(italic);
  headingBlock.append(eyebrow, heading);

  const intro = document.createElement("p");
  intro.className = "max-w-[620px] text-lg leading-9 text-[#5f574f]";
  intro.textContent = "New batches, market days and the things taking shape behind the scenes — all in one spot, without making you hunt through social media to find them.";

  headingGrid.append(headingBlock, intro);

  const cards = document.createElement("div");
  cards.className = "mt-16 grid gap-5 md:grid-cols-3";
  items.forEach((item) => cards.appendChild(makeCard(item, false)));

  wrapper.append(headingGrid, cards);
  section.appendChild(wrapper);
  comingSoonSection.parentNode?.insertBefore(section, comingSoonSection);
}

function renderMarkets() {
  const comingSoonSection = findComingSoonSection();
  if (!comingSoonSection) return;

  document.getElementById("shop-markets")?.remove();

  const section = document.createElement("section");
  section.id = "shop-markets";
  section.className = "bg-[#e8e1d5]";

  const grid = document.createElement("div");
  grid.className = "mx-auto grid max-w-[1600px] lg:grid-cols-[1.15fr_0.85fr]";

  const imageWrap = document.createElement("div");
  imageWrap.className = "min-h-[430px] lg:min-h-[700px]";
  const image = document.createElement("img");
  image.src = "/images/wild-soul-market.jpg";
  image.alt = "Wild Soul market stall with handmade skincare, recovery products and jewellery";
  image.loading = "lazy";
  image.className = "h-full min-h-[430px] w-full object-cover lg:min-h-[700px]";
  imageWrap.appendChild(image);

  const copyWrap = document.createElement("div");
  copyWrap.className = "flex items-center px-8 py-20 sm:px-14 sm:py-24 lg:px-20";
  const copy = document.createElement("div");
  copy.className = "max-w-[560px]";

  const eyebrow = document.createElement("p");
  eyebrow.className = "mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#9a6545]";
  eyebrow.textContent = "Find Wild Soul Out in the Wild";

  const heading = document.createElement("h2");
  heading.className = "text-[clamp(3.5rem,5vw,5.5rem)] leading-[0.95] text-[#243f35]";
  heading.style.fontFamily = serif;
  heading.append("Come find us", document.createElement("br"), "in person.");

  const lead = document.createElement("p");
  lead.className = "mt-8 text-[1.7rem] italic leading-[1.35] text-[#704a35]";
  lead.style.fontFamily = serif;
  lead.textContent = "Some things are just easier when you can pick them up, smell them and try them for yourself.";

  const body = document.createElement("p");
  body.className = "mt-8 text-base leading-8 text-[#655d55] sm:text-lg";
  body.textContent = "Come say hello. Smell everything. Try the testers. You don’t have to know what you’re looking for.";

  const events = document.createElement("div");
  events.className = "mt-12 border-t border-[#704a35]/30 pt-8";
  const eventsLabel = document.createElement("p");
  eventsLabel.className = "text-xs font-semibold uppercase tracking-[0.25em] text-[#9a6545]";
  eventsLabel.textContent = "Upcoming Events";

  const eventList = document.createElement("div");
  eventList.className = "mt-6 space-y-8";

  const bracknell = document.createElement("article");
  const bracknellTitle = document.createElement("p");
  bracknellTitle.className = "text-3xl";
  bracknellTitle.style.fontFamily = serif;
  bracknellTitle.textContent = "Bracknell Lodge — Carnival of Flowers";
  const bracknellDate = document.createElement("p");
  bracknellDate.className = "mt-2 font-medium";
  bracknellDate.textContent = "20 September 2026";
  const bracknellPlace = document.createElement("p");
  bracknellPlace.className = "mt-1 text-[#655d55]";
  bracknellPlace.textContent = "Bracknell Lodge, Toowoomba";
  bracknell.className = "border-b border-[#704a35]/20 pb-7";
  bracknell.append(bracknellTitle, bracknellDate, bracknellPlace);

  const pink = document.createElement("article");
  const pinkTitle = document.createElement("p");
  pinkTitle.className = "text-3xl";
  pinkTitle.style.fontFamily = serif;
  pinkTitle.textContent = "Pink Ladies Day";
  const pinkDate = document.createElement("p");
  pinkDate.className = "mt-2 font-medium";
  pinkDate.textContent = "9 October 2026";
  const pinkPlace = document.createElement("p");
  pinkPlace.className = "mt-1 text-[#655d55]";
  pinkPlace.textContent = "Dalby & Northern Downs Jockey Club";
  pink.append(pinkTitle, pinkDate, pinkPlace);

  eventList.append(bracknell, pink);
  events.append(eventsLabel, eventList);
  copy.append(eyebrow, heading, lead, body, events);
  copyWrap.appendChild(copy);
  grid.append(imageWrap, copyWrap);
  section.appendChild(grid);

  comingSoonSection.parentNode?.insertBefore(section, comingSoonSection);
}

export default function StoreContentSync() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/shop") return;

    let cancelled = false;

    renderMarkets();
    renderNews(fallbackNews);
    renderComingSoon(fallbackComingSoon);

    async function sync() {
      const content = await loadContent();
      if (cancelled || content.length === 0) return;

      const news = content.filter((item) => item.section === "news");
      const comingSoon = content.filter((item) => item.section === "coming_soon");

      if (news.length > 0) renderNews(news);
      if (comingSoon.length > 0) renderComingSoon(comingSoon);
    }

    const timer = window.setTimeout(() => void sync(), 50);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}

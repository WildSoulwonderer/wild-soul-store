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

async function loadContent(): Promise<StorefrontContent[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return [];

  const response = await fetch(
    `${url}/rest/v1/storefront_content?select=id,section,title,label,body,status,display_order,visible&visible=eq.true&order=section.asc,display_order.asc,id.asc`,
    {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    console.error("Unable to load storefront content", response.status);
    return [];
  }

  return (await response.json()) as StorefrontContent[];
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

  const intro = Array.from(section.querySelectorAll<HTMLParagraphElement>("p")).find((paragraph) =>
    paragraph.textContent?.includes("pieces of Wild Soul currently finding their feet") ||
    paragraph.textContent?.includes("next Wild Soul pieces")
  );

  if (intro) {
    intro.textContent =
      "There is always something being tested, tweaked or quietly taking shape behind the scenes. These are the next Wild Soul pieces currently finding their feet.";
  }

  const existingGrid = Array.from(section.querySelectorAll<HTMLDivElement>("div")).find((div) =>
    div.className.includes("sm:grid-cols-2") && div.querySelector("article")
  );

  if (!existingGrid) return;
  existingGrid.replaceChildren(...items.map((item) => makeCard(item)));
}

function renderNews(items: StorefrontContent[]) {
  const comingSoonSection = findComingSoonSection();
  if (!comingSoonSection) return;

  document.getElementById("wild-soul-news")?.remove();
  if (items.length === 0) return;

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
  intro.textContent =
    "New batches, market days and the things taking shape behind the scenes — all in one spot, without making you hunt through social media to find them.";

  headingGrid.append(headingBlock, intro);

  const cards = document.createElement("div");
  cards.className = "mt-16 grid gap-5 md:grid-cols-3";
  items.forEach((item) => cards.appendChild(makeCard(item, false)));

  wrapper.append(headingGrid, cards);
  section.appendChild(wrapper);
  comingSoonSection.parentNode?.insertBefore(section, comingSoonSection);
}

export default function StoreContentSync() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/shop") return;

    let cancelled = false;

    async function sync() {
      const content = await loadContent();
      if (cancelled || content.length === 0) return;

      renderNews(content.filter((item) => item.section === "news"));
      renderComingSoon(content.filter((item) => item.section === "coming_soon"));
    }

    const timer = window.setTimeout(() => void sync(), 50);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}

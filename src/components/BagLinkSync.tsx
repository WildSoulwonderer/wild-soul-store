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

function findComingSoonSection() {
  return Array.from(document.querySelectorAll<HTMLElement>("section")).find((section) =>
    section.textContent?.includes("pieces of Wild Soul currently finding their feet")
  );
}

function syncComingSoon() {
  if (window.location.pathname !== "/shop") return;

  const section = findComingSoonSection();
  if (!section) return;

  const updates = [
    {
      name: "Earthbound Shampoo Bars",
      type: "Hair Care",
      text: "A low-waste shampoo bar made for simple wash days, practical routines and hair that still deserves the good stuff.",
    },
    {
      name: "Earthbound Conditioner Bars",
      type: "Hair Care",
      text: "Solid conditioning care designed to soften, smooth and travel well without another plastic bottle in the shower.",
    },
    {
      name: "Bicarb-Free Stick Deodorant",
      type: "Everyday Care",
      text: "A gentle stick deodorant in development for sensitive underarms, hot Queensland days and people who do not want to scoop paste from a tin.",
    },
    {
      name: "Earthbound Soap Dishes",
      type: "Bath + Home",
      text: "Simple earthy soap dishes designed to keep bars dry, tidy and looking at home beside the rest of the Earthbound collection.",
    },
  ];

  const intro = Array.from(section.querySelectorAll<HTMLParagraphElement>("p")).find((paragraph) =>
    paragraph.textContent?.includes("pieces of Wild Soul currently finding their feet")
  );

  if (intro) {
    intro.textContent =
      "There is always something being tested, tweaked or quietly taking shape behind the scenes. These are the next Wild Soul pieces currently finding their feet.";
  }

  const articles = Array.from(section.querySelectorAll<HTMLElement>("article"));

  articles.slice(0, updates.length).forEach((article, index) => {
    const update = updates[index];
    const heading = article.querySelector("h3");
    const paragraphs = Array.from(article.querySelectorAll<HTMLParagraphElement>("p"));

    if (heading && heading.textContent !== update.name) {
      heading.textContent = update.name;
    }

    if (paragraphs[0] && paragraphs[0].textContent !== update.type) {
      paragraphs[0].textContent = update.type;
    }

    if (paragraphs[1] && paragraphs[1].textContent !== update.text) {
      paragraphs[1].textContent = update.text;
    }
  });
}

function injectShopNews() {
  if (window.location.pathname !== "/shop") return;
  if (document.getElementById("wild-soul-news")) return;

  const comingSoonSection = findComingSoonSection();
  if (!comingSoonSection) return;

  const news = document.createElement("section");
  news.id = "wild-soul-news";
  news.className = "bg-[#e8e1d5] px-7 py-24 sm:px-12 sm:py-32 lg:px-20";
  news.innerHTML = `
    <div class="mx-auto max-w-[1450px]">
      <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p class="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#9a6545]">Wild Soul News</p>
          <h2 class="text-[clamp(3.4rem,5vw,5.8rem)] font-normal leading-[0.92] text-[#243f35]" style="font-family:var(--font-wild-serif), Georgia, 'Times New Roman', serif">
            Fresh from<br><span class="italic text-[#704a35]">the Wild Soul bench.</span>
          </h2>
        </div>
        <p class="max-w-[620px] text-lg leading-9 text-[#5f574f]">
          New batches, market days and the things taking shape behind the scenes — all in one spot, without making you hunt through social media to find them.
        </p>
      </div>

      <div class="mt-16 grid gap-5 md:grid-cols-3">
        <article class="border border-[#243f35]/15 bg-[#f4eee4] p-8 sm:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6545]">Fresh Drop</p>
          <h3 class="mt-5 text-3xl font-normal text-[#243f35]" style="font-family:var(--font-wild-serif), Georgia, 'Times New Roman', serif">Five new little luxuries.</h3>
          <p class="mt-5 text-base leading-8 text-[#5f574f]">Desert Woods and Vanilla Glow whipped body soaps, Vanilla Glow Shimmer Oil, Bare lip balm and Wild Orange lip balm are the newest additions making their way into the store.</p>
        </article>

        <article class="border border-[#243f35]/15 bg-[#f4eee4] p-8 sm:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6545]">Out in the Wild</p>
          <h3 class="mt-5 text-3xl font-normal text-[#243f35]" style="font-family:var(--font-wild-serif), Georgia, 'Times New Roman', serif">Bracknell Lodge is next.</h3>
          <p class="mt-5 text-base leading-8 text-[#5f574f]">Wild Soul is packing up for the next market in the Toowoomba region, with the new body care coming along for its first proper outing.</p>
        </article>

        <article class="border border-[#243f35]/15 bg-[#f4eee4] p-8 sm:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6545]">Behind the Scenes</p>
          <h3 class="mt-5 text-3xl font-normal text-[#243f35]" style="font-family:var(--font-wild-serif), Georgia, 'Times New Roman', serif">Earthbound is growing.</h3>
          <p class="mt-5 text-base leading-8 text-[#5f574f]">Shampoo and conditioner bars, practical soap dishes and more low-waste everyday care are being worked through now — slowly, properly and only if they earn their place.</p>
        </article>
      </div>
    </div>
  `;

  comingSoonSection.parentNode?.insertBefore(news, comingSoonSection);
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
      syncComingSoon();
      injectShopNews();
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

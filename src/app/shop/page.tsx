import Link from "next/link";
import { getStoreProducts, type StoreProduct } from "@/lib/store-products";

const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

type ShopProductLink = {
  name: string;
  href: string | null;
};

type CollectionDefinition = {
  id: "body" | "bath" | "recovery" | "skin";
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  legacyProducts: string[];
};

const collectionDefinitions: CollectionDefinition[] = [
  {
    id: "body",
    name: "Body",
    tagline: "Made for skin that’s lived a little.",
    description: "Scrubs, whipped soaps, buff bars and everyday body care made for real skin, real routines and whatever five minutes you can steal.",
    image: "/images/wild-soul-body.png",
    imageAlt: "Wild Soul body care products in a warm relaxed bathroom setting",
    legacyProducts: ["Wild Renewal", "Sunlit Bloom", "Desert Calm", "Ocean Drift", "Bush Bloom", "First Light", "Highland Mist"],
  },
  {
    id: "bath",
    name: "Bath",
    tagline: "Disappear for a little while.",
    description: "Simple bath soaks for tired bodies, long weeks and those rare moments when nobody needs anything from you.",
    image: "/images/wild-soul-bath.png",
    imageAlt: "Wild Soul bath soak beside a warm softly lit bath",
    legacyProducts: ["Highland Recovery", "Petal & Plum"],
  },
  {
    id: "recovery",
    name: "Recovery",
    tagline: "For bodies that have done the work.",
    description: "Small-batch balms made for tired hands, muscles, feet and bodies after work, travel, gardens, paddocks and everything in between.",
    image: "/images/wild-soul-recovery.png",
    imageAlt: "Wild Soul recovery balm on weathered timber in an Australian setting",
    legacyProducts: ["Bush Relief", "Misty Glen"],
  },
  {
    id: "skin",
    name: "Skin",
    tagline: "Simple care. No ten-step routine.",
    description: "Botanical care for your face and lips, made to nourish, soften and glow without making life complicated.",
    image: "/images/wild-soul-face.png",
    imageAlt: "Wild Soul botanical face oil and lip balm in warm morning light",
    legacyProducts: ["Ironwood", "Red Dust", "Golden Grove"],
  },
];

const comingSoon = [
  { name: "Earthbound", type: "Jesmonite Homewares", text: "Earthy, handmade Jesmonite pieces inspired by the Australian bush and the wild places we call home." },
  { name: "Wild Soul Deodorant", type: "Everyday Care", text: "A bicarb-free stick deodorant built for Queensland days, busy bodies and everyday life." },
  { name: "Shampoo Bars", type: "Hair Care", text: "Simple solid shampoo made for everyday use without filling the shower with another plastic bottle." },
  { name: "Conditioner Bars", type: "Hair Care", text: "A solid conditioning bar designed to soften and smooth while keeping the routine beautifully simple." },
];

const legacyProductLinks: Record<string, string> = {
  "Bush Relief": "/shop/bush-relief",
  "Misty Glen": "/shop/misty-glen",
  "First Light": "/shop/first-light",
  "Highland Mist": "/shop/highland-mist",
  "Wild Renewal": "/shop/wild-renewal",
  "Sunlit Bloom": "/shop/sunlit-bloom",
  "Ocean Drift": "/shop/ocean-drift",
  "Desert Calm": "/shop/desert-calm",
  "Highland Recovery": "/shop/highland-recovery",
  "Petal & Plum": "/shop/petal-and-plum",
  "Ironwood": "/shop/ironwood",
  "Red Dust": "/shop/red-dust",
  "Golden Grove": "/shop/golden-grove",
};

function getCollectionId(product: StoreProduct): CollectionDefinition["id"] {
  const category = (product.category ?? "").trim().toLowerCase();
  const name = product.name.trim().toLowerCase();
  const value = `${category} ${name}`;

  if (category === "bath" || value.includes("bath soak") || category.includes("soak")) return "bath";
  if (
    category.includes("lip balm") ||
    category === "skin oils" ||
    category === "skin oil" ||
    category === "oil" ||
    value.includes("face oil") ||
    value.includes("beard oil") ||
    value.includes("face & beard") ||
    value.includes("face and beard") ||
    value.includes("shimmer oil")
  ) return "skin";
  if (
    category === "recovery" ||
    category === "balm" ||
    category.includes("recovery") ||
    value.includes("recovery balm") ||
    name === "bush relief" ||
    name === "misty glen"
  ) return "recovery";
  return "body";
}

const productTypeLabels: Record<string, string> = {
  "Wild Renewal": "Coffee & Sugar Scrub", "Sunlit Bloom": "Sugar Scrub", "Desert Calm": "Salt Scrub", "Ocean Drift": "Salt Scrub",
  "First Light": "Buff Bar", "Highland Mist": "Buff Bar", "Highland Recovery": "Bath Soak", "Petal & Plum": "Bath Soak",
  "Bush Relief": "Recovery Balm", "Misty Glen": "Recovery Balm", "Ironwood": "Face & Beard Oil", "Red Dust": "Face & Beard Oil", "Golden Grove": "Face & Beard Oil",
};

function isGiftCard(product: StoreProduct) {
  const category = (product.category ?? "").trim().toLowerCase();
  const slug = (product.store_slug ?? "").trim().toLowerCase();
  return category.includes("gift card") || category.includes("giftcard") || slug === "gift-card";
}

function buildCollectionProducts(definition: CollectionDefinition, liveProducts: StoreProduct[]): ShopProductLink[] {
  const products: ShopProductLink[] = definition.legacyProducts.map((name) => ({
    name: productTypeLabels[name] ? `${name} — ${productTypeLabels[name]}` : name,
    href: legacyProductLinks[name] ?? null,
  }));
  const seen = new Set<string>();
  for (const name of definition.legacyProducts) {
    seen.add(`name:${name.toLowerCase()}`);
    const href = legacyProductLinks[name];
    if (href) seen.add(`href:${href}`);
  }

  for (const product of liveProducts) {
    if (isGiftCard(product)) continue;
    if (getCollectionId(product) !== definition.id) continue;
    const href = `/shop/${product.store_slug}`;
    const hrefKey = `href:${href}`;
    const nameKey = `name:${product.name.toLowerCase()}`;
    if (seen.has(hrefKey) || seen.has(nameKey)) continue;
    const typeLabel = productTypeLabels[product.name] ?? product.category;
    products.push({ name: typeLabel ? `${product.name} — ${typeLabel}` : product.name, href });
    seen.add(hrefKey);
    seen.add(nameKey);
  }
  return products;
}

export default async function ShopPage() {
  const liveProducts = await getStoreProducts();
  const collections = collectionDefinitions.map((definition) => ({ ...definition, products: buildCollectionProducts(definition, liveProducts) }));

  return (
    <main className="min-h-screen bg-[#f4eee4] text-[#243f35]">
      <header className="relative z-30 border-b border-[#243f35]/10 bg-[#f4eee4]">
        <div className="mx-auto flex h-[92px] max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-12">
          <Link href="/" className="flex items-center gap-5">
            <span className="text-[1.7rem] font-medium tracking-[0.28em] text-[#243f35] sm:text-[2rem]">WILD SOUL</span>
            <svg className="hidden h-10 w-20 text-[#704a35] sm:block" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7 40C25 35 39 25 55 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M28 31C24 24 23 19 25 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M39 24C34 18 33 13 35 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M48 16C48 10 50 6 54 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M35 27C41 28 46 31 49 35" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M48 18C54 19 59 22 63 26" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </Link>
          <nav className="hidden items-center gap-10 text-xl text-[#243f35] md:flex" style={serifFont}>
            <Link href="/shop" className="border-b border-[#704a35] pb-1 text-[#704a35]">Shop</Link>
            <Link href="/our-story" className="transition-opacity hover:opacity-60">Our Story</Link>
            <Link href="/#markets" className="transition-opacity hover:opacity-60">Markets</Link>
            <span className="h-8 w-px bg-[#243f35]/30" /><span className="opacity-60">Bag (0)</span>
          </nav>
          <button type="button" aria-label="Open menu" className="flex flex-col gap-1.5 md:hidden"><span className="h-px w-7 bg-[#243f35]" /><span className="h-px w-7 bg-[#243f35]" /><span className="h-px w-7 bg-[#243f35]" /></button>
        </div>
      </header>

      <section className="px-7 pb-20 pt-20 sm:px-12 sm:pb-28 sm:pt-28 lg:px-20">
        <div className="mx-auto grid max-w-[1450px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div><p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#9a6545]">Shop Wild Soul</p><h1 className="text-[clamp(4rem,8vw,8.5rem)] font-normal leading-[0.82] tracking-[-0.055em] text-[#243f35]" style={serifFont}>Made for<br /><span className="italic text-[#704a35]">real life.</span></h1></div>
          <div className="max-w-[650px] lg:pb-2"><p className="text-[1.7rem] italic leading-[1.35] text-[#704a35] sm:text-[2.2rem]" style={serifFont}>Small-batch care for the five minutes you didn&apos;t know you needed.</p><p className="mt-7 max-w-[600px] text-base leading-8 text-[#5f574f] sm:text-lg sm:leading-9">No complicated routines. No saving the good stuff for later. Just body, bath, recovery and skin care made to be opened, used, carried around and worked into ordinary life.</p></div>
        </div>
      </section>

      <section className="bg-[#243f35] text-[#f4eee4]">
        <div className="mx-auto max-w-[1450px] px-7 py-20 sm:px-12 sm:py-28 lg:px-20">
          {collections.map((collection, index) => (
            <div key={collection.id} id={collection.id} className={`grid scroll-mt-24 gap-10 py-16 first:pt-0 last:pb-0 lg:grid-cols-[0.8fr_1.2fr] ${index !== collections.length - 1 ? "border-b border-[#f4eee4]/15" : ""}`}>
              <div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#c88f68]">Wild Soul {collection.name}</p><h2 className="text-[clamp(3.2rem,5vw,5.8rem)] font-normal leading-[0.9] text-[#f4eee4]" style={serifFont}>{collection.name}</h2><p className="mt-5 text-2xl italic leading-snug text-[#d5a27d]" style={serifFont}>{collection.tagline}</p></div>
              <div className="lg:pt-4"><p className="max-w-[700px] text-base leading-8 text-[#f4eee4]/75 sm:text-lg sm:leading-9">{collection.description}</p><div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">{collection.products.map((product) => product.href ? <Link key={`${collection.id}-${product.name}`} href={product.href} className="border-b border-[#f4eee4]/25 pb-2 text-lg text-[#f4eee4]/90 transition-colors hover:border-[#d5a27d] hover:text-[#d5a27d]" style={serifFont}>{product.name}</Link> : <span key={`${collection.id}-${product.name}`} className="border-b border-[#f4eee4]/15 pb-2 text-lg text-[#f4eee4]/65" style={serifFont}>{product.name}</span>)}</div></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f4eee4] px-7 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-[1450px] border-y border-[#243f35]/15 py-14 sm:py-18">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#9a6545]">Wild Soul Gift Cards</p>
              <h2 className="text-[clamp(3.2rem,6vw,6rem)] font-normal leading-[0.9] text-[#243f35]" style={serifFont}>Give them a little<br /><span className="italic text-[#704a35]">Wild Soul.</span></h2>
            </div>
            <div className="max-w-[650px]">
              <p className="text-2xl italic leading-snug text-[#704a35]" style={serifFont}>Not sure what they&apos;ll love most? Let them choose.</p>
              <p className="mt-5 text-base leading-8 text-[#5f574f] sm:text-lg">Choose the value, add your message and send a Wild Soul eGift Card straight to them.</p>
              <Link href="/shop/gift-card" className="mt-8 inline-flex border border-[#243f35] bg-[#243f35] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#f4eee4] transition-opacity hover:opacity-85">Shop Gift Cards</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e8e1d5] px-7 py-20 sm:px-12 sm:py-28 lg:px-20">
        <div className="mx-auto max-w-[1450px]"><div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#9a6545]">Coming to Wild Soul</p><h2 className="text-[clamp(3.2rem,6vw,6.5rem)] font-normal leading-[0.9] text-[#243f35]" style={serifFont}>There&apos;s more<br /><span className="italic text-[#704a35]">taking shape.</span></h2><p className="mt-8 max-w-[520px] text-base leading-8 text-[#5f574f] sm:text-lg sm:leading-9">I&apos;m always making, testing and changing things. These are the next pieces of Wild Soul currently finding their feet.</p></div>
          <div className="grid gap-5 sm:grid-cols-2">{comingSoon.map((item) => <article key={item.name} className="flex min-h-[280px] flex-col justify-between border border-[#243f35]/15 bg-[#f4eee4] p-8 sm:min-h-[310px] sm:p-10"><div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a6545]">{item.type}</p><h3 className="mt-5 text-4xl font-normal text-[#243f35]" style={serifFont}>{item.name}</h3><p className="mt-5 text-base leading-8 text-[#5f574f]">{item.text}</p></div><p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#704a35]">Coming Soon</p></article>)}</div>
        </div></div>
      </section>

      <section className="bg-[#f4eee4] px-7 py-24 text-center sm:px-12 sm:py-32"><div className="mx-auto max-w-[900px]"><p className="text-[clamp(3.4rem,6vw,6.5rem)] font-normal leading-[0.92] text-[#243f35]" style={serifFont}>Use the good stuff.</p><p className="mt-4 text-[clamp(2rem,3.5vw,3.5rem)] italic text-[#704a35]" style={serifFont}>Tomorrow can bloody wait.</p><p className="mx-auto mt-9 max-w-[650px] text-base leading-8 text-[#5f574f] sm:text-lg sm:leading-9">Wild Soul is made to be used — in the shower, beside the bath, in the ute, in your work bag, at home or wherever life happens to find you.</p></div></section>

      <footer className="bg-[#243f35] text-[#f4eee4]"><div className="mx-auto max-w-[1600px] px-8 py-14 sm:px-14 lg:px-20 lg:py-20"><div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.7fr]">
        <div className="max-w-[520px]"><p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c8aa8c]">Wild Soul</p><p className="mt-5 text-[clamp(2.8rem,4vw,4.5rem)] font-normal leading-[0.95]" style={serifFont}>Take five.<br /><span className="italic text-[#d7b89a]">The rest can wait.</span></p><p className="mt-7 max-w-[430px] text-sm leading-7 text-[#f4eee4]/70 sm:text-base">Small-batch body, bath and skincare products made in Queensland for real life.</p></div>
        <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8aa8c]">Explore</p><nav className="mt-6 flex flex-col gap-4 text-sm text-[#f4eee4]/80 sm:text-base"><Link href="/shop" className="transition-opacity hover:opacity-60">Shop</Link><Link href="/our-story" className="transition-opacity hover:opacity-60">Our Story</Link><Link href="/#markets" className="transition-opacity hover:opacity-60">Markets</Link></nav></div>
        <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8aa8c]">Wild Soul</p><p className="mt-6 max-w-[260px] text-xl italic leading-relaxed text-[#f4eee4]/75" style={serifFont}>Built for the work.<br />Made for the recovery.</p></div>
      </div><div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-7 text-xs text-[#f4eee4]/55 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Wild Soul. Made in Queensland, Australia.</p><p>Take five. The rest can wait.</p></div></div></footer>
    </main>
  );
}

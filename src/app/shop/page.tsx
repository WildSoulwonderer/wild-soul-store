import Image from "next/image";
import Link from "next/link";
import { getStoreProducts } from "@/lib/store-products";

export const dynamic = "force-dynamic";

const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

const collections = [
  {
    id: "body",
    name: "Body",
    tagline: "Scrub off the day.",
    description:
      "Scrubs, buff bars and everyday body care made for real skin, real routines and whatever five minutes you can steal.",
    image: "/images/wild-soul-body.png",
    imageAlt:
      "Wild Soul body care products in a warm relaxed bathroom setting",
    products: [
      "Wild Renewal",
      "Sunlit Bloom",
      "Desert Calm",
      "Ocean Drift",
      "Bush Bloom",
      "Outback Spice",
      "Wild Glow",
      "Morning Ember",
      "First Light",
      "Highland Mist",
      "Highland Recovery",
      "Petal & Plum",
      "Ironwood",
      "Red Dust",
      "Golden Grove"
    ],
  },
  {
    id: "bath",
    name: "Bath",
    tagline: "Disappear for a little while.",
    description:
      "Simple bath soaks for tired bodies, long weeks and those rare moments when nobody needs anything from you.",
    image: "/images/wild-soul-bath.png",
    imageAlt: "Wild Soul bath soak beside a warm softly lit bath",
    products: ["Highland Recovery", "Petal & Plum"],
  },
  {
    id: "recovery",
    name: "Recovery",
    tagline: "For bodies that have done the work.",
    description:
      "Small-batch balms made for tired hands, muscles, feet and bodies after work, travel, gardens, paddocks and everything in between.",
    image: "/images/wild-soul-recovery.png",
    imageAlt:
      "Wild Soul recovery balm on weathered timber in an Australian setting",
    products: ["Bush Relief", "Misty Glen"],
  },
  {
    id: "skin-oils",
    name: "Skin Oils",
    tagline: "Simple care. No ten-step routine.",
    description:
      "Botanical oils for face, body and beards, made to nourish, soften and give skin a little glow without making life complicated.",
    image: "/images/wild-soul-skin-oils-v3.png",
    imageAlt: "Wild Soul botanical skin oil in warm morning light",
    products: ["Ironwood", "Red Dust", "Golden Grove"],
  },
];

const comingSoon = [
  {
    name: "Lip Balm",
    type: "Everyday Care",
    text: "A simple pocket-sized bit of care for dry lips, work bags, handbags, utes and everywhere in between.",
  },
  {
    name: "Shimmer Oil",
    type: "Body Oil",
    text: "Soft botanical moisture with a subtle glow — because practical and a little bit pretty can absolutely coexist.",
  },
  {
    name: "Whipped Soap",
    type: "Body",
    text: "Soft, fluffy cleansing made for showers that feel slightly less like another job on the list.",
  },
  {
    name: "Earthbound",
    type: "Wild Soul Collection",
    text: "Something a little different is taking shape — earthy, handmade pieces inspired by the wild places we call home.",
  },
];

const productLinks: Record<string, string> = {
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

export default async function ShopPage() {
  const onlineProducts = await getStoreProducts();
  return (
    <main className="min-h-screen bg-[#f4eee4] text-[#243f35]">
      {/* HEADER */}
      <header className="relative z-30 border-b border-[#243f35]/10 bg-[#f4eee4]">
        <div className="mx-auto flex h-[92px] max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-12">
          <Link href="/" className="flex items-center gap-5">
            <span className="text-[1.7rem] font-medium tracking-[0.28em] text-[#243f35] sm:text-[2rem]">
              WILD SOUL
            </span>

            <svg
              className="hidden h-10 w-20 text-[#704a35] sm:block"
              viewBox="0 0 100 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7 40C25 35 39 25 55 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M28 31C24 24 23 19 25 14"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <path
                d="M39 24C34 18 33 13 35 8"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <path
                d="M48 16C48 10 50 6 54 3"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <path
                d="M35 27C41 28 46 31 49 35"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <path
                d="M48 18C54 19 59 22 63 26"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </Link>

          <nav
            className="hidden items-center gap-10 text-xl text-[#243f35] md:flex"
            style={serifFont}
          >
            <Link
              href="/shop"
              className="border-b border-[#704a35] pb-1 text-[#704a35]"
            >
              Shop
            </Link>

            <Link
              href="/our-story"
              className="transition-opacity hover:opacity-60"
            >
              Our Story
            </Link>

            <Link
              href="/#markets"
              className="transition-opacity hover:opacity-60"
            >
              Markets
            </Link>

            <span className="h-8 w-px bg-[#243f35]/30" />

            <span className="opacity-60">Bag (0)</span>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span className="h-px w-7 bg-[#243f35]" />
            <span className="h-px w-7 bg-[#243f35]" />
            <span className="h-px w-7 bg-[#243f35]" />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="px-7 pb-24 pt-24 sm:px-12 sm:pb-32 sm:pt-32 lg:px-20">
        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#9a6545]">
              Shop Wild Soul
            </p>

            <h1
              className="text-[clamp(4.5rem,8vw,8.5rem)] font-normal leading-[0.82] tracking-[-0.055em] text-[#243f35]"
              style={serifFont}
            >
              Made for
              <br />
              <span className="italic text-[#704a35]">real life.</span>
            </h1>
          </div>

          <div className="max-w-[650px] lg:pb-2">
            <p
              className="text-[1.8rem] italic leading-[1.35] text-[#704a35] sm:text-[2.2rem]"
              style={serifFont}
            >
              Small-batch care for the five minutes you didn&apos;t know you
              needed.
            </p>

            <p className="mt-7 max-w-[600px] text-lg leading-9 text-[#5f574f]">
              No complicated routines. No saving the good stuff for later.
              Just body, bath, recovery and skin care made to be opened, used,
              carried around and worked into ordinary life.
            </p>
          </div>
        </div>
      </section>

      {/* COLLECTION INTRO CARDS */}
      <section className="px-7 py-24 sm:px-12 sm:py-32 lg:px-20">
        <div className="mx-auto max-w-[1450px]">
          <div className="mb-16 max-w-[800px]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#9a6545]">
              Find Your Five Minutes
            </p>

            <h2
              className="text-[clamp(3.4rem,5vw,5.8rem)] font-normal leading-[0.92] text-[#243f35]"
              style={serifFont}
            >
              Start wherever
              <br />
              <span className="italic text-[#704a35]">you need it most.</span>
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection, index) => (
              <a
                key={collection.id}
                href={`#${collection.id}`}
                className={`group block ${index % 2 === 1 ? "lg:mt-16" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#ded5c7]">
                  <Image
                    src={collection.image}
                    alt={collection.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </div>

                <div className="mt-6">
                  <h3
                    className="text-3xl font-normal text-[#243f35]"
                    style={serifFont}
                  >
                    {collection.name}
                  </h3>

                  <p
                    className="mt-2 text-xl italic text-[#704a35]"
                    style={serifFont}
                  >
                    {collection.tagline}
                  </p>

                  <span className="mt-5 inline-block border-b border-[#704a35] pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#704a35]">
                    Explore {collection.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION DETAILS */}
      <section className="bg-[#243f35] text-[#f4eee4]">
        <div className="mx-auto max-w-[1450px] px-7 py-24 sm:px-12 sm:py-32 lg:px-20">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              id={collection.id}
              className={`grid gap-12 py-20 first:pt-0 last:pb-0 lg:grid-cols-[0.8fr_1.2fr] ${
                index !== collections.length - 1
                  ? "border-b border-[#f4eee4]/15"
                  : ""
              }`}
            >
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#c88f68]">
                  Wild Soul {collection.name}
                </p>

                <h2
                  className="text-[clamp(3.5rem,5vw,5.8rem)] font-normal leading-[0.9] text-[#f4eee4]"
                  style={serifFont}
                >
                  {collection.name}
                </h2>

                <p
                  className="mt-5 text-2xl italic leading-snug text-[#d5a27d]"
                  style={serifFont}
                >
                  {collection.tagline}
                </p>
              </div>

              <div className="lg:pt-4">
                <p className="max-w-[700px] text-lg leading-9 text-[#f4eee4]/75">
                  {collection.description}
                </p>

               <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
  {collection.products.map((product) => {
    const href = productLinks[product];

    if (href) {
      return (
        <Link
          key={product}
          href={href}
          className="border-b border-[#f4eee4]/25 pb-2 text-lg text-[#f4eee4]/90 transition-colors hover:border-[#d5a27d] hover:text-[#d5a27d]"
          style={serifFont}
        >
          {product}
        </Link>
      );
    }

    return (
      <span
        key={product}
        className="border-b border-[#f4eee4]/15 pb-2 text-lg text-[#f4eee4]/65"
        style={serifFont}
      >
        {product}
      </span>
    );
  })}
</div>

                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS MANAGED FROM WILD SOUL HQ */}
      {onlineProducts.length > 0 && (
        <section className="bg-[#e8e1d5] px-7 py-24 sm:px-12 sm:py-32 lg:px-20">
          <div className="mx-auto max-w-[1450px]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#9a6545]">
              Available now
            </p>
            <h2
              className="max-w-[850px] text-[clamp(3.4rem,5vw,5.8rem)] font-normal leading-[0.92] text-[#243f35]"
              style={serifFont}
            >
              Made in small batches,
              <br />
              <span className="italic text-[#704a35]">ready when you are.</span>
            </h2>

            <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {onlineProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.store_slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#d8cfc1]">
                    {product.photo_url ? (
                      <img
                        src={product.photo_url}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center p-8 text-center text-[#704a35]">
                        Product photo coming soon
                      </div>
                    )}
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6545]">
                    {product.category || "Wild Soul"}
                  </p>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <h3 className="text-3xl text-[#243f35]" style={serifFont}>
                      {product.name}
                    </h3>
                    <p className="shrink-0 text-lg font-medium text-[#243f35]">
                      ${Number(product.retail_price ?? 0).toFixed(2)}
                    </p>
                  </div>
                  <p className="mt-4 line-clamp-3 leading-7 text-[#5f574f]">
                    {product.short_description || product.description}
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#704a35]">
                    {(product.current_stock ?? 0) > 0 ? "View product" : "Sold out"}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COMING SOON */}
      <section className="bg-[#e8e1d5] px-7 py-24 sm:px-12 sm:py-32 lg:px-20">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#9a6545]">
                Coming to Wild Soul
              </p>

              <h2
                className="text-[clamp(3.6rem,6vw,6.5rem)] font-normal leading-[0.9] text-[#243f35]"
                style={serifFont}
              >
                There&apos;s more
                <br />
                <span className="italic text-[#704a35]">taking shape.</span>
              </h2>

              <p className="mt-8 max-w-[520px] text-lg leading-9 text-[#5f574f]">
                I&apos;m always making, testing, changing things and occasionally
                creating something worth keeping. These are the next little
                pieces of Wild Soul currently finding their feet.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {comingSoon.map((item) => (
                <article
                  key={item.name}
                  className="flex min-h-[330px] flex-col justify-between border border-[#243f35]/15 bg-[#f4eee4] p-8 sm:p-10"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a6545]">
                      {item.type}
                    </p>

                    <h3
                      className="mt-5 text-4xl font-normal text-[#243f35]"
                      style={serifFont}
                    >
                      {item.name}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-[#5f574f]">
                      {item.text}
                    </p>
                  </div>

                  <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#704a35]">
                    Coming Soon
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[#f4eee4] px-7 py-28 text-center sm:px-12 sm:py-36">
        <div className="mx-auto max-w-[900px]">
          <p
            className="text-[clamp(3.8rem,6vw,6.5rem)] font-normal leading-[0.92] text-[#243f35]"
            style={serifFont}
          >
            Use the good stuff.
          </p>

          <p
            className="mt-4 text-[clamp(2rem,3.5vw,3.5rem)] italic text-[#704a35]"
            style={serifFont}
          >
            Tomorrow can bloody wait.
          </p>

          <p className="mx-auto mt-9 max-w-[650px] text-lg leading-9 text-[#5f574f]">
            Wild Soul is made to be used — in the shower, beside the bath, in
            the ute, in your work bag, at home or wherever life happens to find
            you.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#243f35] text-[#f4eee4]">
        <div className="mx-auto max-w-[1600px] px-8 py-16 sm:px-14 lg:px-20 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.7fr_0.7fr]">
            <div className="max-w-[520px]">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c8aa8c]">
                Wild Soul
              </p>

              <p
                className="mt-5 text-[clamp(2.8rem,4vw,4.5rem)] font-normal leading-[0.95]"
                style={serifFont}
              >
                Take five.
                <br />
                <span className="italic text-[#d7b89a]">
                  The rest can wait.
                </span>
              </p>

              <p className="mt-7 max-w-[430px] text-sm leading-7 text-[#f4eee4]/70 sm:text-base">
                Small-batch body, bath and skincare products made in Queensland
                for real life.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8aa8c]">
                Explore
              </p>

              <nav className="mt-6 flex flex-col gap-4 text-sm text-[#f4eee4]/80 sm:text-base">
                <Link href="/shop" className="transition-opacity hover:opacity-60">
                  Shop
                </Link>
                <Link
                  href="/our-story"
                  className="transition-opacity hover:opacity-60"
                >
                  Our Story
                </Link>
                <Link
                  href="/#markets"
                  className="transition-opacity hover:opacity-60"
                >
                  Markets
                </Link>
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8aa8c]">
                Wild Soul
              </p>

              <p
                className="mt-6 max-w-[260px] text-xl italic leading-relaxed text-[#f4eee4]/75"
                style={serifFont}
              >
                Built for the work.
                <br />
                Made for the recovery.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-7 text-xs text-[#f4eee4]/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Wild Soul. Made in Queensland,
              Australia.
            </p>

            <p>Take five. The rest can wait.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

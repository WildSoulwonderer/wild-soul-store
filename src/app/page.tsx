const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

const categories = [
  {
    name: "Body",
    href: "/shop#body",
    image: "/images/wild-soul-body.png",
    text: "Scrubs, butters and everyday body care for a little time to yourself.",
    tall: false,
  },
  {
    name: "Bath",
    href: "/shop#bath",
    image: "/images/wild-soul-bath.png",
    text: "Soaks and simple escapes for the five minutes you manage to steal.",
    tall: true,
  },
  {
    name: "Recovery",
    href: "/shop#recovery",
    image: "/images/wild-soul-recovery.png",
    text: "Balms and recovery care for tired hands, muscles and bodies that have done the work.",
    tall: false,
  },
  {
    name: "Skin Oils",
    href: "/shop#skin-oils",
    image: "/images/wild-soul-skin-oils-v3.png",
    text: "Botanical oils for face, body and beards — made to nourish, soften and glow.",
    tall: true,
  },
] as const;

const favourites = [
  {
    name: "Bush Relief",
    type: "Recovery Balm · 50g",
    price: "$24.95",
    href: "/shop/bush-relief",
    image: "/images/wild-soul-bush-relief.png",
    text: "For tired hands, muscles and bodies after a day that asked a bit much.",
  },
  {
    name: "Misty Glen",
    type: "Recovery Balm · 50g",
    price: "$24.95",
    href: "/shop/misty-glen",
    image: "/images/wild-soul-misty-glen.png",
    text: "A softer botanical blend for slowing down and giving tired bodies a little care.",
  },
  {
    name: "Wild Renewal",
    type: "Coffee & Sugar Scrub · 210g",
    price: "$29.95",
    href: "/shop/wild-renewal",
    image: "/images/wild-soul-wild-renewal.png",
    text: "Coffee, sweet orange, spearmint and vanilla for scrubbing off the day and taking five.",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4eee4] text-[#243f35]">
      <header className="relative z-30 bg-[#f4eee4]">
        <div className="mx-auto flex h-[82px] max-w-[1600px] items-center justify-between px-6 sm:h-[92px] sm:px-10 lg:px-12">
          <a href="/" className="flex items-center gap-5">
            <span className="text-[1.35rem] font-medium tracking-[0.25em] text-[#243f35] sm:text-[1.8rem]">
              WILD SOUL
            </span>
            <svg className="hidden h-10 w-20 text-[#704a35] sm:block" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7 40C25 35 39 25 55 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M28 31C24 24 23 19 25 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M39 24C34 18 33 13 35 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M48 16C48 10 50 6 54 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M35 27C41 28 46 31 49 35" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M48 18C54 19 59 22 63 26" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </a>

          <nav className="hidden items-center gap-10 text-xl text-[#243f35] md:flex" style={serifFont}>
            <a href="#shop" className="transition-opacity hover:opacity-60">Shop</a>
            <a href="/our-story" className="transition-opacity hover:opacity-60">Our Story</a>
            <a href="#markets" className="transition-opacity hover:opacity-60">Markets</a>
            <span className="h-8 w-px bg-[#243f35]/30" />
            <a href="/bag" className="transition-opacity hover:opacity-60">Bag</a>
          </nav>

          <button type="button" aria-label="Open menu" className="flex flex-col gap-1.5 md:hidden">
            <span className="h-px w-7 bg-[#243f35]" />
            <span className="h-px w-7 bg-[#243f35]" />
            <span className="h-px w-7 bg-[#243f35]" />
          </button>
        </div>
      </header>

      <section className="relative min-h-[calc(100svh-82px)] overflow-hidden sm:min-h-[calc(100svh-92px)]">
        <img
          src="/images/wild-soul-hero.png"
          alt="Australian landscape with golden fields, eucalyptus trees and weathered fencing"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5e6c7]/72 via-[#f5e6c7]/30 to-transparent" />
        <div className="absolute inset-0 bg-[#8b5d37]/5" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-82px)] max-w-[1600px] items-center px-7 py-16 sm:min-h-[calc(100svh-92px)] sm:px-12 lg:px-20">
          <div className="max-w-[650px] pb-6">
            <p className="mb-7 text-sm font-semibold uppercase tracking-[0.3em] text-[#684532] sm:text-base">Made in Australia</p>
            <h1 className="text-[clamp(5.5rem,10vw,10rem)] font-medium leading-[0.63] tracking-[-0.055em] text-[#243f35]" style={serifFont}>
              <span className="block">Wild</span>
              <span className="ml-[0.82em] block italic font-normal text-[#704a35]">Soul.</span>
            </h1>
            <p className="mt-14 text-[2rem] italic leading-[1.15] text-[#243f35] sm:text-[2.5rem]" style={serifFont}>
              Built for the work.<br />Made for the recovery.
            </p>
            <p className="mt-7 max-w-lg text-[1.75rem] italic leading-[1.25] text-[#4b3528] sm:text-[2rem]" style={serifFont}>
              For the five minutes<br />you didn&apos;t know you needed.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a href="#shop" className="inline-flex min-h-14 items-center justify-center bg-[#243f35] px-9 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-[#1b3028]">
                Shop Wild Soul
              </a>
              <a href="/our-story" className="border-b border-white/90 pb-1 text-xl text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)] transition-opacity hover:opacity-70" style={serifFont}>
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="relative overflow-hidden bg-[#f4eee4] px-6 py-24 sm:px-10 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1450px]">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a6545] sm:text-sm">Wild Soul</p>
            <h2 className="text-5xl font-normal leading-[0.95] text-[#243f35] sm:text-6xl lg:text-7xl" style={serifFont}>Made for real life.</h2>
            <p className="mt-6 max-w-xl text-2xl italic leading-snug text-[#6f5a4a] sm:text-3xl" style={serifFont}>
              Small moments of care,<br className="hidden sm:block" /> wherever you find them.
            </p>
          </div>

          <div className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <a key={category.name} href={category.href} className={`group block ${category.tall ? "lg:mt-14" : ""}`}>
                <div className={`overflow-hidden bg-[#ded5c7] ${category.tall ? "aspect-[4/6]" : "aspect-[4/5]"}`}>
                  <img
                    src={category.image}
                    alt={`Wild Soul ${category.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-3xl font-normal text-[#243f35]" style={serifFont}>{category.name}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-7 text-[#655d55] sm:text-base">{category.text}</p>
                  <span className="mt-4 inline-block border-b border-[#704a35] pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#704a35]">Explore {category.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#243f35]">
        <div className="mx-auto max-w-[1600px] px-7 py-28 sm:px-12 sm:py-36 lg:px-20 lg:py-44">
          <div className="max-w-[980px]">
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#c88f68]">Wild Soul</p>
            <h2 className="max-w-[900px] text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-[0.95] tracking-[-0.035em] text-[#f4eee4]" style={serifFont}>
              Not another thing<br />for your to-do list.
            </h2>
            <div className="mt-14 max-w-[720px]">
              <p className="text-[1.65rem] leading-[1.45] text-[#f4eee4]/90 sm:text-[1.9rem]" style={serifFont}>Wild Soul came from real life.</p>
              <p className="mt-8 max-w-[680px] text-base leading-8 text-[#f4eee4]/75 sm:text-lg">
                Busy days, tired bodies and the kind of weeks where looking after yourself ends up at the bottom of the list. Nothing complicated, nothing precious — just small-batch care made to fit into ordinary life and those five minutes when you can.
              </p>
              <p className="mt-12 text-[2rem] italic text-[#d5a27d] sm:text-[2.4rem]" style={serifFont}>Take five. The rest can wait.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4eee4] px-6 py-24 sm:px-10 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1450px]">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a6545] sm:text-sm">Wild Soul Favourites</p>
            <h2 className="text-5xl font-normal leading-[0.95] text-[#243f35] sm:text-6xl lg:text-7xl" style={serifFont}>
              Already finding<br />their favourites.
            </h2>
            <p className="mt-6 max-w-2xl text-2xl italic leading-snug text-[#6f5a4a] sm:text-3xl" style={serifFont}>
              Some products just seem to find their people. These are a few that have been picked up, tried and loved along the way.
            </p>
          </div>

          <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-3">
            {favourites.map((item) => (
              <article key={item.name}>
                <a href={item.href} className="block">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={`Wild Soul ${item.name}`} loading="lazy" className="h-full w-full object-contain" />
                  </div>
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6545]">{item.type}</p>
                    <h3 className="mt-3 text-3xl font-normal text-[#243f35]" style={serifFont}>{item.name}</h3>
                    <p className="mt-3 max-w-sm text-base leading-7 text-[#655d55]">{item.text}</p>
                    <p className="mt-4 text-2xl text-[#243f35]" style={serifFont}>{item.price}</p>
                    <span className="mt-5 inline-block border-b border-[#704a35] pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#704a35]">View Product</span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="markets" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-14">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a6545]">Find Wild Soul Out in the Wild</p>
              <h2 className="mt-4 text-[clamp(3.7rem,6vw,6.4rem)] leading-[0.92] text-[#243f35]" style={serifFont}>Come find us<br /><span className="italic text-[#704a35]">in person.</span></h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-t border-[#704a35]/30 pt-6">
                <h3 className="text-3xl text-[#243f35]" style={serifFont}>Bracknell Lodge — Carnival of Flowers</h3>
                <p className="mt-3 text-base text-[#655d55]">20 September 2026 · Bracknell Lodge</p>
              </div>
              <div className="border-t border-[#704a35]/30 pt-6">
                <h3 className="text-3xl text-[#243f35]" style={serifFont}>Pink Ladies Day</h3>
                <p className="mt-3 text-base text-[#655d55]">9 October 2026 · Dalby &amp; Northern Downs Jockey Club</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#243f35] text-[#f4eee4]">
        <div className="mx-auto max-w-[1600px] px-8 py-16 sm:px-14 lg:px-20 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.7fr_0.7fr]">
            <div className="max-w-[520px]">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c8aa8c]">Wild Soul</p>
              <p className="mt-5 text-[clamp(2.8rem,4vw,4.5rem)] font-normal leading-[0.95]" style={serifFont}>
                Take five.<br /><span className="italic text-[#d7b89a]">The rest can wait.</span>
              </p>
              <p className="mt-7 max-w-[430px] text-sm leading-7 text-[#f4eee4]/70 sm:text-base">
                Small-batch body, bath and skincare products made in Queensland for real life.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8aa8c]">Explore</p>
              <nav className="mt-6 flex flex-col gap-4 text-sm text-[#f4eee4]/80 sm:text-base">
                <a href="/shop">Shop</a>
                <a href="/our-story">Our Story</a>
                <a href="#markets">Markets</a>
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8aa8c]">Help</p>
              <nav className="mt-6 flex flex-col gap-4 text-sm text-[#f4eee4]/80 sm:text-base">
                <a href="/bag">Bag</a>
              </nav>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-7 text-xs text-[#f4eee4]/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Wild Soul. Made in Queensland, Australia.</p>
            <p>Built for the work. Made for the recovery.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

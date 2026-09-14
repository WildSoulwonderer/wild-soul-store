const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

const categories = [
  {
    name: "Body",
    href: "/shop#body",
    image: "/images/wild-soul-body.png",
    text: "Scrubs, butters and everyday body care for a little time to yourself.",
  },
  {
    name: "Bath",
    href: "/shop#bath",
    image: "/images/wild-soul-bath.png",
    text: "Soaks and simple escapes for the five minutes you manage to steal.",
  },
  {
    name: "Recovery",
    href: "/shop#recovery",
    image: "/images/wild-soul-recovery.png",
    text: "Balms and recovery care for tired hands, muscles and bodies that have done the work.",
  },
  {
    name: "Skin Oils",
    href: "/shop#skin-oils",
    image: "/images/wild-soul-skin-oils-v3.png",
    text: "Botanical oils for face, body and beards — made to nourish, soften and glow.",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4eee4] text-[#243f35]">
      <header className="relative z-30 border-b border-[#243f35]/10 bg-[#f4eee4]">
        <div className="mx-auto flex h-[82px] w-[92vw] max-w-[1600px] items-center justify-between sm:h-[92px]">
          <a href="/" className="flex items-center gap-5">
            <span className="text-[1.35rem] font-medium tracking-[0.25em] text-[#243f35] sm:text-[1.8rem]">
              WILD SOUL
            </span>
            <svg className="hidden h-10 w-20 text-[#704a35] sm:block" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7 40C25 35 39 25 55 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M28 31C24 24 23 19 25 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M39 24C34 18 33 13 35 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M48 16C48 10 50 6 54 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </a>

          <nav className="hidden items-center gap-10 text-xl text-[#243f35] md:flex" style={serifFont}>
            <a href="/shop" className="transition-opacity hover:opacity-60">Shop</a>
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
          alt="Wild Soul Australian landscape"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5e6c7]/88 via-[#f5e6c7]/54 to-[#f5e6c7]/8" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-82px)] w-[92vw] max-w-[1600px] items-center py-16 sm:min-h-[calc(100svh-92px)] sm:py-20">
          <div className="max-w-[820px]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8e5c3e] sm:text-sm">Made in Queensland, Australia</p>
            <h1 className="text-[clamp(5rem,10vw,10.5rem)] font-medium leading-[0.72] tracking-[-0.055em] text-[#243f35]" style={serifFont}>
              <span className="block">Wild</span>
              <span className="ml-[0.62em] block italic font-normal text-[#704a35]">Soul.</span>
            </h1>
            <p className="mt-9 text-[clamp(1.9rem,3.1vw,3.2rem)] italic leading-[1.08] text-[#243f35]" style={serifFont}>
              Built for the work.<br />Made for the recovery.
            </p>
            <p className="mt-5 max-w-[620px] text-[clamp(1.25rem,1.8vw,1.8rem)] italic leading-snug text-[#5b4030]" style={serifFont}>
              For the five minutes you didn&apos;t know you needed.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/shop" className="inline-flex min-h-14 items-center justify-center bg-[#243f35] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:px-10 sm:text-sm">
                Shop Wild Soul
              </a>
              <a href="/our-story" className="inline-flex min-h-14 items-center justify-center border border-[#243f35]/35 bg-[#f4eee4]/35 px-8 text-sm text-[#243f35] backdrop-blur-[2px] sm:px-10 sm:text-base">
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a6545]">Find Your Five Minutes</p>
              <h2 className="mt-4 text-[clamp(3.7rem,6vw,6.8rem)] leading-[0.9] text-[#243f35]" style={serifFont}>
                Made for<br /><span className="italic text-[#704a35]">real life.</span>
              </h2>
            </div>
            <p className="max-w-[650px] text-[1.55rem] italic leading-snug text-[#704a35] sm:text-[2rem] lg:pb-2" style={serifFont}>
              Small moments of care, wherever you find them.
            </p>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <a key={category.name} href={category.href} className={`group block ${index % 2 === 1 ? "lg:mt-16" : ""}`}>
                <div className="overflow-hidden bg-[#ded8cc]">
                  <img
                    src={category.image}
                    alt={`Wild Soul ${category.name}`}
                    loading="lazy"
                    className="aspect-[4/5] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="mt-6 text-3xl text-[#243f35] sm:text-4xl" style={serifFont}>{category.name}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-[#655d55] sm:text-base">{category.text}</p>
                <span className="mt-5 inline-block border-b border-[#704a35] pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#704a35]">Explore {category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#243f35] px-6 py-24 text-[#f4eee4] sm:px-10 sm:py-32 lg:px-14 lg:py-36">
        <div className="mx-auto grid max-w-[1450px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c88f68]">Wild Soul</p>
            <h2 className="mt-5 text-[clamp(3.8rem,6vw,6.8rem)] leading-[0.92]" style={serifFont}>Not another thing<br /><span className="italic text-[#d5a27d]">for your to-do list.</span></h2>
          </div>
          <div className="max-w-[680px]">
            <p className="text-lg leading-9 text-[#f4eee4]/80 sm:text-xl">
              Wild Soul came from real life — busy days, tired bodies and those few quiet minutes you manage to steal. Nothing complicated. Just small-batch body, bath and recovery care made in Queensland.
            </p>
            <p className="mt-8 text-2xl italic text-[#d5a27d] sm:text-3xl" style={serifFont}>Take five. The rest can wait.</p>
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

      <footer className="bg-[#243f35] px-6 py-14 text-[#f4eee4] sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1600px] gap-10 sm:grid-cols-[1.3fr_0.7fr] sm:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.24em]">WILD SOUL</p>
            <p className="mt-3 max-w-[520px] text-sm leading-7 text-[#f4eee4]/65 sm:text-base">Small-batch body, bath and recovery care made in Queensland for real life.</p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#f4eee4]/80 sm:justify-end sm:text-base">
            <a href="/shop">Shop</a>
            <a href="/our-story">Our Story</a>
            <a href="#markets">Markets</a>
            <a href="/bag">Bag</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

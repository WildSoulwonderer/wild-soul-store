const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

const categories = [
  {
    name: "Body",
    href: "/shop#body",
    image: "/images/First_Light_Hero.png",
    text: "Scrubs, butters and everyday body care for a little time to yourself.",
  },
  {
    name: "Bath",
    href: "/shop#bath",
    image: "/images/Desert_Calm_Hero.jpg",
    text: "Soaks and simple escapes for the five minutes you manage to steal.",
  },
  {
    name: "Recovery",
    href: "/shop#recovery",
    image: "/images/Highland_Recovery_Hero.jpg",
    text: "Balms and recovery care for tired hands, muscles and bodies that have done the work.",
  },
  {
    name: "Skin Oils",
    href: "/shop#skin-oils",
    image: "/images/Golden_Grove_Hero.jpg",
    text: "Botanical oils for face, body and beards — made to nourish, soften and glow.",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--wild-cream)] text-[var(--wild-charcoal)]">
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[var(--wild-cream)]/95 backdrop-blur-sm">
        <div className="mx-auto flex min-h-[72px] max-w-[1450px] items-center justify-between gap-4 px-5 sm:min-h-[84px] sm:px-8 lg:px-12">
          <a href="/" className="text-lg font-semibold tracking-[0.22em] text-[var(--wild-forest)] sm:text-2xl">
            WILD SOUL
          </a>
          <nav className="flex items-center gap-4 text-sm font-medium text-[var(--wild-forest)] sm:gap-7 sm:text-base">
            <a href="/shop">Shop</a>
            <a href="/our-story" className="hidden sm:inline">Our Story</a>
            <a href="/bag">Bag</a>
          </nav>
        </div>
      </header>

      <section className="relative min-h-[620px] overflow-hidden sm:min-h-[720px]">
        <img
          src="/images/wild-soul-hero.png"
          alt="Wild Soul Australian landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5e6c7]/80 via-[#f5e6c7]/50 to-[#f5e6c7]/10" />
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1450px] items-center px-6 py-16 sm:min-h-[720px] sm:px-10 lg:px-16">
          <div className="max-w-[680px]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#684532] sm:text-sm">Made in Australia</p>
            <h1 className="text-[4.6rem] font-medium leading-[0.72] tracking-[-0.05em] text-[var(--wild-forest)] sm:text-[7.5rem] lg:text-[9rem]" style={serifFont}>
              <span className="block">Wild</span>
              <span className="ml-[0.72em] block italic font-normal text-[#704a35]">Soul.</span>
            </h1>
            <p className="mt-9 text-[1.65rem] italic leading-tight text-[var(--wild-forest)] sm:text-[2.4rem]" style={serifFont}>
              Built for the work.<br />Made for the recovery.
            </p>
            <p className="mt-5 text-[1.25rem] italic leading-snug text-[#4b3528] sm:text-[1.8rem]" style={serifFont}>
              For the five minutes you didn&apos;t know you needed.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/shop" className="inline-flex min-h-12 items-center justify-center bg-[var(--wild-forest)] px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white sm:min-h-14 sm:px-8 sm:text-sm">
                Shop Wild Soul
              </a>
              <a href="/our-story" className="inline-flex min-h-12 items-center justify-center border border-[var(--wild-forest)]/30 px-6 text-sm text-[var(--wild-forest)] sm:min-h-14 sm:px-8 sm:text-base">
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1450px]">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--wild-earth)]">Wild Soul</p>
          <h2 className="mt-4 text-[3rem] leading-[0.95] text-[var(--wild-forest)] sm:text-6xl" style={serifFont}>Made for real life.</h2>
          <p className="mt-5 max-w-2xl text-[1.45rem] italic leading-snug text-[#6f5a4a] sm:text-3xl" style={serifFont}>
            Small moments of care, wherever you find them.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <a key={category.name} href={category.href} className="block">
                <div className="overflow-hidden bg-[#ded8cc]">
                  <img src={category.image} alt={`Wild Soul ${category.name}`} loading="lazy" className="aspect-[4/5] h-auto w-full object-cover" />
                </div>
                <h3 className="mt-5 text-3xl text-[var(--wild-forest)]" style={serifFont}>{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--wild-soft)]">{category.text}</p>
                <span className="mt-4 inline-block border-b border-[var(--wild-earth)] pb-1 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--wild-earth)]">Explore {category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--wild-forest)] px-6 py-16 text-[var(--wild-cream)] sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c88f68]">Wild Soul</p>
          <h2 className="mt-5 text-[3rem] leading-[0.96] sm:text-6xl" style={serifFont}>Not another thing<br />for your to-do list.</h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--wild-cream)]/80 sm:text-lg">
            Wild Soul came from real life — busy days, tired bodies and those few quiet minutes you manage to steal. Nothing complicated. Just small-batch body, bath and recovery care made in Queensland.
          </p>
          <p className="mt-8 text-2xl italic text-[#d5a27d] sm:text-3xl" style={serifFont}>Take five. The rest can wait.</p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--wild-earth)]">Find Wild Soul Out in the Wild</p>
          <h2 className="mt-4 text-[3rem] leading-[0.96] text-[var(--wild-forest)] sm:text-6xl" style={serifFont}>Come find us<br />in person.</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="border-t border-[var(--wild-earth)]/30 pt-5">
              <h3 className="text-2xl text-[var(--wild-forest)]" style={serifFont}>Bracknell Lodge — Carnival of Flowers</h3>
              <p className="mt-2 text-sm text-[var(--wild-soft)]">20 September 2026 · Bracknell Lodge</p>
            </div>
            <div className="border-t border-[var(--wild-earth)]/30 pt-5">
              <h3 className="text-2xl text-[var(--wild-forest)]" style={serifFont}>Pink Ladies Day</h3>
              <p className="mt-2 text-sm text-[var(--wild-soft)]">9 October 2026 · Dalby &amp; Northern Downs Jockey Club</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--wild-forest)] px-6 py-10 text-[var(--wild-cream)] sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1450px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em]">WILD SOUL</p>
            <p className="mt-2 text-sm text-[var(--wild-cream)]/65">Small-batch body, bath and recovery care made in Queensland.</p>
          </div>
          <div className="flex gap-5 text-sm text-[var(--wild-cream)]/80">
            <a href="/shop">Shop</a>
            <a href="/our-story">Our Story</a>
            <a href="/bag">Bag</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

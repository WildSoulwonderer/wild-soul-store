import Image from "next/image";

const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--wild-cream)] text-[var(--wild-charcoal)]">
      {/* HEADER */}
      <header className="relative z-30 bg-[var(--wild-cream)]">
        <div className="mx-auto flex h-[92px] max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-12">
          <a href="/" className="flex items-center gap-5">
            <span className="text-[1.7rem] font-medium tracking-[0.28em] text-[var(--wild-forest)] sm:text-[2rem]">
              WILD SOUL
            </span>

            <svg
              className="hidden h-10 w-20 text-[var(--wild-earth)] sm:block"
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

              <ellipse cx="23" cy="14" rx="2" ry="4" fill="currentColor" />
              <ellipse cx="35" cy="8" rx="2" ry="4" fill="currentColor" />
              <ellipse cx="54" cy="3" rx="2" ry="4" fill="currentColor" />
              <ellipse cx="50" cy="36" rx="2" ry="4" fill="currentColor" />
              <ellipse cx="64" cy="27" rx="2" ry="4" fill="currentColor" />
            </svg>
          </a>

          {/* DESKTOP NAV */}
          <nav
            className="hidden items-center gap-10 text-xl text-[var(--wild-charcoal)] md:flex"
            style={serifFont}
          >
            <a href="#shop" className="transition-opacity hover:opacity-60">
              Shop
            </a>

            <a href="#story" className="transition-opacity hover:opacity-60">
              Our Story
            </a>

            <a href="#markets" className="transition-opacity hover:opacity-60">
              Markets
            </a>

            <span className="h-8 w-px bg-[var(--wild-charcoal)]/40" />

            <a
              href="#cart"
              className="flex items-center gap-4 transition-opacity hover:opacity-60"
            >
              <span>Bag (0)</span>

              <svg
                width="27"
                height="30"
                viewBox="0 0 27 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 9H24L25.5 28H1.5L3 9Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M8 10V7C8 3.7 10.4 1 13.5 1C16.6 1 19 3.7 19 7V10"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
            </a>
          </nav>

          {/* MOBILE MENU */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span className="h-px w-7 bg-[var(--wild-forest)]" />
            <span className="h-px w-7 bg-[var(--wild-forest)]" />
            <span className="h-px w-7 bg-[var(--wild-forest)]" />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-92px)] overflow-hidden">
        <Image
          src="/images/wild-soul-hero.png"
          alt="Australian landscape with golden fields, eucalyptus trees, weathered timber fencing and coastline at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* STRONGER SOFT LIGHT WASH — NO HARD BOX */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5e6c7]/68 via-[#f5e6c7]/28 via-38% to-transparent to-62%" />

        {/* WARMING LAYER */}
        <div className="absolute inset-0 bg-[#8b5d37]/5" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-92px)] max-w-[1600px] items-center px-7 py-16 sm:px-12 lg:px-20">
          <div className="max-w-[650px] pb-6">
            <p className="mb-7 text-sm font-semibold uppercase tracking-[0.3em] text-[#684532] sm:text-base">
              Made in Australia
            </p>

            <h1
              className="text-[clamp(5.5rem,10vw,10rem)] font-medium leading-[0.63] tracking-[-0.055em] text-[var(--wild-forest)]"
              style={serifFont}
            >
              <span className="block">Wild</span>

              <span className="ml-[0.82em] block italic font-normal text-[#704a35]">
                Soul.
              </span>
            </h1>

            <p
              className="mt-14 text-[2rem] font-normal italic leading-[1.15] text-[var(--wild-forest)] sm:text-[2.5rem]"
              style={serifFont}
            >
              Built for the work.
              <br />
              Made for the recovery.
            </p>

            <p
              className="mt-7 max-w-lg text-[1.75rem] font-normal italic leading-[1.25] text-[#4b3528] sm:text-[2rem]"
              style={serifFont}
            >
              For the five minutes
              <br />
              you didn&apos;t know you needed.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href="#shop"
                className="inline-flex min-h-14 items-center justify-center bg-[var(--wild-forest)] px-9 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-[var(--wild-forest-dark)]"
              >
                Shop Wild Soul
              </a>

              <a
                href="#story"
                className="border-b border-white/90 pb-1 text-xl font-normal text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)] transition-opacity hover:opacity-70"
                style={serifFont}
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MADE FOR REAL LIFE */}
      <section
        id="shop"
        className="relative overflow-hidden bg-[var(--wild-cream)] px-6 py-24 sm:px-10 sm:py-28 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-[1450px]">
          {/* INTRO */}
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--wild-earth)] sm:text-sm">
              Wild Soul
            </p>

            <h2
              className="text-5xl font-normal leading-[0.95] text-[var(--wild-forest)] sm:text-6xl lg:text-7xl"
              style={serifFont}
            >
              Made for real life.
            </h2>

            <p
              className="mt-6 max-w-xl text-2xl font-normal italic leading-snug text-[#6f5a4a] sm:text-3xl"
              style={serifFont}
            >
              Small moments of care,
              <br className="hidden sm:block" /> wherever you find them.
            </p>
          </div>

          {/* CATEGORY GRID */}
          <div className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {/* BODY */}
            <a href="#body" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#ded5c7]">
  <Image
    src="/images/wild-soul-body.png"
    alt="Wild Soul Wild Renewal coffee and sugar scrub in a warm, relaxed bathroom setting"
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
  />
</div>

              <div className="mt-6">
                <h3
                  className="text-3xl font-normal text-[var(--wild-forest)]"
                  style={serifFont}
                >
                  Body
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-7 text-[var(--wild-soft)]">
                  Scrubs, butters and everyday skin care made for a little time
                  to yourself.
                </p>

                <span className="mt-4 inline-block border-b border-[var(--wild-earth)] pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--wild-earth)]">
                  Explore Body
                </span>
              </div>
            </a>

            {/* BATH */}
            <a href="#bath" className="group block lg:mt-14">
             <div className="relative aspect-[4/6] overflow-hidden bg-[#b8c0b2]">
  <Image
    src="/images/wild-soul-bath.png"
    alt="Wild Soul Highland Recovery bath soak beside a warm, softly lit bath"
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
  />
</div>

              <div className="mt-6">
                <h3
                  className="text-3xl font-normal text-[var(--wild-forest)]"
                  style={serifFont}
                >
                  Bath
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-7 text-[var(--wild-soft)]">
                  Soaks and simple escapes for the five minutes you manage to
                  steal.
                </p>

                <span className="mt-4 inline-block border-b border-[var(--wild-earth)] pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--wild-earth)]">
                  Explore Bath
                </span>
              </div>
            </a>

            {/* RECOVERY */}
            <a href="#recovery" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#a89a83]">
  <Image
    src="/images/wild-soul-recovery.png"
    alt="Wild Soul Bush Relief recovery balm resting on weathered timber beside Australian stockyards at the end of the day"
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
  />
</div>

              <div className="mt-6">
                <h3
                  className="text-3xl font-normal text-[var(--wild-forest)]"
                  style={serifFont}
                >
                  Recovery
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-7 text-[var(--wild-soft)]">
                  Balms and recovery care for tired hands, muscles and bodies
                  that have done the work.
                </p>

                <span className="mt-4 inline-block border-b border-[var(--wild-earth)] pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--wild-earth)]">
                  Explore Recovery
                </span>
              </div>
            </a>

            {/* SKIN OILS */}
            <a href="#skin-oils" className="group block lg:mt-14">
            <div className="relative aspect-[4/6] overflow-hidden bg-[#c8b89f]">
  <Image
    src="/images/wild-soul-skin-oils-v3.png"
    alt="Wild Soul Golden Grove botanical skin oil in warm morning light"
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
  />
</div>

              <div className="mt-6">
  <h3
    className="text-3xl font-normal text-[var(--wild-forest)]"
    style={serifFont}
  >
    Skin Oils
  </h3>

  <p className="mt-2 max-w-xs text-base leading-7 text-[var(--wild-soft)]">
    Botanical oils for face, body and beards — made to nourish, soften and glow.
  </p>

  <span className="mt-4 inline-block border-b border-[var(--wild-earth)] pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--wild-earth)]">
    Explore Skin Oils
  </span>
</div>
            </a>
          </div>
        </div>
      </section>

{/* TAKE FIVE */}
<section className="bg-[var(--wild-forest)]">
  <div className="mx-auto max-w-[1600px] px-7 py-28 sm:px-12 sm:py-36 lg:px-20 lg:py-44">
    <div className="max-w-[980px]">
      <p className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#c88f68]">
        Wild Soul
      </p>

      <h2
        className="max-w-[900px] text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-[0.95] tracking-[-0.035em] text-[var(--wild-cream)]"
        style={serifFont}
      >
        Not another thing
        <br />
        for your to-do list.
      </h2>

      <div className="mt-14 max-w-[720px]">
        <p
          className="text-[1.65rem] font-normal leading-[1.45] text-[var(--wild-cream)]/90 sm:text-[1.9rem]"
          style={serifFont}
        >
          Wild Soul came from real life.
        </p>

        <p className="mt-8 max-w-[680px] text-base leading-8 text-[var(--wild-cream)]/75 sm:text-lg">
          Busy days, tired bodies, messy houses, long hours and those moments when
          everyone seems to need something from you at once.
        </p>

        <p className="mt-6 max-w-[680px] text-base leading-8 text-[var(--wild-cream)]/75 sm:text-lg">
          It was never about creating another routine to keep up with. It was about
          making something that could give you a few minutes back — a scrub in the
          shower, a balm after a long day, a bath when the house finally goes quiet.
        </p>

        <p className="mt-6 max-w-[680px] text-base leading-8 text-[var(--wild-cream)]/75 sm:text-lg">
          Nothing complicated. Nothing perfect. Just a small reminder to stop for
          five minutes when you can.
        </p>

        <p
          className="mt-12 text-[2rem] italic text-[#d5a27d] sm:text-[2.4rem]"
          style={serifFont}
        >
          Take five. The rest can wait.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* WILD SOUL FAVOURITES */}
      <section className="bg-[var(--wild-cream)] px-6 py-24 sm:px-10 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1450px]">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--wild-earth)] sm:text-sm">
              Wild Soul Favourites
            </p>

            <h2
              className="text-5xl font-normal leading-[0.95] text-[var(--wild-forest)] sm:text-6xl lg:text-7xl"
              style={serifFont}
            >
              Already finding
              <br />
              their favourites.
            </h2>

            <p
              className="mt-6 max-w-2xl text-2xl font-normal italic leading-snug text-[#6f5a4a] sm:text-3xl"
              style={serifFont}
            >
              Some products just seem to find their people. These are a few
              that have been picked up, tried and loved along the way.
            </p>
          </div>

          <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-3">
            {/* BUSH RELIEF */}
            <article>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/wild-soul-bush-relief.png"
                  alt="Wild Soul Bush Relief recovery balm beside work gloves, fencing tools and a garden trowel"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--wild-earth)]">
                  Recovery Balm · 50g
                </p>

                <h3
                  className="mt-3 text-3xl font-normal text-[var(--wild-forest)]"
                  style={serifFont}
                >
                  Bush Relief
                </h3>

                <p className="mt-3 max-w-sm text-base leading-7 text-[var(--wild-soft)]">
                  For tired hands, muscles and bodies after a day that asked a
                  bit much.
                </p>

                <p
                  className="mt-4 text-2xl text-[var(--wild-charcoal)]"
                  style={serifFont}
                >
                  $24.95
                </p>

                <a
                  href="#bush-relief"
                  className="mt-5 inline-block border-b border-[var(--wild-earth)] pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--wild-earth)]"
                >
                  View Product
                </a>
              </div>
            </article>

            {/* MISTY GLEN */}
            <article>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/wild-soul-misty-glen.png"
                  alt="Wild Soul Misty Glen recovery balm on weathered timber in soft misty light"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--wild-earth)]">
                  Recovery Balm · 50g
                </p>

                <h3
                  className="mt-3 text-3xl font-normal text-[var(--wild-forest)]"
                  style={serifFont}
                >
                  Misty Glen
                </h3>

                <p className="mt-3 max-w-sm text-base leading-7 text-[var(--wild-soft)]">
                  A softer botanical blend for slowing down and giving tired
                  bodies a little care.
                </p>

                <p
                  className="mt-4 text-2xl text-[var(--wild-charcoal)]"
                  style={serifFont}
                >
                  $24.95
                </p>

                <a
                  href="#misty-glen"
                  className="mt-5 inline-block border-b border-[var(--wild-earth)] pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--wild-earth)]"
                >
                  View Product
                </a>
              </div>
            </article>

            {/* WILD RENEWAL */}
            <article>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/wild-soul-wild-renewal.png"
                  alt="Wild Soul Wild Renewal coffee and sugar scrub with Honey Glow body butter beside a warm bath"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--wild-earth)]">
                  Coffee &amp; Sugar Scrub · 210g
                </p>

                <h3
                  className="mt-3 text-3xl font-normal text-[var(--wild-forest)]"
                  style={serifFont}
                >
                  Wild Renewal
                </h3>

                <p className="mt-3 max-w-sm text-base leading-7 text-[var(--wild-soft)]">
                  Coffee, sugar and botanicals for scrubbing off the day and
                  taking five.
                </p>

                <p
                  className="mt-4 text-2xl text-[var(--wild-charcoal)]"
                  style={serifFont}
                >
                  $29.95
                </p>

                <a
                  href="#wild-renewal"
                  className="mt-5 inline-block border-b border-[var(--wild-earth)] pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--wild-earth)]"
                >
                  View Product
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

    </main>
  );
}

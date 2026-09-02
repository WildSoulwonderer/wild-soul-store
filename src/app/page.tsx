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
    </main>
  );
}
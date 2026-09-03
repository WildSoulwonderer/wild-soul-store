import Image from "next/image";
import Link from "next/link";

const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

export default function SunlitBloomPage() {
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

{/* PRODUCT HERO */}
      <section className="px-7 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#ded5c7]">
              <Image
                src="/images/Sunlit_Bloom_Hero.jpg"
                alt="Wild Soul Sunlit Bloom sugar scrub"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="max-w-[600px]">
            <Link
              href="/shop#body"
              className="text-base font-semibold uppercase tracking-[0.16em] text-[#9a6545]"
            >
              Sugar Scrub · 210g
            </Link>

            <h1
              className="mt-6 text-[clamp(4.5rem,7vw,7.5rem)] font-normal leading-[0.86] tracking-[-0.05em] text-[#243f35]"
              style={serifFont}
            >
              Sunlit Bloom
            </h1>

            <p
              className="mt-6 text-[2rem] italic leading-[1.2] text-[#704a35] sm:text-[2.4rem]"
              style={serifFont}
            >
              For when your skin could use a little sunshine.
            </p>

            <p className="mt-8 text-2xl font-medium tracking-[0.02em] text-[#243f35]">
              $24.95
            </p>

            <div className="mt-8 max-w-[570px] space-y-5 text-xl leading-9 text-[#5f574f]">
             <p>
  A bright sugar scrub made for dull, dry skin and those days when you
  could use a little lift.
</p>

              <p>
  Fine sugar gently buffs away roughness, while nourishing oils help leave
  skin feeling soft and smooth. Kakadu plum brings the Australian botanical
  goodness, with bright citrus giving Sunlit Bloom its fresh, sunny edge.
</p>
            </div>

            <button
              type="button"
              className="mt-10 inline-flex min-h-14 w-full items-center justify-center bg-[#243f35] px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#1c332b] sm:w-auto"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </section>

{/* THE SUGAR SCRUB */}
      <section className="bg-[#243f35] text-[#f4eee4]">
        <div className="mx-auto grid max-w-[1450px] gap-14 px-7 py-24 sm:px-12 sm:py-32 lg:grid-cols-[1fr_1fr] lg:px-20">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#c88f68]">
              The Sugar Scrub
            </p>

            <h2
              className="text-[clamp(3.5rem,5vw,5.8rem)] font-normal leading-[0.92] text-[#f4eee4]"
              style={serifFont}
            >
            Bring back
<br />
the glow.
            </h2>

            <p
              className="mt-7 text-2xl italic leading-snug text-[#d5a27d]"
              style={serifFont}
            >
              Kakadu Plum. Sweet Orange. Mandarin. Nerolina.
            </p>
          </div>

          <div className="max-w-[720px] space-y-6 text-xl leading-9 text-[#f4eee4]/80">
  <p>
    Some days your skin looks about as tired as you feel.
  </p>

<p>
  Sunlit Bloom combines fine sugar with nourishing oils and Kakadu plum
  to gently buff away dull, dry skin, while sweet orange, mandarin and
  nerolina bring the bright, fresh scent.
</p>

             <p>
  Work it over damp skin wherever things are feeling dry or dull, taking a
  little extra time on elbows, knees and anywhere that could use some attention.
</p>

   <p>
  Bright, simple and made for the days your skin needs waking up too.
</p>

            <p
              className="pt-2 text-2xl italic text-[#d5a27d]"
              style={serifFont}
            >
              A little brightness, when you need it most.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
<section className="px-7 py-24 sm:px-12 sm:py-32 lg:px-20">
  <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">

    <div className="order-2 lg:order-1">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#9a6545]">
        How to Use
      </p>

      <h2
        className="text-[clamp(3.2rem,4.5vw,5rem)] font-normal leading-[0.95] text-[#243f35]"
        style={serifFont}
      >
        Scoop it.
        <br />
        Scrub it.
      </h2>

      <div className="mt-8 max-w-[570px] space-y-5 text-xl leading-9 text-[#5f574f]">
        <p>
          Scoop a small amount into your hands and massage over damp skin
          using gentle circular motions.
        </p>

        <p>
          Spend a little more time on rough spots like elbows, knees and
          heels, then rinse well with warm water.
        </p>

        <p>
          Use 1–2 times a week, or whenever your skin feels like it needs
          a reset.
        </p>

        <p
          className="pt-2 text-2xl italic text-[#704a35]"
          style={serifFont}
        >
          Let yourself glow a little.
        </p>
      </div>
    </div>

    <div className="order-1 lg:order-2">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e1d8ca]">
        <Image
          src="/images/Sunlit_Bloom_Product.jpg"
          alt="Wild Soul Sunlit Bloom sugar scrub"
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain"
        />
      </div>
    </div>

  </div>
</section>

            {/* WHAT'S INSIDE */}
      <section className="bg-[#e8e1d5] px-7 py-24 sm:px-12 sm:py-32 lg:px-20">
        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#9a6545]">
              What&apos;s Inside
            </p>

            <h2
              className="text-[clamp(3.4rem,5vw,5.5rem)] font-normal leading-[0.92] text-[#243f35]"
              style={serifFont}
            >
              Simple Stuff,
              <br />
              <span className="italic text-[#704a35]">
                Made to work.
              </span>
            </h2>
          </div>

          <p className="text-[1.35rem] leading-9 text-[#5f574f]">

  White sugar, jojoba oil, camellia oil, Kakadu plum, mandarin,
  sweet orange essential oil and nerolina.
</p>

            <div className="mt-10 border-t border-[#243f35]/15 pt-8">
              <p className="text-lg leading-8 text-[#5f574f]/80">
                For external use only. Avoid contact with eyes and broken or
                irritated skin. Patch test before use if you have sensitive
                skin. Discontinue use if irritation occurs.
              </p>
            </div>
          </div>
      </section>

 {/* PACKAGING */}
      <section className="px-7 py-24 sm:px-12 sm:py-32 lg:px-20">
        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#ded5c7]">
              <Image
                src="/images/Sunlit_Bloom_Packaging.jpg"
                alt="Wild Soul Sunlit Bloom sugar scrub in amber glass jar"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="max-w-[560px]">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#9a6545]">
              Made to Be Used
            </p>

            <h2
              className="text-[clamp(3.2rem,4.5vw,5rem)] font-normal leading-[0.95] text-[#243f35]"
              style={serifFont}
            >
              Scoop it.
<br />
Use every bit.
            </h2>

            <div className="mt-8 space-y-5 text-xl leading-9 text-[#5f574f]">
              <p>
  Sunlit Bloom comes in a reusable amber glass jar with a
simple screw-top lid — easy to scoop from, easy to close
up and keep ready for next time.
</p>

                <p>
  Keep the lid on between uses and try to keep water out of the jar.
  A little care keeps the scrub ready for the next five minutes you steal for yourself.
</p>
            </div>
          </div>
        </div>
      </section>

{/* CLOSING */}
      <section className="bg-[#f4eee4] px-7 py-28 text-center sm:px-12 sm:py-36">
        <div className="mx-auto max-w-[850px]">
          <p
            className="text-[clamp(3.6rem,6vw,6rem)] font-normal leading-[0.92] text-[#243f35]"
            style={serifFont}
          >
          For the dull days
that need a
little light.
          </p>

          <p
            className="mt-4 text-[clamp(2rem,3.5vw,3.4rem)] italic text-[#704a35]"
            style={serifFont}
          >
            Find a little sunshine anyway.
          </p>

          <Link
            href="/shop"
            className="mt-10 inline-block border-b border-[#704a35] pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#704a35]"
          >
            Back to Shop
          </Link>
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
                Use the good stuff.
                <br />
                <span className="italic text-[#d7b89a]">
                  Tomorrow can bloody wait.
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
                <Link
                  href="/shop"
                  className="transition-opacity hover:opacity-60"
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
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8aa8c]">
                Wild Soul
              </p>

              <p
                className="mt-6 max-w-[300px] text-xl italic leading-relaxed text-[#f4eee4]/75"
                style={serifFont}
              >
                For the dusty roads,
                <br />
                tired bones &amp; days
                <br />
                that ask too much.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-7 text-xs text-[#f4eee4]/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Wild Soul. Made in Queensland,
              Australia.
            </p>

            <p>Built for the work. Made for the recovery.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
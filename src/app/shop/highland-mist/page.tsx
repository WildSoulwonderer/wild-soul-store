import Image from "next/image";
import Link from "next/link";
import AddToBagButton from "@/components/AddToBagButton";
import BagCount from "@/components/BagCount";

const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

export default function HighlandMistPage() {
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

            <BagCount />
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
                src="/images/Highland_Mist_Hero.jpg"
                alt="Wild Soul Highland Mist buff bar"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-[600px]">
            <Link
              href="/shop#body"
              className="text-base font-semibold uppercase tracking-[0.16em] text-[#9a6545]"
            >
              Buff Bar · 90g
            </Link>

            <h1
              className="mt-6 text-[clamp(4.5rem,7vw,7.5rem)] font-normal leading-[0.86] tracking-[-0.05em] text-[#243f35]"
              style={serifFont}
            >
              Highland Mist
            </h1>

            <p
              className="mt-6 text-[2rem] italic leading-[1.2] text-[#704a35] sm:text-[2.4rem]"
              style={serifFont}
            >
              Like a breath of fresh air.
            </p>

            <p className="mt-8 text-2xl font-medium tracking-[0.02em] text-[#243f35]">
              $15.95
            </p>

            <div className="mt-8 max-w-[570px] space-y-5 text-xl leading-9 text-[#5f574f]">
              <p>
                A solid body buff bar for the days when a quick rinse just
                won&apos;t cut it.
              </p>

              <p>
                Pink salt and Epsom salt bring the scrub, while shea butter,
                cocoa butter and coconut oil leave skin feeling conditioned.
                Eucalyptus kochii and spearmint give Highland Mist its clean,
                fresh edge.
              </p>
            </div>

            {/* HIGHLAND MIST */}
<AddToBagButton
  id="highland-mist"
  name="Highland Mist Buff Bar"
  price={15.95}
/>
          </div>
        </div>
      </section>

      {/* THE BAR */}
      <section className="bg-[#243f35] text-[#f4eee4]">
        <div className="mx-auto grid max-w-[1450px] gap-14 px-7 py-24 sm:px-12 sm:py-32 lg:grid-cols-[1fr_1fr] lg:px-20">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#c88f68]">
              The Buff Bar
            </p>

            <h2
              className="text-[clamp(3.5rem,5vw,5.8rem)] font-normal leading-[0.92] text-[#f4eee4]"
              style={serifFont}
            >
              Wash the day
              <br />
              away.
            </h2>

            <p
              className="mt-7 text-2xl italic leading-snug text-[#d5a27d]"
              style={serifFont}
            >
              Eucalyptus. Spearmint. Fresh air.
            </p>
          </div>

          <div className="max-w-[720px] space-y-6 text-xl leading-9 text-[#f4eee4]/80">
            <p>
              Some days need more than a quick shower.
            </p>

            <p>
              Highland Mist was made for those ones. A solid body bar with
              mineral salts for exfoliation, rich butters for slip and a fresh
              eucalyptus and spearmint blend.
            </p>

            <p>
              Work it over damp skin where the day has left its mark —
              elbows, knees, heels or anywhere that could use a proper buff.
            </p>

            <p>
              Fresh. Simple. No complicated routine.
            </p>

            <p
              className="pt-2 text-2xl italic text-[#d5a27d]"
              style={serifFont}
            >
              Just scrub, rinse and get on with it.
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
              Buff. Rinse.
              <br />
              Breathe.
            </h2>

            <div className="mt-8 max-w-[570px] space-y-5 text-xl leading-9 text-[#5f574f]">
              <p>
                Warm the bar under water for a few seconds, then glide it over
                damp skin using light pressure.
              </p>

              <p>
                Spend a little more time on rough areas, then rinse your skin
                and the bar well.
              </p>

              <p>
                Let the bar dry properly between uses so it lasts longer.
              </p>

              <p
                className="pt-2 text-2xl italic text-[#704a35]"
                style={serifFont}
              >
                That&apos;s it.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#e1d8ca]">
              <Image
                src="/images/Highland_Mist_Buff_Bar.jpg"
                alt="Wild Soul Highland Mist buff bar"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
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
              Simple stuff.
              <br />
              <span className="italic text-[#704a35]">
                Made to work.
              </span>
            </h2>
          </div>

          <div className="max-w-[760px]">
            <p className="text-[1.35rem] leading-9 text-[#5f574f]">
              Shea butter, cocoa butter, beeswax, coconut oil, arrowroot powder,
              Himalayan pink salt, Epsom salt, Eucalyptus kochii and spearmint.
            </p>

            <div className="mt-10 border-t border-[#243f35]/15 pt-8">
              <p className="text-lg leading-8 text-[#5f574f]/80">
                For external use only. Avoid contact with eyes and broken or
                irritated skin. Patch test before use if you have sensitive
                skin. Discontinue use if irritation occurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGING */}
      <section className="px-7 py-24 sm:px-12 sm:py-32 lg:px-20">
        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#ded5c7]">
              <Image
                src="/images/Highland_Mist_Boxed.jpg"
                alt="Wild Soul Highland Mist buff bar in kraft packaging"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
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
              Solid.
              <br />
              Simple.
              <br />
              Ready to use.
            </h2>

            <div className="mt-8 space-y-5 text-xl leading-9 text-[#5f574f]">
              <p>
                Highland Mist comes as a solid bar in a simple kraft window box.
              </p>

              <p>
                Keep it dry between uses and let it do what it was made to do.
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
            A little bit
            <br />
            of fresh air.
          </p>

          <p
            className="mt-4 text-[clamp(2rem,3.5vw,3.4rem)] italic text-[#704a35]"
            style={serifFont}
          >
            Without leaving the bathroom.
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
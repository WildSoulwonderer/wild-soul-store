import Image from "next/image";
import Link from "next/link";
import AddToBagButton from "@/components/AddToBagButton";
import BagCount from "@/components/BagCount";

const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

export default function BushReliefPage() {
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
                src="/images/bush-relief-hero.png"
                alt="Wild Soul Bush Relief recovery balm"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-[600px]">
            <Link
              href="/shop#recovery"
              className="text-base font-semibold uppercase tracking-[0.16em] text-[#9a6545]"
            >
              Recovery Balm · 50g
            </Link>

            <h1
              className="mt-6 text-[clamp(4.5rem,7vw,7.5rem)] font-normal leading-[0.86] tracking-[-0.05em] text-[#243f35]"
              style={serifFont}
            >
              Bush Relief
            </h1>

            <p
              className="mt-6 text-[2rem] italic leading-[1.2] text-[#704a35] sm:text-[2.4rem]"
              style={serifFont}
            >
              For bodies that have done the work.
            </p>

            <p className="mt-8 text-2xl font-medium tracking-[0.02em] text-[#243f35]">
  $24.95
</p>

            <div className="mt-8 max-w-[570px] space-y-5 text-xl leading-9 text-[#5f574f]">
              <p>
                A small-batch recovery balm for the days that leave their
                mark.
              </p>

              <p>
                Made with rich butters, botanical oils and an earthy blend of
                Australian natives, Bush Relief belongs with dusty boots, long
                days and bodies that have earned a bit of looking after.
              </p>
            </div>

          <AddToBagButton
  id="bush-relief"
  name="Bush Relief Recovery Balm"
  price={24.95}
/>
          </div>
        </div>
      </section>

      {/* THE BALM */}
      <section className="bg-[#243f35] text-[#f4eee4]">
        <div className="mx-auto grid max-w-[1450px] gap-14 px-7 py-24 sm:px-12 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:px-20">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#c88f68]">
              The Balm
            </p>

            <h2
              className="text-[clamp(3.5rem,5vw,5.8rem)] font-normal leading-[0.92] text-[#f4eee4]"
              style={serifFont}
            >
              For the days
              <br />
              that ask too much.
            </h2>

            <p
              className="mt-7 text-2xl italic leading-snug text-[#d5a27d]"
              style={serifFont}
            >
              Dusty roads. Long hours. Tired bones.
            </p>
          </div>

          <div className="max-w-[720px] space-y-6 text-xl leading-9 text-[#f4eee4]/80">
            <p>Some days you feel every bloody bit of them.</p>

            <p>
              Bush Relief was made for those days. A rich, small-batch balm
              made with butters, botanical oils and native Australian
              ingredients, for skin and bodies that have done the work.
            </p>

            <p>
              Massage it into tired hands, feet, shoulders or wherever the day
              has caught up with you.
            </p>

            <p>
              No elaborate routine. No special occasion.
            </p>

            <p
              className="pt-2 text-2xl italic text-[#d5a27d]"
              style={serifFont}
            >
              Just use it when you need it.
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
              A little goes
              <br />
              a long way.
            </h2>

            <div className="mt-8 max-w-[570px] space-y-5 text-xl leading-9 text-[#5f574f]">
              <p>
                Warm a small amount between your fingers and massage into the
                skin where needed.
              </p>

              <p>Start with a little and add more if you want it.</p>

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
                src="/images/bush-relief-tin.jpg"
                alt="Open tin of Wild Soul Bush Relief recovery balm"
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
              Simple ingredients.
              <br />
              <span className="italic text-[#704a35]">Made by hand.</span>
            </h2>
          </div>

          <div className="max-w-[760px]">
            <p className="text-[1.35rem] leading-9 text-[#5f574f]">
              Shea butter, cocoa butter, hemp oil, jojoba oil, coconut oil,
              beeswax, kunzea, Eucalyptus kochii, native pepperberry and
              Himalayan cedarwood.
            </p>

            <div className="mt-10 border-t border-[#243f35]/15 pt-8">
              <p className="text-lg leading-8 text-[#5f574f]/80">
                For external use only. Avoid contact with eyes. Patch test
                before use if you have sensitive skin. Discontinue use if
                irritation occurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-7 py-28 text-center sm:px-12 sm:py-36">
        <div className="mx-auto max-w-[850px]">
          <p
            className="text-[clamp(3.6rem,6vw,6rem)] font-normal leading-[0.92] text-[#243f35]"
            style={serifFont}
          >
            Built for the work.
          </p>

          <p
            className="mt-4 text-[clamp(2rem,3.5vw,3.4rem)] italic text-[#704a35]"
            style={serifFont}
          >
            Made for the recovery.
          </p>

          <Link
            href="/shop"
            className="mt-10 inline-block border-b border-[#704a35] pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#704a35]"
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
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#c8aa8c]">
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

              <p className="mt-7 max-w-[430px] text-lg leading-8 text-[#f4eee4]/70 sm:text-base">
                Small-batch body, bath and skincare products made in Queensland
                for real life.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c8aa8c]">
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
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c8aa8c]">
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
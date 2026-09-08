import Image from "next/image";
import Link from "next/link";
import AddToBagButton from "@/components/AddToBagButton";
import BagCount from "@/components/BagCount";

const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

export default function RedDustPage() {
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
          src="/images/Red_Dust_Hero.jpg"
          alt="Wild Soul Red Dust face and beard oil"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
        />
      </div>
    </div>

    <div className="max-w-[600px]">
      <Link
        href="/shop#face"
        className="text-base font-semibold uppercase tracking-[0.16em] text-[#9a6545]"
      >
        Face &amp; Beard Oil · 25ml
      </Link>

      <h1
        className="mt-6 text-[clamp(4.5rem,7vw,7.5rem)] font-normal leading-[0.86] tracking-[-0.05em] text-[#243f35]"
        style={serifFont}
      >
        Red Dust
      </h1>

      <p
        className="mt-6 text-[2rem] italic leading-[1.2] text-[#704a35] sm:text-[2.4rem]"
        style={serifFont}
      >
        Fresh care for dusty days.
      </p>

      <p className="mt-8 text-2xl font-medium tracking-[0.02em] text-[#243f35]">
        $16.95
      </p>

      <div className="mt-8 max-w-[570px] space-y-5 text-xl leading-9 text-[#5f574f]">
        <p>
          A lightweight face and beard oil made for everyday moisture without
          leaving skin or beard hair feeling heavy.
        </p>

        <p>
          Jojoba, camellia and apricot kernel oils form the base, with lemon
          myrtle, kunzea, Himalayan cedarwood and lime bringing a fresh,
          earthy citrus scent.
        </p>
      </div>

     {/* RED DUST */}
<AddToBagButton
  id="red-dust"
  name="Red Dust Face & Beard Oil"
  price={16.95}
/>
    </div>
  </div>
</section>

{/* THE OIL */}
<section className="bg-[#243f35] text-[#f4eee4]">
  <div className="mx-auto grid max-w-[1450px] gap-14 px-7 py-24 sm:px-12 sm:py-32 lg:grid-cols-[1fr_1fr] lg:px-20">
    <div>
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#c88f68]">
        The Face &amp; Beard Oil
      </p>

      <h2
        className="text-[clamp(3.5rem,5vw,5.8rem)] font-normal leading-[0.92] text-[#f4eee4]"
        style={serifFont}
      >
        Fresh skin.
        <br />
        Dust off.
      </h2>

      <p
        className="mt-7 text-2xl italic leading-snug text-[#d5a27d]"
        style={serifFont}
      >
        Lemon Myrtle. Kunzea. Cedarwood. Lime.
      </p>
    </div>

    <div className="max-w-[720px] space-y-6 text-xl leading-9 text-[#f4eee4]/80">
      <p>
        Red Dust is made for the kind of days that leave a little of the
        outdoors behind.
      </p>

      <p>
        Jojoba, camellia and apricot kernel oils help condition and soften
        skin and beard hair without leaving a heavy finish.
      </p>

      <p>
        Lemon myrtle and lime bring the fresh citrus notes, while kunzea and
        Himalayan cedarwood give the blend its earthy, grounded edge.
      </p>

      <p>
        Use a few drops after washing, over your face, through beard hair if
        you have it, or anywhere that could use a little extra moisture.
      </p>

      <p
        className="pt-2 text-2xl italic text-[#d5a27d]"
        style={serifFont}
      >
        Clean up. Keep going.
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
        Wash up.
        <br />
        Work it in.
      </h2>

      <div className="mt-8 max-w-[570px] space-y-5 text-xl leading-9 text-[#5f574f]">
        <p>
          Add a few drops to the palm of your hand and warm the oil between
          your fingers.
        </p>

        <p>
          Massage into clean skin wherever a little extra moisture is needed.
        </p>

        <p>
          If you have a beard, work a few drops through from root to tip,
          including the skin underneath.
        </p>

        <p>
          Start small and add more if you need it. A little goes further than
          you think.
        </p>

        <p
          className="pt-2 text-2xl italic text-[#704a35]"
          style={serifFont}
        >
          Dust off. Carry on.
        </p>
      </div>
    </div>

    <div className="order-1 lg:order-2">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e1d8ca]">
        <Image
          src="/images/Red_Dust_Product.jpg"
          alt="Red Dust face and beard oil being worked into the hands"
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
        Jojoba oil, camellia oil, apricot kernel oil, lemon myrtle,
        kunzea, Himalayan cedarwood and lime.
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
          src="/images/Red_Dust_Packaging.jpg"
          alt="Wild Soul Red Dust face and beard oil in amber glass bottle"
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain"
        />
      </div>
    </div>

    <div className="max-w-[600px]">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#9a6545]">
        The Packaging
      </p>

      <h2
        className="text-[clamp(3.4rem,5vw,5.5rem)] font-normal leading-[0.92] text-[#243f35]"
        style={serifFont}
      >
       A few drops.
<br />
<span className="italic text-[#704a35]">
  Goes a long way.
</span>
      </h2>

      <div className="mt-8 max-w-[560px] space-y-5 text-xl leading-9 text-[#5f574f]">
        <p>
          Red Dust comes in a 25ml amber glass bottle with a dropper, making
          it easy to use just what you need.
        </p>

        <p>
          The amber glass helps protect the oils inside, and the bottle can
          be reused or recycled when you&apos;re finished.
        </p>

        <p
          className="pt-2 text-2xl italic text-[#704a35]"
          style={serifFont}
        >
          Small bottle. Easy habit.
        </p>
      </div>
    </div>
  </div>
</section>

{/* CLOSING */}
<section className="bg-[#243f35] px-7 py-24 text-center text-[#f4eee4] sm:px-12 sm:py-32 lg:px-20">
  <div className="mx-auto max-w-[900px]">
    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#d5a27d]">
      Red Dust
    </p>

    <h2
      className="text-[clamp(3.8rem,6vw,6.5rem)] font-normal leading-[0.92]"
      style={serifFont}
    >
      Wash off the day.
      <br />
      <span className="italic text-[#d5a27d]">
        Keep the good bits.
      </span>
    </h2>

    <p
      className="mx-auto mt-8 max-w-[650px] text-2xl italic leading-relaxed text-[#f4eee4]/80"
      style={serifFont}
    >
      A little reset before you get on with it.
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
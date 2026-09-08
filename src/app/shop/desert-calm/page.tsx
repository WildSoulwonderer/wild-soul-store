import Image from "next/image";
import Link from "next/link";
import AddToBagButton from "@/components/AddToBagButton";
import BagCount from "@/components/BagCount";

const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

export default function OceanDriftPage() {
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
          src="/images/Desert_Calm_Hero.jpg"
          alt="Wild Soul Desert Calm exfoliating salt scrub"
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
        Salt Scrub · 250g
      </Link>

      <h1
        className="mt-6 text-[clamp(4.5rem,7vw,7.5rem)] font-normal leading-[0.86] tracking-[-0.05em] text-[#243f35]"
        style={serifFont}
      >
        Desert Calm
      </h1>

      <p
        className="mt-6 text-[2rem] italic leading-[1.2] text-[#704a35] sm:text-[2.4rem]"
        style={serifFont}
      >
        Grounded, earthy and made to slow things down.
      </p>

      <p className="mt-8 text-2xl font-medium tracking-[0.02em] text-[#243f35]">
        $29.95
      </p>

      <div className="mt-8 max-w-[570px] space-y-5 text-xl leading-9 text-[#5f574f]">
        <p>
          A mineral-rich salt scrub made for rough, dry skin and the days
          when you need to scrub off the dust and start again.
        </p>

        <p>
          Pink Himalayan and Epsom salts buff away roughness while rice bran
          and apricot kernel oils help leave skin feeling soft and smooth.
          Kunzea, cedarwood and lemon myrtle give Desert Calm its warm,
          grounded Australian bush scent.
        </p>
      </div>

      {/* DESERT CALM */}
<AddToBagButton
  id="desert-calm"
  name="Desert Calm Salt Scrub"
  price={29.95}
/>
    </div>
  </div>
</section>

{/* THE SALT SCRUB */}
<section className="bg-[#243f35] text-[#f4eee4]">
  <div className="mx-auto grid max-w-[1450px] gap-14 px-7 py-24 sm:px-12 sm:py-32 lg:grid-cols-[1fr_1fr] lg:px-20">
    <div>
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#c88f68]">
        The Salt Scrub
      </p>

      <h2
        className="text-[clamp(3.5rem,5vw,5.8rem)] font-normal leading-[0.92] text-[#f4eee4]"
        style={serifFont}
      >
        Dust off.
        <br />
        Slow down.
      </h2>

      <p
        className="mt-7 text-2xl italic leading-snug text-[#d5a27d]"
        style={serifFont}
      >
        Kunzea. Cedarwood. Lemon Myrtle.
      </p>
    </div>

    <div className="max-w-[720px] space-y-6 text-xl leading-9 text-[#f4eee4]/80">
      <p>
        Some days leave a little more behind than others.
      </p>

      <p>
        Desert Calm combines pink Himalayan and Epsom salts with rice bran
        and apricot kernel oils to buff away rough, dry skin without leaving
        it feeling stripped.
      </p>

      <p>
        Kunzea, cedarwood and lemon myrtle bring a warm, earthy bush scent
        that feels right at home after dusty days, long hours and everything
        in between.
      </p>

      <p>
        Work it over damp skin wherever things are feeling rough or dry,
        taking a little extra time on elbows, knees, heels and anywhere
        that could use some attention.
      </p>

      <p
        className="pt-2 text-2xl italic text-[#d5a27d]"
        style={serifFont}
      >
        Wash off the dust. Keep the calm.
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
          a good scrub.
        </p>

        <p
          className="pt-2 text-2xl italic text-[#704a35]"
          style={serifFont}
        >
          Leave the dust behind.
        </p>
      </div>
    </div>

    <div className="order-1 lg:order-2">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e1d8ca]">
        <Image
          src="/images/Desert_Calm_Product.jpg"
          alt="Wild Soul Desert Calm exfoliating salt scrub"
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

    <div>
      <p className="text-[1.35rem] leading-9 text-[#5f574f]">
        Pink Himalayan salt, Epsom salt, rice bran oil, apricot kernel oil,
        kunzea, Himalayan cedarwood and lemon myrtle.
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
          src="/images/Desert_Calm_Packaging.jpg"
          alt="Wild Soul Desert Calm exfoliating salt scrub in amber glass jar"
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
        Made for
        <br />
        everyday use.
      </h2>

      <div className="mt-8 space-y-5 text-xl leading-9 text-[#5f574f]">
        <p>
          Desert Calm comes in a reusable amber glass jar with a simple
          screw-top lid — easy to scoop from, easy to close up and keep ready
          for next time.
        </p>

        <p>
          Keep the lid on between uses and try to keep water out of the jar.
          A little care keeps the scrub ready for the next five minutes you
          steal for yourself.
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
      For the dusty days
      <br />
      that ask too much.
    </p>

    <p
      className="mt-4 text-[clamp(2rem,3.5vw,3.4rem)] italic text-[#704a35]"
      style={serifFont}
    >
      Leave the dust behind.
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
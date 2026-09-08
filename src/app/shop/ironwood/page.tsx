import Image from "next/image";
import Link from "next/link";
import AddToBagButton from "@/components/AddToBagButton";
import BagCount from "@/components/BagCount";

const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

export default function IronwoodPage() {
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
          src="/images/Ironwood_Hero.jpg"
          alt="Wild Soul Ironwood face and beard oil"
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
        Ironwood
      </h1>

      <p
        className="mt-6 text-[2rem] italic leading-[1.2] text-[#704a35] sm:text-[2.4rem]"
        style={serifFont}
      >
        Simple care for skin, beard and everything in between.
      </p>

      <p className="mt-8 text-2xl font-medium tracking-[0.02em] text-[#243f35]">
        $16.95
      </p>

      <div className="mt-8 max-w-[570px] space-y-5 text-xl leading-9 text-[#5f574f]">
        <p>
          A lightweight face and beard oil made for everyday use without
          turning your routine into a whole production.
        </p>

        <p>
          Jojoba, apricot kernel and camellia oils help soften and condition
          skin and beard hair, while Himalayan cedarwood, ho wood, nerolina and mandarin
give Ironwood its warm, grounded woody scent with a fresh citrus edge.
        </p>
      </div>

      {/* IRONWOOD */}
<AddToBagButton
  id="ironwood"
  name="Ironwood Face & Beard Oil"
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
        Soften up.
        <br />
        Keep it simple.
      </h2>

      <p
        className="mt-7 text-2xl italic leading-snug text-[#d5a27d]"
        style={serifFont}
      >
        Cedarwood. Ho Wood. Nerolina. Mandarin.
      </p>
    </div>

    <div className="max-w-[720px] space-y-6 text-xl leading-9 text-[#f4eee4]/80">
      <p>
        Good skin care doesn&apos;t need twelve steps.
      </p>

      <p>
        Ironwood combines jojoba, apricot kernel and camellia oils in a
        lightweight blend made to condition dry skin and soften beard hair
        without feeling unnecessarily complicated.
      </p>

        <p>
  Himalayan cedarwood and ho wood bring the warm, woody base, while nerolina
  and mandarin add a fresh citrus edge without overpowering it.
</p>

<p>
  Use a few drops after washing, through your beard, over your face or
  anywhere that could use a little extra moisture.
</p>

      <p
        className="pt-2 text-2xl italic text-[#d5a27d]"
        style={serifFont}
      >
        A few drops. That&apos;s plenty.
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
        A few drops.
        <br />
        That&apos;s it.
      </h2>

      <div className="mt-8 max-w-[570px] space-y-5 text-xl leading-9 text-[#5f574f]">
        <p>
          Start with a few drops in the palm of your hand and warm the oil
          between your fingers.
        </p>

        <p>
          For your face, gently press or massage into clean skin until
          absorbed.
        </p>

        <p>
          For your beard, work it through from root to tip, making sure a
          little reaches the skin underneath too.
        </p>

        <p>
          Add another drop or two if you need it. You can always add more —
          fishing out too much oil is considerably harder.
        </p>

        <p
          className="pt-2 text-2xl italic text-[#704a35]"
          style={serifFont}
        >
          Face. Beard. Both. Your call.
        </p>
      </div>
    </div>

    <div className="order-1 lg:order-2">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e1d8ca]">
        <Image
          src="/images/Ironwood_Product.jpg"
          alt="Wild Soul Ironwood face and beard oil"
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
        Jojoba oil, apricot kernel oil, camellia oil, Himalayan cedarwood,
        ho wood, nerolina and mandarin.
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
          src="/images/Ironwood_Packaging.jpg"
          alt="Wild Soul Ironwood face and beard oil in amber glass bottle"
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
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
        Drop by drop.
        <br />
        <span className="italic text-[#704a35]">
          No fuss.
        </span>
      </h2>

      <div className="mt-8 max-w-[560px] space-y-5 text-xl leading-9 text-[#5f574f]">
        <p>
          Ironwood comes in a 25ml amber glass bottle with a dropper, making
          it easy to use just what you need without pouring half the bottle
          into your hand.
        </p>

        <p>
          The amber glass helps protect the oils inside and the bottle can be
          reused or recycled when you&apos;re finished.
        </p>

        <p
          className="pt-2 text-2xl italic text-[#704a35]"
          style={serifFont}
        >
          A little goes a long way.
        </p>
      </div>
    </div>
  </div>
</section>

{/* CLOSING */}
<section className="bg-[#243f35] px-7 py-24 text-center text-[#f4eee4] sm:px-12 sm:py-32 lg:px-20">
  <div className="mx-auto max-w-[900px]">
    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#d5a27d]">
      Ironwood
    </p>

    <h2
      className="text-[clamp(3.8rem,6vw,6.5rem)] font-normal leading-[0.92]"
      style={serifFont}
    >
      Look after the skin.
      <br />
      <span className="italic text-[#d5a27d]">
        Keep the beard.
      </span>
    </h2>

    <p
      className="mx-auto mt-8 max-w-[650px] text-2xl italic leading-relaxed text-[#f4eee4]/80"
      style={serifFont}
    >
      A little care goes a long way.
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
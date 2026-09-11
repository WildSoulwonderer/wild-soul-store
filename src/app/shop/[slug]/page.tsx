import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToBagButton from "@/components/AddToBagButton";
import { getStoreProduct } from "@/lib/store-products";

export const dynamic = "force-dynamic";

const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getCollectionHref(category: string | null) {
  const value = (category ?? "").trim().toLowerCase();

  if (
    value === "bath" ||
    value.includes("bath") ||
    value.includes("soak")
  ) {
    return "/shop#bath";
  }

  if (
    value === "recovery" ||
    value.includes("recovery") ||
    value.includes("balm")
  ) {
    return "/shop#recovery";
  }

  if (
    value === "skin oils" ||
    value === "skin oil" ||
    value.includes("face oil") ||
    value.includes("beard oil") ||
    value.includes("face & beard") ||
    value.includes("face and beard")
  ) {
    return "/shop#skin-oils";
  }

  return "/shop#body";
}

function getUseHeading(category: string | null) {
  const value = (category ?? "").toLowerCase();

  if (value.includes("scrub")) return ["Scoop it.", "Work it in."];
  if (value.includes("butter")) return ["Scoop it.", "Let it melt in."];
  if (value.includes("balm")) return ["Warm it up.", "Work it in."];
  if (value.includes("oil")) return ["A few drops.", "That’s plenty."];
  if (value.includes("soak")) return ["Pour it in.", "Disappear awhile."];
  if (value.includes("bar")) return ["Warm it up.", "Glide it on."];

  return ["Use the good stuff.", "No ceremony required."];
}

function getUseCopy(category: string | null) {
  const value = (category ?? "").toLowerCase();

  if (value.includes("butter")) {
    return "Massage a small amount into dry skin, hands, elbows or anywhere that needs a little extra attention. Start with less than you think you need and add more if your skin asks for it.";
  }

  if (value.includes("scrub")) {
    return "Massage over damp skin using gentle circular motions, spend a little extra time on rough spots, then rinse well. Keep water out of the jar between uses.";
  }

  if (value.includes("balm")) {
    return "Warm a small amount between your fingers, then massage into the areas that need it most. Reapply whenever your body has done the work and wants a little something back.";
  }

  if (value.includes("oil")) {
    return "Warm a few drops between your hands and press or massage into clean skin or beard. Add another drop only if you need it — simple is the point.";
  }

  if (value.includes("soak")) {
    return "Add to warm bath water, give it a swirl and let the day bugger off for a little while. Rinse the bath after use if needed.";
  }

  return "Use a little, see how it feels, then add more if you need it. Wild Soul is made for ordinary life — not complicated routines.";
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getStoreProduct(slug);

  if (!product) {
    return {
      title: "Product",
    };
  }

  return {
    title: product.name,
    description:
      product.short_description ||
      product.description ||
      undefined,
  };
}

export default async function StoreProductPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const product = await getStoreProduct(slug);

  if (!product) {
    notFound();
  }

  const inStock = (product.current_stock ?? 0) > 0;
  const collectionHref = getCollectionHref(product.category);
  const [useHeadingOne, useHeadingTwo] = getUseHeading(
    product.category,
  );
  const useCopy = getUseCopy(product.category);

  const descriptionParagraphs = (
    product.description ||
    product.short_description ||
    ""
  )
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .filter(
      (paragraph) =>
        paragraph.toLowerCase() !== product.name.toLowerCase(),
    );

  const storyParagraphs =
    descriptionParagraphs.length > 0
      ? descriptionParagraphs
      : product.short_description
        ? [product.short_description]
        : [];

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

            <Link
              href="/bag"
              className="transition-opacity hover:opacity-60"
            >
              Bag
            </Link>
          </nav>

          <Link
            href="/shop"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#704a35] md:hidden"
          >
            Back to shop
          </Link>
        </div>
      </header>

      {/* PRODUCT HERO */}
      <section className="px-7 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#ded5c7]">
              {product.photo_url ? (
                <img
                  src={product.photo_url}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center px-8 text-center text-[#704a35]">
                  Product photo coming soon
                </div>
              )}
            </div>
          </div>

          <div className="max-w-[620px]">
            <Link
              href={collectionHref}
              className="text-base font-semibold uppercase tracking-[0.16em] text-[#9a6545]"
            >
              {product.category || "Wild Soul"}
            </Link>

            <h1
              className="mt-6 text-[clamp(4.5rem,7vw,7.5rem)] font-normal leading-[0.86] tracking-[-0.05em] text-[#243f35]"
              style={serifFont}
            >
              {product.name}
            </h1>

            {product.short_description && (
              <p
                className="mt-6 max-w-[590px] text-[2rem] italic leading-[1.2] text-[#704a35] sm:text-[2.4rem]"
                style={serifFont}
              >
                {product.short_description}
              </p>
            )}

            <p className="mt-8 text-2xl font-medium tracking-[0.02em] text-[#243f35]">
              ${Number(product.retail_price ?? 0).toFixed(2)}
            </p>

            {inStock ? (
              <AddToBagButton
                id={product.id}
                name={product.name}
                price={Number(product.retail_price ?? 0)}
              />
            ) : (
              <button
                type="button"
                disabled
                className="mt-10 inline-flex min-h-14 w-full cursor-not-allowed items-center justify-center bg-[#8d938f] px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white sm:w-auto"
              >
                Sold Out
              </button>
            )}
          </div>
        </div>
      </section>

      {/* PRODUCT STORY */}
      <section className="bg-[#243f35] text-[#f4eee4]">
        <div className="mx-auto grid max-w-[1450px] gap-14 px-7 py-24 sm:px-12 sm:py-32 lg:grid-cols-[0.85fr_1.15fr] lg:px-20">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#c88f68]">
              Wild Soul {product.category || "Care"}
            </p>

            <h2
              className="text-[clamp(3.5rem,5vw,5.8rem)] font-normal leading-[0.92] text-[#f4eee4]"
              style={serifFont}
            >
              Made for
              <br />
              <span className="italic text-[#d5a27d]">
                real life.
              </span>
            </h2>
          </div>

          <div className="max-w-[760px] space-y-6 text-xl leading-9 text-[#f4eee4]/80">
            {storyParagraphs.map((paragraph, index) => (
              <p key={`${product.id}-story-${index}`}>
                {paragraph}
              </p>
            ))}

            <p
              className="pt-2 text-2xl italic text-[#d5a27d]"
              style={serifFont}
            >
              No complicated routine. Just the good stuff when
              you need it.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="px-7 py-24 sm:px-12 sm:py-32 lg:px-20">
        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#9a6545]">
              Made to Be Used
            </p>

            <h2
              className="text-[clamp(3.2rem,4.5vw,5rem)] font-normal leading-[0.95] text-[#243f35]"
              style={serifFont}
            >
              {useHeadingOne}
              <br />
              {useHeadingTwo}
            </h2>

            <div className="mt-8 max-w-[590px] space-y-5 text-xl leading-9 text-[#5f574f]">
              <p>{useCopy}</p>

              <p
                className="pt-2 text-2xl italic text-[#704a35]"
                style={serifFont}
              >
                Five minutes is enough.
              </p>
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#e1d8ca]">
              {product.secondary_photo_url ? (
                <img
                  src={product.secondary_photo_url}
                  alt={`${product.name} lifestyle image by Wild Soul`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center px-8 text-center text-[#704a35]">
                  <div className="max-w-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a6545]">
                      Wild Soul
                    </p>
                    <p className="mt-4 text-2xl italic leading-9 text-[#704a35]" style={serifFont}>
                      Made for real life, not perfect routines.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE CARE */}
      <section className="bg-[#e8e1d5] px-7 py-24 sm:px-12 sm:py-32 lg:px-20">
        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#9a6545]">
              The Wild Soul Way
            </p>

            <h2
              className="text-[clamp(3.4rem,5vw,5.5rem)] font-normal leading-[0.92] text-[#243f35]"
              style={serifFont}
            >
              Simple care.
              <br />
              <span className="italic text-[#704a35]">
                No ceremony required.
              </span>
            </h2>
          </div>

          <div className="max-w-[760px]">
            <p className="text-[1.35rem] leading-9 text-[#5f574f]">
              Wild Soul is made to be opened, used, carried
              around and worked into ordinary life. No saving
              the good stuff for later. No pretending self-care
              needs perfect timing.
            </p>

            <div className="mt-10 border-t border-[#243f35]/15 pt-8">
              <p className="text-lg leading-8 text-[#5f574f]/80">
                For external use only unless the product label
                says otherwise. Follow the directions on your
                product label and discontinue use if irritation
                occurs.
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
            Use the good stuff.
          </p>

          <p
            className="mt-4 text-[clamp(2rem,3.5vw,3.4rem)] italic text-[#704a35]"
            style={serifFont}
          >
            Tomorrow can bloody wait.
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
                Take five.
                <br />
                <span className="italic text-[#d7b89a]">
                  The rest can wait.
                </span>
              </p>

              <p className="mt-7 max-w-[430px] text-sm leading-7 text-[#f4eee4]/70 sm:text-base">
                Small-batch body, bath and skincare products
                made in Queensland for real life.
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
                className="mt-6 max-w-[260px] text-xl italic leading-relaxed text-[#f4eee4]/75"
                style={serifFont}
              >
                Built for the work.
                <br />
                Made for the recovery.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-7 text-xs text-[#f4eee4]/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Wild Soul. Made in
              Queensland, Australia.
            </p>

            <p>Take five. The rest can wait.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

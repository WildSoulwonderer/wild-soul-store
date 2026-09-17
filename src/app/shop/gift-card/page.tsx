import type { Metadata } from "next";
import Link from "next/link";

const SQUARE_GIFT_CARD_URL = "https://app.squareup.com/gift/ML91R8YXQRJY1/order";

const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

export const metadata: Metadata = {
  title: "Wild Soul Gift Card",
  description: "Give them a little Wild Soul and let them choose their own favourites.",
};

export default function GiftCardPage() {
  return (
    <main className="min-h-screen bg-[#f4eee4] text-[#243f35]">
      <header className="border-b border-[#243f35]/10">
        <div className="mx-auto flex h-[92px] max-w-[1450px] items-center justify-between px-7 sm:px-12 lg:px-20">
          <Link href="/" className="text-[1.7rem] font-medium tracking-[0.28em] sm:text-[2rem]">
            WILD SOUL
          </Link>
          <Link href="/shop" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#704a35]">
            Back to shop
          </Link>
        </div>
      </header>

      <section className="px-7 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex aspect-[8/5] items-center justify-center border border-[#243f35]/10 bg-[#eee6d9] p-10 text-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a6545]">Wild Soul eGift Card</p>
              <p className="mt-8 text-[clamp(2.8rem,5vw,5.2rem)] italic leading-[0.95] text-[#704a35]" style={serifFont}>
                Stay A Little Wild
              </p>
              <p className="mt-7 text-xs uppercase tracking-[0.24em] text-[#243f35]/70">
                Handmade • Natural • Wild • Intentional
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a6545]">A little something just for them</p>
            <h1 className="mt-5 text-[clamp(4rem,7vw,7rem)] font-normal leading-[0.88] tracking-[-0.045em]" style={serifFont}>
              Wild Soul<br /><span className="italic text-[#704a35]">Gift Card.</span>
            </h1>
            <p className="mt-8 max-w-[620px] text-xl leading-9 text-[#5f574f]">
              Let them choose their own Wild Soul favourites — from handcrafted skincare and body care to jewellery and gifts. Choose the design, value and recipient through our secure Square gift card page.
            </p>

            <a
              href={SQUARE_GIFT_CARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex min-h-14 w-full items-center justify-center bg-[#243f35] px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#f4eee4] transition-opacity hover:opacity-90 sm:w-auto"
            >
              Buy a Gift Card
            </a>

            <p className="mt-5 text-sm leading-6 text-[#5f574f]/75">
              eGift cards are issued and delivered by Square. Choose your amount and delivery details on the next page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

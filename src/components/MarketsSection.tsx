import Image from "next/image";
import { getStoreMarkets } from "@/lib/store-markets";

const serifFont = {
  fontFamily: "var(--font-wild-serif), Georgia, 'Times New Roman', serif",
};

function formatMarketDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export default async function MarketsSection() {
  const markets = await getStoreMarkets();

  return (
    <section id="markets" className="bg-[#e8e1d5]">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[520px] lg:min-h-[760px]">
          <Image
            src="/images/wild-soul-market.jpg"
            alt="Wild Soul market stall with handmade skincare, recovery products and jewellery"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center px-8 py-20 sm:px-14 sm:py-24 lg:px-20">
          <div className="max-w-[560px]">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--wild-earth)]">
              Find Wild Soul Out in the Wild
            </p>

            <h2
              className="text-[clamp(3.5rem,5vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.035em] text-[var(--wild-forest)]"
              style={serifFont}
            >
              Come find us
              <br />
              in person.
            </h2>

            <p
              className="mt-8 text-[1.7rem] font-normal italic leading-[1.35] text-[#704a35]"
              style={serifFont}
            >
              Some things are just easier when you can pick them up, smell
              them and try them for yourself.
            </p>

            <div className="mt-8 space-y-5 text-base leading-8 text-[var(--wild-soft)] sm:text-lg">
              <p>
                Wild Soul gets packed into the car and taken on the road too.
                Markets are your chance to have a proper look around, ask
                questions and find what actually suits you.
              </p>

              <p>
                Come say hello. Smell everything. Try the testers. You
                don&apos;t have to know what you&apos;re looking for.
              </p>
            </div>

            <div className="mt-12 border-t border-[var(--wild-earth)]/30 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--wild-earth)]">
                Upcoming Events
              </p>

              {markets.length > 0 ? (
                <div className="mt-6 space-y-8">
                  {markets.map((market) => (
                    <article
                      key={market.id}
                      className="border-b border-[var(--wild-earth)]/20 pb-7 last:border-b-0 last:pb-0"
                    >
                      <p
                        className="text-3xl font-normal text-[var(--wild-forest)]"
                        style={serifFont}
                      >
                        {market.market_name}
                      </p>

                      <p className="mt-2 text-base font-medium text-[var(--wild-charcoal)]">
                        {formatMarketDate(market.market_date)}
                      </p>

                      {market.location ? (
                        <p className="mt-1 text-base leading-7 text-[var(--wild-soft)]">
                          {market.location}
                        </p>
                      ) : null}
                    </article>
                  ))}
                </div>
              ) : (
                <p className="mt-6 text-base leading-7 text-[var(--wild-soft)]">
                  No market dates are locked in just yet. Check back soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

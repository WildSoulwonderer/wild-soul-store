import Image from "next/image";
import Link from "next/link";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function OurStoryPage() {
  return (
    <main className="bg-[#f4eee4] text-[#243f35]">
      {/* HEADER */}
      <header className="border-b border-[#243f35]/10 bg-[#f4eee4]">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-7 sm:px-14 lg:px-20">
          <Link
            href="/"
            className="text-base font-semibold uppercase tracking-[0.3em] text-[#243f35] transition-opacity hover:opacity-70 sm:text-lg"
          >
            Wild Soul
          </Link>

          <nav className="hidden items-center gap-10 text-base font-medium text-[#243f35] md:flex">
            <Link
              href="/#shop"
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

            <span className="h-6 w-px bg-[#243f35]/20" />

            <span>Bag (0)</span>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="px-8 pb-24 pt-20 sm:px-14 sm:pb-28 sm:pt-24 lg:px-20 lg:pb-36 lg:pt-28">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9a6545]">
            Our Story
          </p>

          <h1
            className={`${fraunces.className} mt-7 max-w-[1200px] text-[clamp(3.7rem,6.5vw,7.25rem)] font-normal leading-[0.88] tracking-[-0.045em]`}
          >
            Before Wild Soul,
            <br />
            <span className="ml-[0.55em] italic text-[#704a35]">
              there was just me.
            </span>
          </h1>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <p
              className={`${fraunces.className} max-w-[470px] text-[1.8rem] italic leading-[1.35] text-[#704a35] sm:text-[2.1rem]`}
            >
              Long before there were jars, labels and market stalls, there
              were muddy boots, dirt bikes, horses, cattle and sheep.
            </p>

            <div className="max-w-[700px] space-y-6 text-lg leading-9 text-[#5f625d] sm:text-xl">
              <p>
                I spent years working on the land — long days, hard work,
                unpredictable animals and usually more dirt on me than
                anywhere else.
              </p>

              <p>
                I was a jillaroo, and later managed and oversaw properties. I
                worked cattle from horseback, handled sheep, rode bikes through
                paddocks and learned pretty quickly that plans rarely survive
                contact with livestock.
              </p>

              <p>
                It wasn&apos;t glamorous. It was often bloody exhausting.
              </p>

              <p className="font-semibold text-[#243f35]">
                And I loved it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FARM LIFE */}
      <section className="px-8 pb-24 sm:px-14 sm:pb-28 lg:px-20 lg:pb-36">
        <div className="mx-auto max-w-[1400px] space-y-5">
          {/* ROW ONE */}
          <div className="grid items-start gap-5 md:grid-cols-2">
            <div className="overflow-hidden bg-[#eadfd1]">
              <Image
                src="/images/Jax_Young_Farm_Life_Dirtbike.jpg"
                alt="Jax during her early farm life beside a dirt bike"
                width={1400}
                height={1050}
                className="h-auto w-full"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>

            <div className="overflow-hidden bg-[#eadfd1]">
              <Image
                src="/images/Jax_Cattle_Mustering_Horseback.jpg"
                alt="Jax mustering cattle on horseback"
                width={1400}
                height={1050}
                className="h-auto w-full"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* ROW TWO */}
          <div className="grid items-start gap-5 md:grid-cols-3">
            <div className="overflow-hidden bg-[#eadfd1]">
              <Image
                src="/images/Jax_Sheep_Work.jpg"
                alt="Jax working with sheep"
                width={1000}
                height={1400}
                className="h-auto w-full"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>

            <div className="overflow-hidden bg-[#eadfd1]">
              <Image
                src="/images/Jax_Cattle_Life_Cow_Cuddle.jpg"
                alt="Jax with cattle in the yards"
                width={1000}
                height={1400}
                className="h-auto w-full"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>

            <div className="overflow-hidden bg-[#eadfd1]">
              <Image
                src="/images/Jax_Horse_Paddock_Life.jpg"
                alt="Jax lying across a horse in the paddock"
                width={1400}
                height={1050}
                className="h-auto w-full"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>

          {/* SHEEP / QUAD */}
          <div className="mx-auto max-w-[850px] overflow-hidden bg-[#eadfd1]">
            <Image
              src="/images/Jax_Sheep_Mustering_Quad.jpg"
              alt="Jax with sheep while working from the quad"
              width={1400}
              height={900}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 850px, 100vw"
            />
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[800px] text-center">
          <p
            className={`${fraunces.className} text-[2rem] italic leading-[1.3] text-[#704a35] sm:text-[2.5rem]`}
          >
            I didn&apos;t know it then, but a lot of what would eventually
            become Wild Soul started there.
          </p>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.26em] text-[#9a6545]">
            Not the products. The feeling.
          </p>
        </div>
      </section>

      {/* LIFE GOT BIGGER */}
      <section className="bg-[#243f35] px-8 py-24 text-[#f4eee4] sm:px-14 sm:py-28 lg:px-20 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d3aa84]">
            Then life got bigger
          </p>

          <div className="mt-8 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <h2
                className={`${fraunces.className} text-[clamp(3.8rem,6vw,6.8rem)] font-normal leading-[0.9] tracking-[-0.04em]`}
              >
                Different jobs.
                <br />
                <span className="italic text-[#d7b89a]">
                  Different versions of me.
                </span>
              </h2>

              {/* LIFE IMAGES */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="flex min-h-[330px] items-center justify-center overflow-hidden bg-[#1d342c]">
                  <Image
                    src="/images/Jax_Civil_Construction_Work.jpg"
                    alt="Jax working in civil construction"
                    width={900}
                    height={1200}
                    className="h-auto max-h-[430px] w-full object-contain"
                  />
                </div>

                <div className="flex min-h-[330px] items-center justify-center overflow-hidden bg-[#1d342c]">
                  <Image
                    src="/images/Jax_Pregnancy_Arlan.jpg"
                    alt="Jax pregnant with Arlan"
                    width={900}
                    height={1200}
                    className="h-auto max-h-[430px] w-full object-contain"
                  />
                </div>

                <div className="flex min-h-[300px] items-center justify-center overflow-hidden bg-[#1d342c]">
                  <Image
                    src="/images/Jax_and_Baby_Arlan.jpg"
                    alt="Jax with baby Arlan"
                    width={900}
                    height={1200}
                    className="h-auto max-h-[400px] w-full object-contain"
                  />
                </div>

                <div className="flex min-h-[300px] items-center justify-center overflow-hidden bg-[#1d342c]">
                  <Image
                    src="/images/Jax_and_Jimmy_Engagement.jpg"
                    alt="Jax and Jimmy after their engagement"
                    width={1200}
                    height={900}
                    className="h-auto max-h-[400px] w-full object-contain"
                  />
                </div>
              </div>

              {/* WEDDING */}
              <div className="mt-8 overflow-hidden bg-[#1d342c]">
                <Image
                  src="/images/Jax_Wedding_With_Kids.jpg"
                  alt="Jax on her wedding day with her children"
                  width={1600}
                  height={1000}
                  className="h-auto w-full object-contain"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
            </div>

            <div className="max-w-[700px] space-y-6 self-center text-lg leading-9 text-[#f4eee4]/80 sm:text-xl">
              <p>
                There were different jobs, different homes and more than a few
                different versions of me.
              </p>

              <p>
                There was marriage, motherhood, divorce, rebuilding, falling
                in love again, another marriage and — many years after I
                thought the baby chapter of my life was firmly closed —
                another beautiful little boy.
              </p>

              <p>
                I moved from agriculture into civil construction and
                operations. Life changed direction more than once. Some of it
                was planned. Plenty of it wasn&apos;t.
              </p>

              <p>
                There were good years, hard years, fresh starts and the kind
                of chapters you don&apos;t realise are changing you until you
                look back at them later.
              </p>

              <p>
                And somewhere along the way, I became very good at keeping
                things running.
              </p>

              <p>
                Work needed something? Sorted.
                <br />
                Kids needed something? Sorted.
                <br />
                House needed something? Sorted.
              </p>

              <p>
                And somewhere amongst all of that, I became very good at
                putting myself somewhere near the bottom of the list.
              </p>

              <p
                className={`${fraunces.className} pt-2 text-[2rem] italic text-[#d7b89a]`}
              >
                It just happens quietly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WILD SOUL ORIGIN */}
      <section className="px-8 py-24 sm:px-14 sm:py-28 lg:px-20 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9a6545]">
              The beginning
            </p>

            <h2
              className={`${fraunces.className} mt-7 text-[clamp(3.6rem,6vw,6rem)] font-normal leading-[0.92] tracking-[-0.04em]`}
            >
              Wild Soul didn&apos;t begin
              <br />
              <span className="italic text-[#704a35]">
                with a business plan.
              </span>
            </h2>
          </div>

          <div className="max-w-[700px] space-y-6 self-end text-lg leading-9 text-[#5f625d] sm:text-xl">
            <p>
              There wasn&apos;t some grand moment where I decided I was going
              to create a brand.
            </p>

            <p>
              It started much smaller than that. Making things. Experimenting.
              Learning. Finding ingredients I loved. Changing recipes. Making
              another batch because the first one wasn&apos;t quite right.
            </p>

            <p>
              And occasionally making something that went spectacularly wrong.
            </p>

            <p>Slowly, something started taking shape.</p>

            <p>
              I wanted to make products that could turn an ordinary moment
              into a little bit of time that belonged to you.
            </p>

            <p>
              A scrub in the shower. A soak after a long week. Oil at the end
              of the day. A balm rubbed into tired hands, feet and bodies that
              have worked bloody hard.
            </p>

            <p className="font-semibold text-[#243f35]">
              Sometimes you just need five bloody minutes.
            </p>
          </div>
        </div>
      </section>

      {/* TAKE THE FIVE */}
      <section className="bg-[#704a35] px-8 py-24 text-[#f4eee4] sm:px-14 sm:py-28 lg:px-20 lg:py-36">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ead2bd]">
            Don&apos;t wait for tomorrow
          </p>

          <h2
            className={`${fraunces.className} mt-8 text-[clamp(4rem,7.5vw,8rem)] font-normal leading-[0.88] tracking-[-0.045em]`}
          >
            Take the
            <br />
            <span className="italic text-[#f0d8c3]">
              five minutes.
            </span>
          </h2>

          <div className="mx-auto mt-12 max-w-[820px] space-y-6 text-lg leading-9 text-[#f4eee4]/85 sm:text-xl">
            <p>
              For years, I was going to do things tomorrow. Sit down tomorrow.
              Read that book tomorrow. Take some time for myself tomorrow.
            </p>

            <p
              className={`${fraunces.className} text-[2rem] italic leading-[1.35] text-white sm:text-[2.4rem]`}
            >
              But tomorrow is always tomorrow. And eventually you realise
              tomorrow never bloody comes.
            </p>

            <p>So take the five minutes today.</p>

            <p>
              Hide in the bathroom with a scrub if that&apos;s the only place
              you can get some peace. Take the long shower. Use the good stuff
              instead of saving it. Keep the recovery balm in the ute, the car,
              your work bag or the caravan.
            </p>

            <p>
              And this isn&apos;t just for mums. It&apos;s for mums and dads.
              Tradies and office workers. Travellers and homebodies. Carers and
              shift workers. People working on the land. People raising
              families and people who never wanted one.
            </p>

            <p className="font-semibold text-white">
              You don&apos;t need to reach breaking point first.
            </p>

            <p className="font-semibold text-white">
              You don&apos;t need to earn it.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WILD SOUL BECAME */}
      <section className="px-8 py-24 sm:px-14 sm:py-28 lg:px-20 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9a6545]">
            That became Wild Soul
          </p>

          <div className="mt-8 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <h2
              className={`${fraunces.className} text-[clamp(3.8rem,6vw,6.5rem)] font-normal leading-[0.92] tracking-[-0.04em]`}
            >
              Rugged.
              <br />
              Weathered.
              <br />
              <span className="italic text-[#704a35]">
                A little wild.
              </span>
            </h2>

            <div className="space-y-6 text-lg leading-9 text-[#5f625d] sm:text-xl">
              <p>
                Wild Soul draws inspiration from two landscapes that feel
                deeply familiar to me — the rugged, misty Highlands of
                Scotland and the wild, sun-warmed Australian bush.
              </p>

              <p>
                Two very different places, but both beautiful without trying
                too hard.
              </p>

              <p>
                That became the heart of what I wanted Wild Soul to be.
              </p>

              <p>
                Small-batch body care, made by hand and created to actually be
                used.
              </p>

              <p>
                Not lined up perfectly on a bathroom shelf. Not saved for a
                special occasion. Not waiting for the magical day when the
                washing is done, work is quiet, nobody needs anything and
                you&apos;ve somehow got three uninterrupted hours to yourself.
              </p>

              <p className="font-semibold text-[#243f35]">
                Because apparently that day is never bloody coming.
              </p>

              <p>
                Use it. Get your fingers in it. Throw the balm in the ute. Take
                the soak away in the caravan. Leave the scrub in the shower.
                Let the jar get messy.
              </p>

              <p className="font-semibold text-[#243f35]">
                That&apos;s what it&apos;s there for.
              </p>

              <p className="pt-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#9a6545]">
                Built for the work. Made for the recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THERE SHE BLOODY IS */}
      <section className="bg-[#243f35] px-8 py-24 text-[#f4eee4] sm:px-14 sm:py-28 lg:px-20 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-5 md:grid-cols-2">
            <div className="flex min-h-[420px] items-center justify-center overflow-hidden bg-[#1d342c]">
              <Image
                src="/images/Jax_Station_Life_Dirtbike.jpg"
                alt="Jax during her early farm years on a dirt bike"
                width={1400}
                height={1000}
                className="h-auto max-h-[620px] w-full object-contain"
              />
            </div>

            <div className="flex min-h-[420px] items-center justify-center overflow-hidden bg-[#1d342c]">
              <Image
                src="/images/Jax_Wild_Soul_Highland_Games.jpg"
                alt="Jax with Wild Soul today"
                width={1200}
                height={1600}
                className="h-auto max-h-[620px] w-full object-contain"
              />
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-[950px] text-center">
            <p className="text-lg leading-9 text-[#f4eee4]/80 sm:text-xl">
              These days there might be a laptop where the dirt bike used to
              be, and I&apos;m just as likely to be making a batch of balm as
              working cattle.
            </p>

            <p
              className={`${fraunces.className} mt-8 text-[clamp(3rem,5vw,5.5rem)] italic leading-[1] text-[#d7b89a]`}
            >
              But give me a paddock, an animal to cuddle, a garden to disappear
              into or something I can make with my hands and...
            </p>

            <p
              className={`${fraunces.className} mt-6 text-[clamp(3.2rem,5vw,5.8rem)] leading-none text-white`}
            >
              there she bloody is.
            </p>
          </div>
        </div>
      </section>

      {/* 40 YEARS */}
      <section className="px-8 py-24 sm:px-14 sm:py-28 lg:px-20 lg:py-36">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9a6545]">
            Still learning
          </p>

          <h2
            className={`${fraunces.className} mt-7 text-[clamp(4rem,7vw,7.2rem)] font-normal leading-[0.88] tracking-[-0.045em]`}
          >
            It took me
            <br />
            <span className="italic text-[#704a35]">
              40 bloody years.
            </span>
          </h2>

          <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-20">
            <div className="space-y-6 text-lg leading-9 text-[#5f625d] sm:text-xl">
              <p>
                Forty years to understand that I don&apos;t need to become one
                final, polished version of myself.
              </p>

              <p>
                And I&apos;m still learning. Still changing. Still getting
                things wrong. Still figuring out what I want the next chapter
                to look like.
              </p>

              <p>
                There are parts of the girl I used to be that I want back.
                There are parts I&apos;m quite happy to leave behind. And there
                are parts of the woman I&apos;m becoming that I haven&apos;t
                even met yet.
              </p>

              <p className="font-semibold text-[#243f35]">
                Wild Soul wasn&apos;t born because I finally had everything
                figured out.
              </p>

              <p
                className={`${fraunces.className} text-[2rem] italic leading-[1.35] text-[#704a35] sm:text-[2.4rem]`}
              >
                It was born when I realised I didn&apos;t have to.
              </p>

              <p>
                Maybe that&apos;s what being a wild soul really means.
              </p>

              <p>
                Not having it all together. Not becoming some perfect version
                of yourself.
              </p>

              <p>
                Just remembering that underneath all the roles,
                responsibilities, work, noise and expectations...
              </p>

              <p className="font-semibold text-[#243f35]">
                you&apos;re still in there too.
              </p>
            </div>

            <div className="overflow-hidden bg-[#eadfd1]">
              <Image
                src="/images/Jax_and_Arlan.jpg"
                alt="Jax and Arlan together"
                width={1000}
                height={1400}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-[#243f35]/10 px-8 py-24 text-center sm:px-14 sm:py-28 lg:px-20 lg:py-36">
        <div className="mx-auto max-w-[900px]">
          <p
            className={`${fraunces.className} text-[clamp(4rem,7vw,7rem)] font-normal leading-[0.9] tracking-[-0.045em]`}
          >
            Take the five minutes.
            <br />
            <span className="italic text-[#704a35]">
              Be kind to yourself.
            </span>
          </p>

          <p className="mx-auto mt-8 max-w-[625px] text-lg leading-9 text-[#5f625d] sm:text-xl">
            If something I&apos;ve made gives you even those five minutes —
            if you stop, breathe and remember yourself for a moment — then
            this little wild thing I&apos;ve built is doing exactly what it
            was meant to do.
          </p>

          <p
            className={`${fraunces.className} mt-10 text-[2.4rem] italic text-[#704a35]`}
          >
            There&apos;s still a wild soul in there.
          </p>

          <p className="mt-8 text-base leading-7 text-[#5f625d]">
            — Jax
            <br />
            Founder &amp; Maker, Wild Soul
          </p>

          <Link
            href="/#shop"
            className="mt-12 inline-flex bg-[#243f35] px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-80"
          >
            Shop Wild Soul
          </Link>
        </div>
      </section>
    </main>
  );
}
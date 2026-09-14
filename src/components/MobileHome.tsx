"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useBag } from "@/context/BagContext";

const categories = [
  ["Body", "/images/Wild_Renewal_Packaging.jpg", "/shop#body", "Scrubs, butters and everyday body care."],
  ["Bath", "/images/Desert_Calm_Packaging.jpg", "/shop#bath", "Soaks and simple escapes for tired bodies."],
  ["Recovery", "/images/Highland_Recovery_Packaging.jpg", "/shop#recovery", "Balms and recovery care for bodies that have done the work."],
  ["Skin Oils", "/images/Golden_Grove_Packaging.jpg", "/shop#skin-oils", "Botanical oils for face, body and beards."],
] as const;

export default function MobileHome() {
  const pathname = usePathname();
  const { itemCount } = useBag();
  const active = pathname === "/";

  useEffect(() => {
    document.body.classList.toggle("wild-mobile-home", active);
    return () => document.body.classList.remove("wild-mobile-home");
  }, [active]);

  if (!active) return null;

  return (
    <div id="wild-mobile-home" className="hidden bg-[#f4f0e8] text-[#252820]">
      <header className="flex h-[72px] items-center justify-between border-b border-[#263b32]/10 px-5">
        <Link href="/" className="text-lg font-semibold tracking-[0.2em] text-[#263b32]">WILD SOUL</Link>
        <div className="flex items-center gap-5 text-sm font-semibold text-[#263b32]">
          <Link href="/shop">Shop</Link>
          <Link href="/bag">Bag ({itemCount})</Link>
        </div>
      </header>

      <section className="relative min-h-[560px] overflow-hidden bg-gradient-to-br from-[#eadbc5] via-[#d9c8ad] to-[#91a08f]">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#f4f0e8]/35 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#704a35]/15 blur-3xl" />
        <div className="relative z-10 flex min-h-[560px] flex-col justify-center px-7 py-12">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#684532]">Made in Australia</p>
          <h1 className="wild-serif text-[4.8rem] font-medium leading-[0.72] tracking-[-0.05em] text-[#263b32]">
            <span className="block">Wild</span><span className="ml-14 block italic font-normal text-[#704a35]">Soul.</span>
          </h1>
          <p className="wild-serif mt-10 text-[1.65rem] italic leading-tight text-[#263b32]">Built for the work.<br/>Made for the recovery.</p>
          <p className="wild-serif mt-5 text-[1.3rem] italic leading-snug text-[#4b3528]">For the five minutes you didn&apos;t know you needed.</p>
          <Link href="/shop" className="mt-8 inline-flex min-h-12 w-fit items-center bg-[#263b32] px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white">Shop Wild Soul</Link>
        </div>
      </section>

      <section className="px-5 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a684e]">Wild Soul</p>
        <h2 className="wild-serif mt-4 text-[3rem] leading-[0.95] text-[#263b32]">Made for real life.</h2>
        <p className="wild-serif mt-5 text-[1.5rem] italic leading-snug text-[#6f5a4a]">Small moments of care, wherever you find them.</p>
        <div className="mt-10 space-y-12">
          {categories.map(([name, image, href, description]) => (
            <Link key={name} href={href} className="block">
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#ded5c7]">
                <img src={image} alt={`Wild Soul ${name}`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </div>
              <h3 className="wild-serif mt-5 text-3xl text-[#263b32]">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#7b796f]">{description}</p>
              <span className="mt-4 inline-block border-b border-[#9a684e] pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#9a684e]">Explore {name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#263b32] px-6 py-16 text-[#f4f0e8]">
        <h2 className="wild-serif text-[2.8rem] leading-tight">Not another thing<br/>for your to-do list.</h2>
        <p className="mt-7 text-base leading-7 text-[#f4f0e8]/80">Wild Soul came from real life — busy days, tired bodies and the few quiet minutes you manage to steal.</p>
        <p className="wild-serif mt-8 text-2xl italic text-[#d5a27d]">Take five. The rest can wait.</p>
      </section>

      <section className="px-6 py-14 text-center">
        <h2 className="wild-serif text-3xl text-[#263b32]">Come find us out in the wild.</h2>
        <p className="mt-4 text-sm leading-6 text-[#7b796f]">Markets, new releases and everything currently taking shape are waiting in the full shop.</p>
        <Link href="/shop" className="mt-7 inline-flex min-h-12 items-center bg-[#263b32] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-white">Visit the shop</Link>
      </section>
    </div>
  );
}

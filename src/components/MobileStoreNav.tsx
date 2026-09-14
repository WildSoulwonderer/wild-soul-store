"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useBag } from "@/context/BagContext";

export default function MobileStoreNav() {
  const pathname = usePathname();
  const { itemCount } = useBag();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>('button[aria-label="Open menu"]')
    );

    const handleOpen = () => setOpen(true);
    buttons.forEach((button) => button.addEventListener("click", handleOpen));

    return () => {
      buttons.forEach((button) => button.removeEventListener("click", handleOpen));
    };
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] md:hidden" role="dialog" aria-modal="true" aria-label="Wild Soul navigation">
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-[#192a23]/55"
        onClick={() => setOpen(false)}
      />

      <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-[#f4f0e8] px-7 pb-8 pt-7 shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#263b32]/15 pb-6">
          <Link href="/" onClick={() => setOpen(false)} className="text-xl font-semibold tracking-[0.22em] text-[#263b32]">
            WILD SOUL
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#263b32]/20 text-3xl leading-none text-[#263b32]"
          >
            ×
          </button>
        </div>

        <nav className="wild-serif mt-8 flex flex-col text-[2rem] leading-tight text-[#263b32]">
          <Link href="/shop" onClick={() => setOpen(false)} className="border-b border-[#263b32]/12 py-5">
            Shop
          </Link>
          <Link href="/our-story" onClick={() => setOpen(false)} className="border-b border-[#263b32]/12 py-5">
            Our Story
          </Link>
          <Link href="/#markets" onClick={() => setOpen(false)} className="border-b border-[#263b32]/12 py-5">
            Markets
          </Link>
          <Link href="/bag" onClick={() => setOpen(false)} className="border-b border-[#263b32]/12 py-5">
            Bag ({itemCount})
          </Link>
        </nav>

        <div className="mt-auto border-t border-[#263b32]/15 pt-6 text-sm leading-6 text-[#7b796f]">
          Built for the work. Made for the recovery.
        </div>
      </div>
    </div>
  );
}

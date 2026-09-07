import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStoreProduct } from "@/lib/store-products";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getStoreProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.short_description || product.description || undefined,
  };
}

export default async function StoreProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getStoreProduct(slug);
  if (!product) notFound();

  const inStock = (product.current_stock ?? 0) > 0;

  return (
    <main className="min-h-screen bg-[#f4eee4] text-[#243f35]">
      <header className="border-b border-[#243f35]/10 px-7 sm:px-12 lg:px-20">
        <div className="mx-auto flex h-[92px] max-w-[1450px] items-center justify-between">
          <Link href="/" className="text-[1.7rem] font-medium tracking-[0.28em]">
            WILD SOUL
          </Link>
          <Link href="/shop" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#704a35]">
            Back to shop
          </Link>
        </div>
      </header>

      <section className="px-7 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#ded5c7]">
            {product.photo_url ? (
              <img src={product.photo_url} alt={product.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center text-[#704a35]">Product photo coming soon</div>
            )}
          </div>

          <div className="max-w-[620px]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a6545]">
              {product.category || "Wild Soul"}
            </p>
            <h1 className="wild-serif mt-6 text-[clamp(4.2rem,7vw,7.5rem)] font-normal leading-[0.86] tracking-[-0.05em]">
              {product.name}
            </h1>
            <p className="mt-8 text-2xl font-medium">${Number(product.retail_price ?? 0).toFixed(2)}</p>
            <p className="mt-8 whitespace-pre-line text-xl leading-9 text-[#5f574f]">
              {product.description || product.short_description}
            </p>
            <button
              type="button"
              disabled={!inStock}
              className="mt-10 inline-flex min-h-14 w-full items-center justify-center bg-[#243f35] px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white disabled:cursor-not-allowed disabled:bg-[#8d938f] sm:w-auto"
            >
              {inStock ? "Add to Bag" : "Sold Out"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

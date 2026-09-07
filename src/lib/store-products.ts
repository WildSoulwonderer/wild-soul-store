import { createClient } from "@supabase/supabase-js";

export type StoreProduct = {
  id: string;
  name: string;
  store_slug: string;
  category: string | null;
  description: string | null;
  short_description: string | null;
  retail_price: number | null;
  current_stock: number | null;
  photo_url: string | null;
};

export async function getStoreProducts(): Promise<StoreProduct[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) return [];

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data, error } = await supabase
    .from("products")
    .select(
      "id,name,store_slug,category,description,short_description,retail_price,current_stock,photo_url",
    )
    .eq("show_online", true)
    .eq("is_active", true)
    .not("store_slug", "is", null)
    .order("name");

  if (error) {
    console.error("Unable to load store products:", error.message);
    return [];
  }

  return (data ?? []) as StoreProduct[];
}

export async function getStoreProduct(slug: string) {
  const products = await getStoreProducts();
  return products.find((product) => product.store_slug === slug) ?? null;
}

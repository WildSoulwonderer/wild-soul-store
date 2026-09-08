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

  const response = await fetch(`${url}/rest/v1/rpc/get_store_products`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ p_slug: null }),
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("Unable to load store products:", response.statusText);
    return [];
  }

  return (await response.json()) as StoreProduct[];
}

export async function getStoreProduct(slug: string) {
  const products = await getStoreProducts();
  return products.find((product) => product.store_slug === slug) ?? null;
}

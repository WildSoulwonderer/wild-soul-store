export type StoreMarket = {
  id: string;
  market_name: string;
  location: string | null;
  market_date: string;
  status: string | null;
};

export async function getStoreMarkets(): Promise<StoreMarket[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.error("Store markets unavailable: Supabase environment variables are missing.");
    return [];
  }

  const response = await fetch(`${url}/rest/v1/rpc/get_store_markets`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
    cache: "no-store",
  });

  if (!response.ok) {
    console.error(
      "Unable to load store markets:",
      response.status,
      response.statusText,
    );
    return [];
  }

  return (await response.json()) as StoreMarket[];
}

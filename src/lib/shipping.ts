export const PARCEL_POST_RATES = [
  { maxWeightGrams: 250, amountCents: 1020 },
  { maxWeightGrams: 500, amountCents: 1170 },
  { maxWeightGrams: 1000, amountCents: 1600 },
  { maxWeightGrams: 3000, amountCents: 2025 },
  { maxWeightGrams: 5000, amountCents: 2445 },
] as const;

export function getParcelPostShippingCents(totalWeightGrams: number) {
  if (!Number.isFinite(totalWeightGrams) || totalWeightGrams <= 0) {
    throw new Error("Invalid shipping weight.");
  }

  const rate = PARCEL_POST_RATES.find(
    ({ maxWeightGrams }) => totalWeightGrams <= maxWeightGrams
  );

  if (!rate) {
    throw new Error("Orders over 5 kg require a manual shipping quote.");
  }

  return rate.amountCents;
}

export const products = {
  "wild-renewal": {
    id: "wild-renewal",
    name: "Wild Renewal Sugar Scrub",
    price: 24.95,
  },

  "sunlit-bloom": {
    id: "sunlit-bloom",
    name: "Sunlit Bloom Sugar Scrub",
    price: 24.95,
  },

  "desert-calm": {
    id: "desert-calm",
    name: "Desert Calm Salt Scrub",
    price: 29.95,
  },

  "ocean-drift": {
    id: "ocean-drift",
    name: "Ocean Drift Salt Scrub",
    price: 29.95,
  },

  "first-light": {
    id: "first-light",
    name: "First Light Buff Bar",
    price: 12.95,
  },

  "highland-mist": {
    id: "highland-mist",
    name: "Highland Mist Buff Bar",
    price: 15.95,
  },

  "highland-recovery": {
    id: "highland-recovery",
    name: "Highland Recovery Bath Soak",
    price: 18.95,
  },

  "petal-plum": {
    id: "petal-plum",
    name: "Petal & Plum Bath Soak",
    price: 18.95,
  },

  ironwood: {
    id: "ironwood",
    name: "Ironwood Face & Beard Oil",
    price: 16.95,
  },

  "red-dust": {
    id: "red-dust",
    name: "Red Dust Face & Beard Oil",
    price: 16.95,
  },

  "golden-grove": {
    id: "golden-grove",
    name: "Golden Grove Face & Beard Oil",
    price: 16.95,
  },

  "bush-relief": {
    id: "bush-relief",
    name: "Bush Relief Recovery Balm",
    price: 24.95,
  },

  "misty-glen": {
    id: "misty-glen",
    name: "Misty Glen Recovery Balm",
    price: 24.95,
  },
} as const;

export type ProductId = keyof typeof products;
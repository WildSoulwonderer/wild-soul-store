"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type BagItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type BagContextType = {
  items: BagItem[];
  itemCount: number;
  addItem: (item: Omit<BagItem, "quantity">) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearBag: () => void;
};

const BagContext = createContext<BagContextType | undefined>(undefined);

export function BagProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BagItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedBag = window.localStorage.getItem("wild-soul-bag");

      if (savedBag) {
        setItems(JSON.parse(savedBag));
      }
    } catch {
      // If stored bag data is invalid, start with an empty bag.
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    window.localStorage.setItem("wild-soul-bag", JSON.stringify(items));
  }, [items, loaded]);

  function addItem(item: Omit<BagItem, "quantity">) {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (currentItem) => currentItem.id === item.id
      );

      if (existingItem) {
        return currentItems.map((currentItem) =>
          currentItem.id === item.id
            ? { ...currentItem, quantity: currentItem.quantity + 1 }
            : currentItem
        );
      }

      return [...currentItems, { ...item, quantity: 1 }];
    });
  }

  function removeItem(id: string) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  function increaseQuantity(id: string) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id: string) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearBag() {
    setItems([]);
  }

  const itemCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <BagContext.Provider
      value={{
        items,
        itemCount,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearBag,
      }}
    >
      {children}
    </BagContext.Provider>
  );
}

export function useBag() {
  const context = useContext(BagContext);

  if (!context) {
    throw new Error("useBag must be used inside BagProvider");
  }

  return context;
}
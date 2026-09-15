export interface CartInventoryItem {
  id: string;
  name: string;
  eyebrow: string;
  image: string;
  capacity: string;
  range: string;
  price: string;
  specs: string[];
}

export const fallbackCarts: CartInventoryItem[];
export function getCartInventory(): Promise<{ data: CartInventoryItem[]; source: string }>;

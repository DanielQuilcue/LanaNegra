import { atom, computed } from 'nanostores';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  quantity: number;
}

function loadCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem('ln-cart');
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export const $cart     = atom<CartItem[]>(loadCart());
export const $cartOpen = atom(false);

export const $cartCount = computed($cart, items =>
  items.reduce((s, i) => s + i.quantity, 0)
);

export const $cartTotal = computed($cart, items =>
  items.reduce((s, i) => s + i.price * i.quantity, 0)
);

if (typeof window !== 'undefined') {
  $cart.subscribe(items => {
    localStorage.setItem('ln-cart', JSON.stringify(items));
  });
}

export function addToCart(item: Omit<CartItem, 'quantity'>) {
  const cur = $cart.get();
  const hit = cur.find(i => i.id === item.id);
  $cart.set(
    hit
      ? cur.map(i => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
      : [...cur, { ...item, quantity: 1 }]
  );
  $cartOpen.set(true);
}

export function removeFromCart(id: string) {
  $cart.set($cart.get().filter(i => i.id !== id));
}

export function updateQuantity(id: string, qty: number) {
  if (qty <= 0) { removeFromCart(id); return; }
  $cart.set($cart.get().map(i => (i.id === id ? { ...i, quantity: qty } : i)));
}

export function clearCart() {
  $cart.set([]);
}

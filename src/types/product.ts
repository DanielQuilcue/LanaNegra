export interface ProductDetail {
  size: string;
  composition: string;
  safety: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  currency?: string;
  image: string;
  thumbnails?: string[];
  badge?: 'new' | 'pre' | 'sale';
  badgeLabel?: string;
  category: string;
  description?: string;
  kicker?: string;
  details?: ProductDetail;
  whatsapp?: string;
}

export interface Step {
  icon: string;
  label: string;
  description: string;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

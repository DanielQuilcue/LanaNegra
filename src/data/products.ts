import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Osito Meloso',
    price: 85000,
    currency: 'COP',
    image: 'https://placehold.co/600x600/ffd8e6/824f66?text=🐻',
    thumbnails: [
      'https://placehold.co/120x120/ffd8e6/824f66?text=🐻',
      'https://placehold.co/120x120/bde9da/3d665a?text=🐻',
      'https://placehold.co/120x120/ccbfe4/635979?text=🐻',
    ],
    badge: 'new',
    badgeLabel: 'Nuevo',
    category: 'Amigurumis',
    kicker: 'Lo más tierno',
    description:
      'Un compañero eterno tejido con la suavidad de las nubes y el amor de las manos artesanales. Perfecto para abrazos infinitos.',
    details: {
      size: '20cm de ternura',
      composition: '100% Algodón',
      safety: 'Guía de seguridad certificados para niños',
    },
    whatsapp: '573001234567',
  },
  {
    id: '2',
    name: 'Jirafa Genial',
    price: 75000,
    currency: 'COP',
    image: 'https://placehold.co/600x600/bde9da/3d665a?text=🦒',
    thumbnails: [
      'https://placehold.co/120x120/bde9da/3d665a?text=🦒',
      'https://placehold.co/120x120/ffd8e6/824f66?text=🦒',
    ],
    category: 'Amigurumis',
    kicker: 'La más alta',
    description:
      'Una jirafa tejida con hilos de colores vibrantes y llena de personalidad. Perfecta para los exploradores más pequeños.',
    details: {
      size: '25cm de altura',
      composition: '100% Algodón',
      safety: 'Guía de seguridad certificados para niños',
    },
    whatsapp: '573001234567',
  },
  {
    id: '3',
    name: 'Set Huertas',
    price: 90000,
    currency: 'COP',
    image: 'https://placehold.co/600x600/ccbfe4/635979?text=🌿',
    thumbnails: [
      'https://placehold.co/120x120/ccbfe4/635979?text=🌿',
      'https://placehold.co/120x120/bde9da/3d665a?text=🌿',
    ],
    badge: 'pre',
    badgeLabel: 'Pre-order',
    category: 'Sets',
    kicker: 'Naturaleza en miniatura',
    description:
      'Un jardín de ternura en tus manos. Set de vegetales tejidos a mano, perfectos para el juego imaginativo.',
    details: {
      size: '8–12 cm por pieza',
      composition: '100% Algodón',
      safety: 'Guía de seguridad certificados para niños',
    },
    whatsapp: '573001234567',
  },
  {
    id: '4',
    name: 'Elefante Bambú',
    price: 70000,
    currency: 'COP',
    image: 'https://placehold.co/600x600/f7f3ea/504348?text=🐘',
    thumbnails: [
      'https://placehold.co/120x120/f7f3ea/504348?text=🐘',
      'https://placehold.co/120x120/ffd8e6/824f66?text=🐘',
    ],
    category: 'Amigurumis',
    kicker: 'Grande y tierno',
    description:
      'Un elefante tejido con hilo suave color bambú, símbolo de sabiduría y ternura. El compañero ideal para todos.',
    details: {
      size: '22cm de ternura',
      composition: '100% Algodón orgánico',
      safety: 'Guía de seguridad certificados para niños',
    },
    whatsapp: '573001234567',
  },
];

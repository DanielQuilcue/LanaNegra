import type { Product } from '../types/product';

export const products: Product[] = [
  // ── Animales ──────────────────────────────────────────
  {
    id: '1',
    name: 'León',
    price: 75000,
    currency: 'COP',
    image: '/images/animales/leon.2.png',
    thumbnails: [
      '/images/animales/leon.2.png',
      '/images/animales/leon.3.png',
    ],
    category: 'Animales',
    kicker: 'Rey de la selva',
    description:
      'Un león tejido a mano con su melena rizada llena de carácter. Ideal para los pequeños exploradores de la sabana.',
    whatsapp: '573228369024',
  },
  {
    id: '2',
    name: 'Colibrí',
    price: 75000,
    currency: 'COP',
    image: '/images/animales/colibri.png',
    category: 'Animales',
    kicker: 'Delicado y colorido',
    description:
      'Un colibrí en pleno vuelo, tejido con detalle en cada ala. Una pieza pequeña llena de color para acompañar cualquier rincón.',
    whatsapp: '573228369024',
  },

  // ── Navidad ───────────────────────────────────────────
  {
    id: '3',
    name: 'Señor Papá Noel',
    price: 75000,
    currency: 'COP',
    image: '/images/navidad/navidad.1.png',
    badge: 'new',
    badgeLabel: 'Navidad',
    category: 'Navidad',
    kicker: 'Espíritu navideño',
    description:
      'Un gnomo navideño con gorro rojo y barba blanca tejida, listo para decorar tu hogar en las fiestas.',
    whatsapp: '573228369024',
  },
  {
    id: '4',
    name: 'Señora Papá Noel',
    price: 75000,
    currency: 'COP',
    image: '/images/navidad/navidad.2.png',
    badge: 'new',
    badgeLabel: 'Navidad',
    category: 'Navidad',
    kicker: 'Espíritu navideño',
    description:
      'Gnomo navideño con trenzas y detalles dorados, tejido con mucho cariño para celebrar la temporada.',
    whatsapp: '573228369024',
  },
  {
    id: '5',
    name: 'Grinch',
    price: 75000,
    currency: 'COP',
    image: '/images/navidad/navidad.3.png',
    badge: 'new',
    badgeLabel: 'Navidad',
    category: 'Navidad',
    kicker: 'El favorito de la Navidad',
    description:
      'El personaje más gruñón de la Navidad, tejido a mano con su característica cara verde. Un infaltable en tu decoración navideña.',
    whatsapp: '573228369024',
  },

  // ── Caricatura ────────────────────────────────────────
  {
    id: '6',
    name: 'Jake',
    price: 75000,
    currency: 'COP',
    image: '/images/caricatura/perro.amarillo.1.png',
    category: 'Caricatura',
    kicker: 'Aventura de todos los días',
    description:
      'Inspirado en el entrañable perro amarillo de caricatura. Tejido a mano con todo su carisma.',
    whatsapp: '573228369024',
  },
  {
    id: '7',
    name: 'Bluey',
    price: 75000,
    currency: 'COP',
    image: '/images/caricatura/perro.azul.png',
    category: 'Caricatura',
    kicker: 'El favorito de los peques',
    description:
      'La perrita azul favorita de los más pequeños de la casa, tejida a mano con todos sus detalles.',
    whatsapp: '573228369024',
  },

  // ── Anime ─────────────────────────────────────────────
  {
    id: '8',
    name: 'Gato Luffy',
    price: 75000,
    currency: 'COP',
    image: '/images/anime/gato.luffy.png',
    category: 'Anime',
    kicker: 'Rumbo al One Piece',
    description:
      'Un tierno gatito con el sombrero de paja del capitán más famoso del anime. Perfecto para fans de la serie.',
    whatsapp: '573228369024',
  },

  // ── Superhéroes ───────────────────────────────────────
  {
    id: '9',
    name: 'Batman',
    price: 75000,
    currency: 'COP',
    image: '/images/superheroes/batman.png',
    category: 'Superhéroes',
    kicker: 'El caballero de la noche',
    description:
      'El superhéroe de Ciudad Gótica tejido a mano, con capa, antifaz y el símbolo del murciélago en el pecho.',
    whatsapp: '573228369024',
  },

  // ── Creaciones Propias ────────────────────────────────
  {
    id: '10',
    name: 'Capibara con Patito',
    price: 75000,
    currency: 'COP',
    image: '/images/CreacionesPropias/capibara.1.png',
    thumbnails: [
      '/images/CreacionesPropias/capibara.1.png',
      '/images/CreacionesPropias/capibara.2.png',
      '/images/CreacionesPropias/capibara.3.png',
    ],
    badge: 'new',
    badgeLabel: 'Diseño propio',
    category: 'Creaciones Propias',
    kicker: 'Diseño original LanaNegra',
    description:
      'Nuestro capibara tejido a mano, con su fiel patito de mochila. Una creación propia llena de ternura.',
    whatsapp: '573228369024',
  },
  {
    id: '11',
    name: 'Sapo',
    price: 75000,
    currency: 'COP',
    image: '/images/CreacionesPropias/Sapo.1.png',
    badge: 'new',
    badgeLabel: 'Diseño propio',
    category: 'Creaciones Propias',
    kicker: 'Diseño original LanaNegra',
    description:
      'Un sapo de patas largas y sonrisa traviesa, tejido a mano como creación original de LanaNegra.',
    whatsapp: '573228369024',
  },

  // ── Decoración ────────────────────────────────────────
  {
    id: '12',
    name: 'Carpetas Tejidas',
    price: 75000,
    currency: 'COP',
    image: '/images/Decoracion/Carpetas/1.1.jpg',
    thumbnails: [
      '/images/Decoracion/Carpetas/1.1.jpg',
      '/images/Decoracion/Carpetas/1.2.jpg',
      '/images/Decoracion/Carpetas/1.3.jpg',
      '/images/Decoracion/Carpetas/1.4.jpg',
      '/images/Decoracion/Carpetas/1.5.jpg',
      '/images/Decoracion/Carpetas/1.6.jpg',
      '/images/Decoracion/Carpetas/1.7.jpg',
      '/images/Decoracion/Carpetas/1.8.jpg',
      '/images/Decoracion/Carpetas/1.9.jpg',
    ],
    category: 'Decoración',
    kicker: 'Detalles para el hogar',
    description:
      'Carpetas (doilies) tejidas a crochet en distintos tamaños, perfectas para decorar mesas y muebles con un toque artesanal.',
    whatsapp: '573228369024',
  },
];

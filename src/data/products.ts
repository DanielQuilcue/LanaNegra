import type { Product } from '../types/product';

// ────────────────────────────────────────────────────────────
//  Catálogo LanaNegra
//  Cada producto vive en su propia carpeta dentro de
//  `public/images/productos/<slug>/` y cada foto existe en dos
//  tamaños: `-1200.webp` (ficha) y `-600.webp` (tarjetas).
//  El sufijo `con` / `sin` corresponde al accesorio.
//  El precio está unificado en $75.000 COP hasta definir los
//  precios reales por pieza.
// ────────────────────────────────────────────────────────────

const IMG = '/images/productos';
const WHATSAPP = '573228369024';

const foto = (slug: string, n: string, tipo: 'con' | 'sin') =>
  `${IMG}/${slug}/${n}-${tipo}-1200.webp`;

// Para las fotos del catálogo anterior (no tienen versión con/sin accesorio).
const fotoSimple = (slug: string, n: string) => `${IMG}/${slug}/${n}-1200.webp`;

export const products: Product[] = [
  // ── Animales ──────────────────────────────────────────
  {
    id: '1',
    name: 'Ratón Arlequín',
    price: 75000,
    currency: 'COP',
    image: foto('rata-arlequin', '01', 'con'),
    thumbnails: [
      foto('rata-arlequin', '01', 'con'),
      foto('rata-arlequin', '02', 'con'),
      foto('rata-arlequin', '03', 'con'),
      foto('rata-arlequin', '01', 'sin'),
      foto('rata-arlequin', '02', 'sin'),
      foto('rata-arlequin', '03', 'sin'),
    ],
    badge: 'new',
    badgeLabel: 'Nuevo',
    category: 'Animales',
    kicker: 'Orejas del tamaño de su corazón',
    description:
      'Un ratón tejido a mano con orejas enormes en tono rosado y un cuerpo a rayas verde y gris. Su cola anaranjada y sus patitas de color lo hacen inconfundible.',
    whatsapp: WHATSAPP,
  },
  {
    id: '2',
    name: 'Ratón Gris',
    price: 75000,
    currency: 'COP',
    image: foto('raton-gris', '01', 'con'),
    thumbnails: [
      foto('raton-gris', '01', 'con'),
      foto('raton-gris', '02', 'con'),
      foto('raton-gris', '03', 'con'),
      foto('raton-gris', '01', 'sin'),
      foto('raton-gris', '02', 'sin'),
      foto('raton-gris', '03', 'sin'),
    ],
    category: 'Animales',
    kicker: 'Elegante y travieso',
    description:
      'Ratón gris tejido a crochet, con orejas rosadas y moño al cuello. Un compañero pequeño y simpático para cualquier rincón de la casa.',
    whatsapp: WHATSAPP,
  },
  {
    id: '3',
    name: 'Sapo',
    price: 75000,
    currency: 'COP',
    image: foto('sapo', '01', 'con'),
    thumbnails: [
      foto('sapo', '01', 'con'),
      foto('sapo', '02', 'con'),
      foto('sapo', '03', 'con'),
      foto('sapo', '01', 'sin'),
      foto('sapo', '02', 'sin'),
      foto('sapo', '03', 'sin'),
    ],
    category: 'Animales',
    kicker: 'Sonrisa de oreja a oreja',
    description:
      'Sapo verde tejido a mano, con ojos grandes, mejillas sonrojadas y una cruz bordada en la panza. Patas largas y flexibles que cuelgan con gracia.',
    whatsapp: WHATSAPP,
  },
  {
    id: '4',
    name: 'Pollito',
    price: 75000,
    currency: 'COP',
    image: foto('pollito', '01', 'con'),
    thumbnails: [
      foto('pollito', '01', 'con'),
      foto('pollito', '02', 'con'),
      foto('pollito', '03', 'con'),
      foto('pollito', '01', 'sin'),
      foto('pollito', '02', 'sin'),
      foto('pollito', '03', 'sin'),
    ],
    category: 'Animales',
    kicker: 'Amarillo y regordete',
    description:
      'Un pollito redondo en hilo amarillo, con pico y patitas naranjas y un copete rizado en la cabeza. Diminuto, tierno y fácil de llevar a todas partes.',
    whatsapp: WHATSAPP,
  },
  {
    id: '5',
    name: 'Tiburón',
    price: 75000,
    currency: 'COP',
    image: foto('tiburon', '01', 'con'),
    thumbnails: [
      foto('tiburon', '01', 'con'),
      foto('tiburon', '02', 'con'),
      foto('tiburon', '01', 'sin'),
      foto('tiburon', '02', 'sin'),
    ],
    category: 'Animales',
    kicker: 'Feroz solo de apariencia',
    description:
      'Tiburón tejido en hilo gris con aleta dorsal, cola y una sonrisa que no asusta a nadie. Ideal para los amantes del mar.',
    whatsapp: WHATSAPP,
  },
  {
    id: '6',
    name: 'Zorro',
    price: 75000,
    currency: 'COP',
    image: foto('zorro', '01', 'con'),
    thumbnails: [
      foto('zorro', '01', 'con'),
      foto('zorro', '02', 'con'),
      foto('zorro', '03', 'con'),
      foto('zorro', '04', 'con'),
      foto('zorro', '01', 'sin'),
      foto('zorro', '02', 'sin'),
    ],
    category: 'Animales',
    kicker: 'Naranja, astuto y dormilón',
    description:
      'Zorro acostado, tejido en naranja intenso con patas y hocico negros y una cola esponjosa. Una pieza pensada para decorar el escritorio o la cama.',
    whatsapp: WHATSAPP,
  },
  {
    id: '7',
    name: 'Dragón',
    price: 75000,
    currency: 'COP',
    image: foto('dragon', '01', 'con'),
    thumbnails: [
      foto('dragon', '01', 'con'),
      foto('dragon', '02', 'con'),
      foto('dragon', '03', 'con'),
      foto('dragon', '04', 'con'),
      foto('dragon', '01', 'sin'),
      foto('dragon', '02', 'sin'),
    ],
    badge: 'new',
    badgeLabel: 'Nuevo',
    category: 'Animales',
    kicker: 'El guardián de la repisa',
    description:
      'Dragón tejido a mano en tonos crema y verde, con melena, cuernos y una larga cola. Una creación con muchísimo detalle, hecha para lucirse.',
    whatsapp: WHATSAPP,
  },
  {
    id: '8',
    name: 'Mono',
    price: 75000,
    currency: 'COP',
    image: foto('mono', '01', 'con'),
    thumbnails: [
      foto('mono', '01', 'con'),
      foto('mono', '02', 'con'),
      foto('mono', '03', 'con'),
      foto('mono', '04', 'con'),
      foto('mono', '01', 'sin'),
      foto('mono', '02', 'sin'),
    ],
    category: 'Animales',
    kicker: 'Con sombrero y chaleco',
    description:
      'Mono de brazos largos vestido con chaleco azul y sombrero con cinta amarilla. Su carita tejida y su postura sentada lo vuelven el favorito de la casa.',
    whatsapp: WHATSAPP,
  },

  // ── Navidad ───────────────────────────────────────────
  {
    id: '9',
    name: 'Reno Navideño',
    price: 75000,
    currency: 'COP',
    image: foto('reno-clasico', '01', 'con'),
    thumbnails: [
      foto('reno-clasico', '01', 'con'),
      foto('reno-clasico', '02', 'con'),
      foto('reno-clasico', '03', 'con'),
      foto('reno-clasico', '04', 'con'),
      foto('reno-clasico', '01', 'sin'),
      foto('reno-clasico', '02', 'sin'),
    ],
    badge: 'new',
    badgeLabel: 'Navidad',
    category: 'Navidad',
    kicker: 'Espíritu navideño',
    description:
      'El reno clásico de LanaNegra: suéter rojo con cuello blanco, astas marrones y lazo dorado para colgarlo. Tejido a mano para la temporada decembrina.',
    whatsapp: WHATSAPP,
  },
  {
    id: '10',
    name: 'Reno de Suéter Verde',
    price: 75000,
    currency: 'COP',
    image: foto('reno-verde', '01', 'con'),
    thumbnails: [
      foto('reno-verde', '01', 'con'),
      foto('reno-verde', '02', 'con'),
      foto('reno-verde', '03', 'con'),
      foto('reno-verde', '01', 'sin'),
      foto('reno-verde', '02', 'sin'),
      foto('reno-verde', '03', 'sin'),
    ],
    badge: 'new',
    badgeLabel: 'Navidad',
    category: 'Navidad',
    kicker: 'Navidad en verde',
    description:
      'Reno tejido con suéter verde y cuello blanco, con astas y asa dorada para colgar en el árbol. La versión más fresca del clásico navideño.',
    whatsapp: WHATSAPP,
  },
  {
    id: '11',
    name: 'Reno con Bufanda',
    price: 75000,
    currency: 'COP',
    image: foto('reno-bufanda', '01', 'con'),
    thumbnails: [
      foto('reno-bufanda', '01', 'con'),
      foto('reno-bufanda', '02', 'con'),
      foto('reno-bufanda', '03', 'con'),
      foto('reno-bufanda', '01', 'sin'),
      foto('reno-bufanda', '02', 'sin'),
      foto('reno-bufanda', '03', 'sin'),
    ],
    badge: 'new',
    badgeLabel: 'Navidad',
    category: 'Navidad',
    kicker: 'Abrigado para el invierno',
    description:
      'Reno con bufanda a rayas rojas y blancas, astas, orejas y colita de hilo. Un adorno tejido a mano que se ve tan abrigado como parece.',
    whatsapp: WHATSAPP,
  },

  // ── Gatos ─────────────────────────────────────────────
  {
    id: '12',
    name: 'Gato Negro',
    price: 75000,
    currency: 'COP',
    image: foto('gato-negro', '01', 'con'),
    thumbnails: [
      foto('gato-negro', '01', 'con'),
      foto('gato-negro', '02', 'con'),
      foto('gato-negro', '03', 'con'),
      foto('gato-negro', '01', 'sin'),
      foto('gato-negro', '02', 'sin'),
      foto('gato-negro', '03', 'sin'),
    ],
    category: 'Gatos',
    kicker: 'Ojos verdes, cero prisa',
    description:
      'Gato negro regordete con ojos verdes, bigotes bordados y una cola corta. Su forma redondeada y su gesto serio le dan todo el carácter.',
    whatsapp: WHATSAPP,
  },
  {
    id: '13',
    name: 'Gato Café',
    price: 75000,
    currency: 'COP',
    image: foto('gato-cafe', '01', 'con'),
    thumbnails: [
      foto('gato-cafe', '01', 'con'),
      foto('gato-cafe', '02', 'con'),
      foto('gato-cafe', '03', 'con'),
      foto('gato-cafe', '01', 'sin'),
      foto('gato-cafe', '02', 'sin'),
      foto('gato-cafe', '03', 'sin'),
    ],
    category: 'Gatos',
    kicker: 'Cremita y café',
    description:
      'Gato tejido en crema con manchas café y ojos azules, de cuerpo redondo y patitas bordadas. El hermano claro del gato negro, igual de mimado.',
    whatsapp: WHATSAPP,
  },

  // ── Decoración ────────────────────────────────────────
  {
    id: '14',
    name: 'Dona de Chocolate',
    price: 75000,
    currency: 'COP',
    image: foto('dona', '01', 'con'),
    thumbnails: [
      foto('dona', '01', 'con'),
      foto('dona', '02', 'con'),
      foto('dona', '01', 'sin'),
      foto('dona', '02', 'sin'),
    ],
    category: 'Decoración',
    kicker: 'Cero calorías',
    description:
      'Dona tejida a crochet con cobertura de chocolate y chispas de colores bordadas. Perfecta como adorno de cocina o para un rincón dulce.',
    whatsapp: WHATSAPP,
  },
  {
    id: '15',
    name: 'Vaso con Rana',
    price: 75000,
    currency: 'COP',
    image: foto('vaso-rana', '01', 'con'),
    thumbnails: [
      foto('vaso-rana', '01', 'con'),
      foto('vaso-rana', '02', 'con'),
      foto('vaso-rana', '01', 'sin'),
      foto('vaso-rana', '02', 'sin'),
    ],
    category: 'Decoración',
    kicker: 'Un vaso con personalidad',
    description:
      'Vaso de vidrio con una rana tejida a mano que lo abraza: cabeza con ojos saltones y lengua roja arriba, patitas verdes alrededor. Pieza única para regalar.',
    whatsapp: WHATSAPP,
  },
  {
    id: '16',
    name: 'Cerveza Tejida',
    price: 75000,
    currency: 'COP',
    image: foto('cerveza', '01', 'con'),
    thumbnails: [
      foto('cerveza', '01', 'con'),
      foto('cerveza', '02', 'con'),
      foto('cerveza', '03', 'con'),
      foto('cerveza', '01', 'sin'),
      foto('cerveza', '02', 'sin'),
      foto('cerveza', '03', 'sin'),
    ],
    category: 'Decoración',
    kicker: 'Para el que nunca tiene sed',
    description:
      'Jarra de cerveza amigurumi con espuma blanca y asa negra, tejida a mano en hilo amarillo. Un detalle divertido para decorar o regalar.',
    whatsapp: WHATSAPP,
  },

  // ────────────────────────────────────────────────────────────
  //  Catálogo anterior (recuperado del commit 7ea6a2b)
  //  Las fotos se reoptimizaron a WebP con el mismo pipeline.
  // ────────────────────────────────────────────────────────────

  // ── Animales ──────────────────────────────────────────
  {
    id: '17',
    name: 'León',
    price: 75000,
    currency: 'COP',
    image: fotoSimple('leon', '01'),
    thumbnails: [fotoSimple('leon', '01'), fotoSimple('leon', '02')],
    category: 'Animales',
    kicker: 'Rey de la selva',
    description:
      'Un león tejido a mano con su melena rizada llena de carácter. Ideal para los pequeños exploradores de la sabana.',
    whatsapp: WHATSAPP,
  },
  {
    id: '18',
    name: 'Colibrí',
    price: 75000,
    currency: 'COP',
    image: fotoSimple('colibri', '01'),
    category: 'Animales',
    kicker: 'Delicado y colorido',
    description:
      'Un colibrí en pleno vuelo, tejido con detalle en cada ala. Una pieza pequeña llena de color para acompañar cualquier rincón.',
    whatsapp: WHATSAPP,
  },

  // ── Navidad ───────────────────────────────────────────
  {
    id: '19',
    name: 'Señor Papá Noel',
    price: 75000,
    currency: 'COP',
    image: fotoSimple('papa-noel', '01'),
    badge: 'new',
    badgeLabel: 'Navidad',
    category: 'Navidad',
    kicker: 'Espíritu navideño',
    description:
      'Un gnomo navideño con gorro rojo y barba blanca tejida, listo para decorar tu hogar en las fiestas.',
    whatsapp: WHATSAPP,
  },
  {
    id: '20',
    name: 'Señora Papá Noel',
    price: 75000,
    currency: 'COP',
    image: fotoSimple('mama-noel', '01'),
    badge: 'new',
    badgeLabel: 'Navidad',
    category: 'Navidad',
    kicker: 'Espíritu navideño',
    description:
      'Gnomo navideño con trenzas y detalles dorados, tejido con mucho cariño para celebrar la temporada.',
    whatsapp: WHATSAPP,
  },
  {
    id: '21',
    name: 'Grinch',
    price: 75000,
    currency: 'COP',
    image: fotoSimple('grinch', '01'),
    badge: 'new',
    badgeLabel: 'Navidad',
    category: 'Navidad',
    kicker: 'El favorito de la Navidad',
    description:
      'El personaje más gruñón de la Navidad, tejido a mano con su característica cara verde. Un infaltable en tu decoración navideña.',
    whatsapp: WHATSAPP,
  },

  // ── Caricatura ────────────────────────────────────────
  {
    id: '22',
    name: 'Jake',
    price: 75000,
    currency: 'COP',
    image: fotoSimple('jake', '01'),
    category: 'Caricatura',
    kicker: 'Aventura de todos los días',
    description:
      'Inspirado en el entrañable perro amarillo de caricatura. Tejido a mano con todo su carisma.',
    whatsapp: WHATSAPP,
  },
  {
    id: '23',
    name: 'Bluey',
    price: 75000,
    currency: 'COP',
    image: fotoSimple('bluey', '01'),
    category: 'Caricatura',
    kicker: 'El favorito de los peques',
    description:
      'La perrita azul favorita de los más pequeños de la casa, tejida a mano con todos sus detalles.',
    whatsapp: WHATSAPP,
  },

  // ── Anime ─────────────────────────────────────────────
  {
    id: '24',
    name: 'Gato Luffy',
    price: 75000,
    currency: 'COP',
    image: fotoSimple('gato-luffy', '01'),
    category: 'Anime',
    kicker: 'Rumbo al One Piece',
    description:
      'Un tierno gatito con el sombrero de paja del capitán más famoso del anime. Perfecto para fans de la serie.',
    whatsapp: WHATSAPP,
  },

  // ── Superhéroes ───────────────────────────────────────
  {
    id: '25',
    name: 'Batman',
    price: 75000,
    currency: 'COP',
    image: fotoSimple('batman', '01'),
    category: 'Superhéroes',
    kicker: 'El caballero de la noche',
    description:
      'El superhéroe de Ciudad Gótica tejido a mano, con capa, antifaz y el símbolo del murciélago en el pecho.',
    whatsapp: WHATSAPP,
  },

  // ── Creaciones Propias ────────────────────────────────
  {
    id: '26',
    name: 'Capibara con Patito',
    price: 75000,
    currency: 'COP',
    image: fotoSimple('capibara', '01'),
    thumbnails: [
      fotoSimple('capibara', '01'),
      fotoSimple('capibara', '02'),
      fotoSimple('capibara', '03'),
    ],
    badge: 'new',
    badgeLabel: 'Diseño propio',
    category: 'Creaciones Propias',
    kicker: 'Diseño original LanaNegra',
    description:
      'Nuestro capibara tejido a mano, con su fiel patito de mochila. Una creación propia llena de ternura.',
    whatsapp: WHATSAPP,
  },
  {
    id: '27',
    name: 'Sapo Cuello Largo',
    price: 75000,
    currency: 'COP',
    image: fotoSimple('sapo-cuello-largo', '01'),
    badge: 'new',
    badgeLabel: 'Diseño propio',
    category: 'Creaciones Propias',
    kicker: 'Diseño original LanaNegra',
    description:
      'Un sapo de cuello largo, patas cortas y sonrisa traviesa con lengua roja, tejido a mano como creación original de LanaNegra.',
    whatsapp: WHATSAPP,
  },

  // ── Decoración ────────────────────────────────────────
  {
    id: '28',
    name: 'Carpetas Tejidas',
    price: 75000,
    currency: 'COP',
    image: fotoSimple('carpetas', '01'),
    thumbnails: [
      fotoSimple('carpetas', '01'),
      fotoSimple('carpetas', '02'),
      fotoSimple('carpetas', '03'),
      fotoSimple('carpetas', '04'),
      fotoSimple('carpetas', '05'),
      fotoSimple('carpetas', '06'),
      fotoSimple('carpetas', '07'),
      fotoSimple('carpetas', '08'),
      fotoSimple('carpetas', '09'),
    ],
    category: 'Decoración',
    kicker: 'Detalles para el hogar',
    description:
      'Carpetas (doilies) tejidas a crochet en distintos tamaños, perfectas para decorar mesas y muebles con un toque artesanal.',
    whatsapp: WHATSAPP,
  },
];

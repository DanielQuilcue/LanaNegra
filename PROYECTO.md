# LanaNegra

Tienda/catálogo web ultra rápida con carga de imágenes optimizada, animaciones fluidas y excelente UX.

## Stack

| Capa | Herramienta | Versión |
|---|---|---|
| Framework | Astro 5 | ^5.x |
| UI interactiva | React (islands) | ^19.x |
| Tipado | TypeScript | strict |
| Animaciones | Framer Motion | ^11.x |
| Imágenes | Astro Image + Cloudinary | — |
| Estilos | Tailwind CSS | ^4.x |
| Estado del carrito | Nanostores + @nanostores/react | ^0.10.x |

## Estructura

```
src/
├── components/
│   ├── ui/        ← Componentes base (Button, Badge, etc.)
│   ├── product/   ← ProductCard, ProductGrid, ProductModal
│   ├── cart/      ← CartPanel, CartItem, CartButton
│   ├── gallery/   ← ImageGallery, ImageZoom
│   └── layout/    ← Header, Footer, Nav
├── islands/       ← Componentes React hidratados en cliente
├── layouts/       ← BaseLayout.astro
├── pages/         ← Rutas de Astro
├── stores/        ← Nanostores (carrito, etc.)
├── types/         ← Tipos TypeScript compartidos
├── lib/           ← Helpers (cloudinary.ts, etc.)
└── styles/        ← global.css con Tailwind
```

## Comandos

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
```

## Archivos creados

| Archivo | Descripción |
|---|---|
| `src/styles/global.css` | Tokens de diseño, Quicksand font, clases utilitarias |
| `src/layouts/BaseLayout.astro` | Layout base con Header y Footer |
| `src/components/layout/Header.astro` | Nav sticky con glassmorphism |
| `src/components/layout/Footer.astro` | Footer oscuro con columnas |
| `src/components/product/ProductCard.astro` | Tarjeta de producto con badge y hover |
| `src/types/product.ts` | Tipos: Product, Step, Review |
| `src/pages/index.astro` | Home: Hero, Catálogo, Pasos, Testimonios, CTA |

## Servidor

```
http://localhost:4321
```

## Notas

- Cerebro del proyecto en Obsidian: `Documents/Obsidian/LanaNegra/`
- Imágenes de productos via Cloudinary (configurar cuenta y CLOUDINARY_URL en .env)
- Islands de React solo donde hay interactividad: carrito, filtros, modales
- Paleta de colores basada en `DESIGN.md` (Lananegra Artisanal)
- Fuente: Quicksand desde Google Fonts

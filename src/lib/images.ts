/**
 * Utilidades de imágenes de producto.
 *
 * Cada foto del catálogo se guarda en dos tamaños dentro de
 * `public/images/productos/<slug>/`:
 *
 *   01-con-1200.webp  → ficha de producto y lightbox
 *   01-con-600.webp   → tarjetas del catálogo
 *
 * `srcSet()` arma el atributo `srcset` para que el navegador
 * descargue solo la variante que necesita.
 */

const SIZE_RE = /-1200\.webp$/;

/** Devuelve la ruta de la variante de 600 px de una imagen de producto. */
export function smallImage(src: string): string {
  return src.replace(SIZE_RE, '-600.webp');
}

/** Devuelve el `srcset` con las dos variantes disponibles. */
export function srcSet(src: string): string {
  return `${smallImage(src)} 600w, ${src} 1200w`;
}

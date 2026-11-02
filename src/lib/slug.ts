// Helper para generar "slugs" limpios y predecibles a partir del nombre del producto.
// Ejemplos:
//   "Ratón Arlequín" → "raton-arlequin"
//   "Sapo Cuello Largo" → "sapo-cuello-largo"
//   "Capibara con Patito" → "capibara-con-patito"
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quita acentos (ó → o, ñ → n)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

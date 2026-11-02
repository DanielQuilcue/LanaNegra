#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
#  Genera public/images/productos/<slug>/ a partir de fotos originales.
#
#  Uso:
#      ./scripts/imagenes.sh                       # catálogo nuevo
#      ./scripts/imagenes.sh scripts/imagenes-legado.txt assets/origenes
#
#  Formato de cada línea del listado:
#      slug|numero|tipo|archivo-origen
#        tipo: con | sin | -   ("-" = sin sufijo, fotos del catálogo viejo)
#        archivo-origen: ruta relativa a SRC (o absoluta)
#
#  Qué hace:
#    .png con fondo blanco → le quita el fondo (floodfill desde el borde)
#    .png ya recortado     → solo recorta el aire sobrante
#    .jpg                  → solo redimensiona (son fotos con fondo real)
#    todos                 → 2 WebP: <n>[-tipo]-1200 y -600
# ─────────────────────────────────────────────────────────────
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LIST="${1:-$ROOT/scripts/imagenes-origen.txt}"
SRC="${2:-${IMAGENES_SRC:-$HOME/Documentos/IMAGENES}}"
OUT="$ROOT/public/images/productos"

[[ -f "$LIST" ]] || { echo "No existe el listado: $LIST" >&2; exit 1; }

job() {
  IFS='|' read -r slug num kind base <<< "$1"
  local dir="$OUT/$slug" tmp suffix corner ext
  mkdir -p "$dir"
  tmp="$(mktemp --suffix=.png)"

  suffix=""
  [[ "$kind" != "-" ]] && suffix="-$kind"
  ext="${base##*.}"

  if [[ "$ext" == "png" ]]; then
    corner=$(magick "$SRC/$base" -format "%[pixel:p{2,2}]" info:)
    if [[ "$corner" == *"255,255,255"* ]]; then
      # borde de 1px conecta todo el fondo blanco; se quita de una pasada
      magick "$SRC/$base" -bordercolor white -border 1 -alpha set -fuzz 7% \
        -fill none -floodfill +0+0 white -shave 1x1 -trim +repage "$tmp"
    else
      magick "$SRC/$base" -trim +repage "$tmp"
    fi
  else
    magick "$SRC/$base" "$tmp"
  fi

  magick "$tmp" -resize '1200x1200>' -strip -quality 82 "$dir/${num}${suffix}-1200.webp"
  magick "$tmp" -resize '600x600>'   -strip -quality 80 "$dir/${num}${suffix}-600.webp"
  rm -f "$tmp"
}
export -f job
export SRC OUT

xargs -P 6 -I{} bash -c 'job "$@"' _ {} < "$LIST"

echo "Listo: $(find "$OUT" -name '*.webp' | wc -l) archivos en public/images/productos"

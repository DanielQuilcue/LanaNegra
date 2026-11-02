// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: reemplazar por el dominio real antes de publicar en producción.
const SITE_URL = 'https://lananegra.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [react(), sitemap()],
  redirects: {
    // Migración /tienda/<id-numérico> → /tienda/<slug-del-producto>
    '/tienda/1': '/tienda/raton-arlequin',
    '/tienda/2': '/tienda/raton-gris',
    '/tienda/3': '/tienda/sapo',
    '/tienda/4': '/tienda/pollito',
    '/tienda/5': '/tienda/tiburon',
    '/tienda/6': '/tienda/zorro',
    '/tienda/7': '/tienda/dragon',
    '/tienda/8': '/tienda/mono',
    '/tienda/9': '/tienda/reno-navideno',
    '/tienda/10': '/tienda/reno-de-sueter-verde',
    '/tienda/11': '/tienda/reno-con-bufanda',
    '/tienda/12': '/tienda/gato-negro',
    '/tienda/13': '/tienda/gato-cafe',
    '/tienda/14': '/tienda/dona-de-chocolate',
    '/tienda/15': '/tienda/vaso-con-rana',
    '/tienda/16': '/tienda/cerveza-tejida',
    '/tienda/17': '/tienda/leon',
    '/tienda/18': '/tienda/colibri',
    '/tienda/19': '/tienda/senor-papa-noel',
    '/tienda/20': '/tienda/senora-papa-noel',
    '/tienda/21': '/tienda/grinch',
    '/tienda/22': '/tienda/jake',
    '/tienda/23': '/tienda/bluey',
    '/tienda/24': '/tienda/gato-luffy',
    '/tienda/25': '/tienda/batman',
    '/tienda/26': '/tienda/capibara-con-patito',
    '/tienda/27': '/tienda/sapo-cuello-largo',
    '/tienda/28': '/tienda/carpetas-tejidas',
  },

  vite: {
    plugins: [tailwindcss()]
  }
});

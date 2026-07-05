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

  vite: {
    plugins: [tailwindcss()]
  }
});

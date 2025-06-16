import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Ruta base exacta en GitHub Pages
  base: '/portafolio/',
  // site puede quedarse o eliminarse, no afecta el build
  site: 'https://cristhiandevcod.github.io/portafolio/',

  vite: {
    plugins: [tailwindcss()],
    resolve: { alias: { '@': '/src' } },
  },

  integrations: [react()],
});

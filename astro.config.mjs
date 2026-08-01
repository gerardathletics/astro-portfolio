import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en', 'ca', 'nl'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  output: "server",
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()]
  }
});
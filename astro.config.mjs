import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react()],
    i18n: {
        defaultLocale: 'en',
        locales: ['es', 'en', 'ca', 'nl'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    output: 'server',
    adapter: cloudflare(),
    vite: {
        build: {
            target: 'esnext',
        },
        optimizeDeps: {
            include: ['react', 'react-dom'],
        },
        server: {
            hmr: {
                overlay: false,
            },
        },
    },
});

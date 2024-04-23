import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import bookshop from '@bookshop/astro-bookshop';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkAutoImport from '@cloudcannon/remark-auto-import';
import alpine from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://muggy-fish.cloudvent.net/',
  integrations: [mdx(), react(), tailwind(), bookshop(), alpine()],
  markdown: {
    remarkPlugins: [
      [
        remarkAutoImport,
        {
          directories: ['src/components/snippets'],
          patterns: ['*.*'],
        },
      ],
    ],
    extendDefaultPlugins: true,
  },
});

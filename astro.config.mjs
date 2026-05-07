import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://isabelgrando.com.br', // Substitua pelo domínio real
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'always'
  }
});

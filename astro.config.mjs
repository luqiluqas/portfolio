import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://luqiluqas.github.io',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },
});

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://typinggamezone.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'es', 'fr', 'de', 'ja', 'pt', 'ru', 'ar', 'zh', 'it', 'ko', 'id', 'tr', 'vi', 'bn'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/500') &&
        !page.includes('/505') &&
        !page.includes('/about-us') &&
        !page.includes('/contact-us') &&
        !page.includes('/privacy-policy') &&
        !page.includes('/terms-and-conditions'),
      serialize(item) {
        if (/https:\/\/typinggamezone\.com\/?$/.test(item.url) || /https:\/\/typinggamezone\.com\/[a-z]{2}\/?$/.test(item.url)) {
          item.changefreq = ChangeFreqEnum.DAILY;
          item.priority = 1.0;
        } else if (/(\/arcade|\/practice|\/speed-test|\/leaderboards)/.test(item.url)) {
          item.changefreq = ChangeFreqEnum.DAILY;
          item.priority = 0.9;
        } else if (/\/game\//.test(item.url)) {
          item.changefreq = ChangeFreqEnum.WEEKLY;
          item.priority = 0.85;
        } else {
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.priority = 0.7;
        }
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

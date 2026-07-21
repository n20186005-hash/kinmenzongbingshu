import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kinmenzongbingshu.com',
  trailingSlash: 'ignore',
  redirects: {
    '/faq/': '/#faq',
    '/zh-cn/faq/': '/zh-cn/#faq',
    '/en/faq/': '/en/#faq',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404.html') && !page.endsWith('/faq/'),
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
});

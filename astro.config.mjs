import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://iigconference-cu2024.com',
  integrations: [
    tailwind({
      //   applyBaseStyles: false,
    }),
  ],
});

import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://iigconference-cu2024.com",
  integrations: [
    tailwind({
      //   applyBaseStyles: false,
    }),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2023-10-10"),
    }),
  ],
});

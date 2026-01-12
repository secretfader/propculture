// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import alpine from "@astrojs/alpinejs";

const site = import.meta.env.CF_PAGES_URL || "https://fictiveflame.co";

// https://astro.build/config
export default defineConfig({
  site,
  adapter: cloudflare(),
  integrations: [sitemap(), alpine()],
  vite: {
    plugins: [tailwindcss()],
  },
});

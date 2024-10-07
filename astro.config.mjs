// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://character.construction",
  compressHTML: true,
  build: {
    format: "file",
  },
  trailingSlash: "never",
  integrations: [vue(), react()],
});

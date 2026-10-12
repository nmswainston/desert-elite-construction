import { defineConfig } from "astro/config";

// One file per page (about.html, not about/index.html), so the addresses stay exactly as they were.
export default defineConfig({
  build: { format: "file" },
  trailingSlash: "never",
  devToolbar: { enabled: false },
});

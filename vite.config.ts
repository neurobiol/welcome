import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Repo name is "welcome" → GitHub Pages serves under /welcome/
export default defineConfig({
  plugins: [vue()],
  base: "/welcome/"
});

import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/elearning-website/',
    build: {
      rollupOptions: {
        input: {
          // main: resolve(__dirname, "index.html"),
        },
      },
    },
});
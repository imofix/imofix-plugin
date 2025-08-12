import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  build: {
    outDir: "build",
    rollupOptions: {
      input: "src/main.ts",
      output: {
        entryFileNames: "banner.js",
      },
    },
  },
});

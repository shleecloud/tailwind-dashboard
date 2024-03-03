import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  build: {
    outDir: "docs",
    chunkSizeWarningLimit: 1024,
  },
  define: {
    // eslint-disable-next-line no-undef
    NPM_PACKAGE_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  base: "/tailwind-dashboard/",
});

import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
export default defineConfig({
  plugins: [basicSsl()],
  optimizeDeps: { exclude: ["@zappar/zappar-threejs", "three"], include: ["ua-parser-js"] },
});

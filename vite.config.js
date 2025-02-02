import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import("core-js/stable");
import("regenerator-runtime");
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});

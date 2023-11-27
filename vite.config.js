import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import("core-js/stable");
import("regenerator-runtime");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "src/datas/WordData": "./datas/WordData",
      "src/datas/WorksList": "./datas/WorksList",
      "src/datas/SkillsList": "./datas/SkillsList",
    },
  },
  optimizeDeps: {
    include: ["src/main.jsx"],
  },
});

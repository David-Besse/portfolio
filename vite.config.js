import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import("core-js/stable");
import("regenerator-runtime");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    external: [
      "src/datas/WordList",
      "src/datas/WorksList",
      "src/datas/SkillsList",
      "src/datas/AboutMeList",
    ],
  },
  optimizeDeps: {
    include: ["src/main.jsx"],
  },
});

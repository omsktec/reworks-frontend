import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["recoil"],
  },
  build: {
    sourcemap: false,
    outDir: "dist",
  },
});

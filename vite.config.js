import { copyFileSync } from "fs";
import { join } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio/",
  plugins: [
    react(),
    {
      name: "copy-404",
      closeBundle() {
        copyFileSync(join("dist", "index.html"), join("dist", "404.html"));
      }
    }
  ],
  server: {
    open: true
  }
});

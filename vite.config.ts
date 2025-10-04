import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { viteStaticCopy } from "vite-plugin-static-copy"; // <--- added

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Copy everything in src/assets except the generated src/components folder
    viteStaticCopy({
      targets: [
        {
          src: ["src/assets/gallery", "src/assets/members", "src/assets/botball-logo-light.svg", "src/assets/botballgroupteam.jpg", "src/assets/logo.png", "src/assets/robot.jpg"],
          dest: "assets",
        },
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

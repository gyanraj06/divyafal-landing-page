import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: true, // important: makes server accessible from network
    port: 8080,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "3e4da6bc3666.ngrok-free.app",            // wildcard for future ngrok URLs
    ],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

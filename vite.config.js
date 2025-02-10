import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/react-1-tehtava-anekdootit/",
  plugins: [react()],
  server: {
    host: true,
  },
});

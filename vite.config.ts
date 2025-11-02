import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import contentCollections from "@content-collections/remix-vite";
import netlifyReactRouter from "@netlify/vite-plugin-react-router";
import netlify from "@netlify/vite-plugin";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    contentCollections(),
    netlifyReactRouter(),
    netlify(),
  ],
});

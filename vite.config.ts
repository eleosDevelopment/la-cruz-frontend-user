import { defineConfig } from "vite";
import packageJson from "./package.json";
import react from "@vitejs/plugin-react-swc";
import { manifestForPlugIn } from "./manifest";
import type { RuntimeCaching } from "workbox-build";
import { VitePWA, type VitePWAOptions } from "vite-plugin-pwa";

// Define the type for runtimeCaching to ensure type safety.
const typedRuntimeCaching: RuntimeCaching[] = [
  {
    urlPattern: /\.(js|css|png|jpg|svg|webmanifest)$/,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "static-assets",
      expiration: {
        maxEntries: 30,
        maxAgeSeconds: 24 * 60 * 60,
      },
    },
  },
  {
    urlPattern: "/api/*",
    handler: "NetworkFirst",
  },
];

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: [
    "logo192.png",
    "logo512.png",
    "apple-touch-icon.png",
    "favicon.ico",
  ],
  manifest: manifestForPlugIn, // Using the correct manifest object
  workbox: {
    globDirectory: "dist",
    globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
    swDest: "dist/service-worker.js",
    runtimeCaching: typedRuntimeCaching,
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    cleanupOutdatedCaches: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      plugins: [["@swc/plugin-styled-components", {}]],
      tsDecorators: true,
      devTarget: "es2022",
    }),
    VitePWA(pwaOptions),
  ],
  define: {
    "import.meta.env.PACKAGE_VERSION": JSON.stringify(packageJson.version),
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            const parts = id.split("node_modules/");
            if (parts.length > 1) {
              const modulePath = parts[1];
              const moduleName = modulePath.startsWith("@")
                ? modulePath.split("/").slice(0, 2).join("/") // Handle scoped packages
                : modulePath.split("/")[0];
              return moduleName;
            }
          }
        },
      },
    },
  },
});

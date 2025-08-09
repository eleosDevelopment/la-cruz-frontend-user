import { type ManifestOptions } from "vite-plugin-pwa";

export const manifestForPlugIn: Partial<ManifestOptions> = {
  name: "La Cruz",
  short_name: "LC",
  description: "Su Distribuidora de confianza",
  icons: [
    {
      src: "/favicon.ico",
      sizes: "48x48",
      type: "ICO",
      purpose: "favicon",
    },
    {
      src: "/logo192.png",
      sizes: "192x192",
      type: "img/png",
      purpose: "any maskable",
    },
    {
      src: "/logo512.png",
      sizes: "512x512",
      type: "img/png",
      purpose: "any maskable",
    },
  ],
  theme_color: "#f5f5f5",
  background_color: "#fff",
  display: "standalone",
  scope: "/",
  start_url: "/",
};

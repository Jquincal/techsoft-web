import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/index.html",
        destination: "/",
      },
      {
        source: "/templates/servicios.html",
        destination: "/servicios",
      },
      {
        source: "/templates/productos.html",
        destination: "/productos",
      },
      {
        source: "/templates/contacto.html",
        destination: "/contacto",
      },
      {
        source: "/templates/nosotros.html",
        destination: "/nosotros",
      },
    ];
  },
};

export default nextConfig;

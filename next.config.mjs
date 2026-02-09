import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // Export estático para GitHub Pages
  images: { unoptimized: true }, // Desactiva el Image Optimizer en Pages
  trailingSlash: true,           // Evita 404 en rutas
  // Publicación en raíz (edwinpuertas.github.io): NO uses basePath ni assetPrefix
  // basePath: '',
  // assetPrefix: '',
};

export default nextConfig;

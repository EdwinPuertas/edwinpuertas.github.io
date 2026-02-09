import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // requerido para export estático
  images: { unoptimized: true }, // evitar el Image Optimizer (no corre en Pages)
  trailingSlash: true,         // minimiza 404 en GitHub Pages
  // Si publicas en la raíz (edwinpuertas.github.io), NO uses basePath/assetPrefix
  // basePath: '',
  // assetPrefix: '',
};


module.exports = nextConfig;

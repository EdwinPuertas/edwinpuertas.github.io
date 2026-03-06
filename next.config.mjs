import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // Export estático para GitHub Pages
  basePath: '',
  images: { 
    unoptimized: true 
  }, // Desactiva el Image Optimizer en Pages
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Wajib untuk GitHub Pages (static export)
  images: {
    unoptimized: true, // Wajib agar gambar muncul di GitHub Pages
  },
};

export default nextConfig;

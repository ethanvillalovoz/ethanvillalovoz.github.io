import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true }, // If you use next/image
  trailingSlash: true, // <- REQUIRED for static sitemap URLs to work
  async rewrites() {
    return [
      { source: "/RAG/", destination: "/data/capstone/index.html" },
      { source: "/RAG/static/:path*", destination: "/data/capstone/static/:path*" },
    ];
  },
};

export default nextConfig;

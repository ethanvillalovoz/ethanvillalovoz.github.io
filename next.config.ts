import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true }, // If you use next/image
  trailingSlash: true, // <- REQUIRED for static sitemap URLs to work
  async redirects() {
    return [
      { source: "/RAG/", destination: "/rag/", permanent: true },
      { source: "/RAG/static/:path*", destination: "/rag/static/:path*", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/rag/", destination: "/data/capstone/index.html" },
      { source: "/rag/static/:path*", destination: "/data/capstone/static/:path*" },
      { source: "/DreamWorlds/", destination: "/data/cgai_dream_worlds/index.html" },
      { source: "/DreamWorlds/static/:path*", destination: "/data/cgai_dream_worlds/static/:path*" },
    ];
  },
};

export default nextConfig;

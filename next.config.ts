import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/DreamWorlds/",
        destination: "/gaussian-splatting-physics/",
        permanent: true,
      },
      {
        source: "/DreamWorlds/static/:path*",
        destination: "/gaussian-splatting-physics/static/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/scenariolens/", destination: "/scenariolens/index.html" },
      { source: "/rag/", destination: "/data/capstone/index.html" },
      { source: "/rag/static/:path*", destination: "/data/capstone/static/:path*" },
      {
        source: "/gaussian-splatting-physics/",
        destination: "/data/cgai_dream_worlds/index.html",
      },
      {
        source: "/gaussian-splatting-physics/static/:path*",
        destination: "/data/cgai_dream_worlds/static/:path*",
      },
    ];
  },
};

export default nextConfig;

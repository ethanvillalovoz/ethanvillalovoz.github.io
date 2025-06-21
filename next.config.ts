import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // If you use next/image
  trailingSlash: true, // <- REQUIRED for static sitemap URLs to work
};

export default nextConfig;

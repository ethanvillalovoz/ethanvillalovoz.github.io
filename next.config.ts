import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	trailingSlash: true,
	async redirects() {
		return [
			{
				source: "/projects/:path*",
				destination: "/work/",
				permanent: true,
			},
			{
				source: "/publications/:path*",
				destination: "/research/",
				permanent: true,
			},
			{
				source: "/teaching/:path*",
				destination: "/research/",
				permanent: true,
			},
			{
				source: "/DreamWorlds/:path*",
				destination: "/work/",
				permanent: true,
			},
			{
				source: "/gaussian-splatting-physics/:path*",
				destination: "/work/",
				permanent: true,
			},
		];
	},
	async rewrites() {
		return [
			{ source: "/metricdrive/", destination: "/metricdrive/index.html" },
			{ source: "/scenariolens/", destination: "/scenariolens/index.html" },
			{ source: "/rag/", destination: "/data/capstone/index.html" },
			{ source: "/rag/static/:path*", destination: "/data/capstone/static/:path*" },
		];
	},
};

export default nextConfig;

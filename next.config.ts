import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	trailingSlash: true,
	images: {
		qualities: [75, 90],
	},
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
		];
	},
};

export default nextConfig;

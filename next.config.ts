import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	allowedDevOrigins: ["127.0.0.1"],
	trailingSlash: true,
	images: {
		qualities: [75, 90],
	},
	async redirects() {
		return [
			{
				source: "/work/:path*",
				destination: "/research/",
				permanent: true,
			},
			{
				source: "/projects/:path*",
				destination: "/research/",
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
				destination: "/research/",
				permanent: true,
			},
			{
				source: "/gaussian-splatting-physics/:path*",
				destination: "/research/",
				permanent: true,
			},
		];
	},
};

export default nextConfig;

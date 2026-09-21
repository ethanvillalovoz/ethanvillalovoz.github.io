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
				source: "/research/:path*",
				destination: "/#publications",
				permanent: true,
			},
			{
				source: "/writing/:path*",
				destination: "/#publications",
				permanent: true,
			},
			{
				source: "/work/:path*",
				destination: "/#publications",
				permanent: true,
			},
			{
				source: "/projects/:path*",
				destination: "/#publications",
				permanent: true,
			},
			{
				source: "/publications/:path*",
				destination: "/#publications",
				permanent: true,
			},
			{
				source: "/teaching/:path*",
				destination: "/#teaching",
				permanent: true,
			},
			{
				source: "/DreamWorlds/:path*",
				destination: "/#publications",
				permanent: true,
			},
			{
				source: "/gaussian-splatting-physics/:path*",
				destination: "/#publications",
				permanent: true,
			},
		];
	},
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/((?!$|api|_next/static|_next/image|favicon.ico|fonts|logo.svg).+)",
				destination: "/",
				permanent: false,
			},
		];
	},
};

export default nextConfig;

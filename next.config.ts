import type {NextConfig} from "next";

const nextConfig: NextConfig = {
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.discordapp.com"
			}
		]
	}
};

export default nextConfig;

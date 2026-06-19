import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "findinghomeprd.wpengine.com",
      },
      {
        protocol: "https",
        hostname: "monocrom.wpengine.com",
      },
    ],
  },
};

export default nextConfig;

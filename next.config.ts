import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_HOSTNAME || 'localhost',
        port: process.env.NEXT_PUBLIC_PORT || '8080',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

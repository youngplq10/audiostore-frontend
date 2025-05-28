import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: '**',
        hostname: '**',
        port: '*',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

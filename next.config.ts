import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_HOSTNAME || 'localhost',
        port: process.env.NEXT_PUBLIC_PORT || '8080',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Force dynamic rendering
  experimental: {
    missingSuspenseWithCSRError: false,
  },
  // Disable static optimization
  staticPageGenerationTimeout: 0,
  generateEtags: false,
};

export default nextConfig;

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '57.128.197.168',
        port: '8080',
        pathname: '/uploads/**',
      },
    ],
  },
};

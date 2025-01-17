import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080', // Port serwera
        pathname: '/uploads/**', // Ścieżka do zasobów
      },
    ],
  },
};

export default nextConfig;

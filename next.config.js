/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_HOSTNAME,
        port: process.env.NEXT_PUBLIC_PORT,
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig; 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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

module.exports = nextConfig; 

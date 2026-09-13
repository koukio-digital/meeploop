/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['framer-motion', 'lucide-react'],
  devIndicators: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

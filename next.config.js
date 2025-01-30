/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Désactive l'optimisation des images de Next.js
  },
}

module.exports = nextConfig;


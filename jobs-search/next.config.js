/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["remotive.com", "via.placeholder.com"],
  },
};

module.exports = nextConfig;

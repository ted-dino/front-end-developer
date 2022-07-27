/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["remotive.com", "fakeimg.pl"],
  },
};

module.exports = nextConfig;

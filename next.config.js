/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "https://m.media-amazon.com/",
  },
};

module.exports = nextConfig;

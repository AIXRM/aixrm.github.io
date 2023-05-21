/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "aixrm.com"],
    unoptimized: true, // For output: export
  },
};

module.exports = nextConfig;

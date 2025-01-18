/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.bing.com"], // Add Bing's domain for external images
  },
  output: "export",
  basePath: '/browser-home', // Replace with your repo name
  assetPrefix: '/browser-home/',
};

export default nextConfig;
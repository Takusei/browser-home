/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.bing.com"], // Add Bing's domain for external images
  },
  output: "export",
};

export default nextConfig;
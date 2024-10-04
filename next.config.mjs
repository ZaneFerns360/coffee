/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ettarracoffee.in",
      },
    ],
  },
};

export default nextConfig;

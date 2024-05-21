/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codeit-front.s3.ap-northeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "codeit-images.codeit.com",
      },
    ],
  },
};

module.exports = nextConfig;

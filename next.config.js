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
      {
        protocol: "https",
        hostname: "codeit-frontend.codeit.com",
      },
      {
        protocol: "https",
        hostname: "reactjs.org",
      },
      {
        protocol: "https",
        hostname: "assets.vercel.com",
      },
      {
        protocol: "https",
        hostname: "tanstack.com",
      },
      {
        protocol: "https",
        hostname: "storybook.js.org",
      },
      {
        protocol: "https",
        hostname: "testing-library.com",
      },
      {
        protocol: "https",
        hostname: "static.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "s.pstatic.net",
      },
    ],
  },
};

module.exports = nextConfig;

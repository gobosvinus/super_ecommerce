/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/seed/**", // Все пути, начинающиеся с "/seed/"
      },
    ],
  },
};

export default nextConfig;

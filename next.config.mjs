/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.pandusubekti.com", // Hanya hostname, tanpa protokol
        pathname: "/uploads/**", // Menentukan pattern path
      },
    ],
  },
};

export default nextConfig;

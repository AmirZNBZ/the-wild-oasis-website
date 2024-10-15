/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "axzuplqutyqylzrxrela.supabase.co",
      },
    ],
  },
};

export default nextConfig;

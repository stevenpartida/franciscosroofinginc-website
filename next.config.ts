/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ohigyuluoqcrszajcyva.supabase.co",
        pathname: "/storage/v1/object/public/franciscos-roofing-project/**",
      },
    ],
  },
};

module.exports = nextConfig;

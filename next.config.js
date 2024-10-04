/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // {
      //   source: "/dashboard",
      //   destination: "/DashboardLayout", // Updated to match the correct path structure
      // },
      {
        source: "/",
        destination: "/LandingPage", // Ensure this is also correct
      },
    ];
  },
};

module.exports = nextConfig;

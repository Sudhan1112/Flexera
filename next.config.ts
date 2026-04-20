import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/",
        permanent: true,
      },
      {
        source: "/teacher-dashboard",
        destination: "/",
        permanent: true,
      },
      {
        source: "/student-profile",
        destination: "/students",
        permanent: true,
      },
      {
        source: "/student-profile/:path*",
        destination: "/students",
        permanent: true,
      },
      {
        source: "/students/:studentId",
        destination: "/students?student=:studentId",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

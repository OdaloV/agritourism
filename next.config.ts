import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.100.7', 'localhost', '*.local'], 
  reactCompiler: true,
};

export default nextConfig;

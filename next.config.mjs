/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The old phone-frame mockup route now points at the single responsive site.
      { source: "/mobile", destination: "/", permanent: true },
    ];
  },
};
export default nextConfig;

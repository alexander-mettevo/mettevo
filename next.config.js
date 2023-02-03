/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  experimental: {
    // appDir: true,
    scrollRestoration: true
  }
}

module.exports = nextConfig

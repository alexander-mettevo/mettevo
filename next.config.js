/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["1.gravatar.com", "localhost"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `@use "src/styles/scss/style.scss" as *;`
  },
  experimental: {
    // appDir: true,
    scrollRestoration: true
  }
}

module.exports = nextConfig

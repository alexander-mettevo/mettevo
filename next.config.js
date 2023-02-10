/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: false,
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    PUBLIC: process.env.PUBLIC
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://:path*'
      }
    ]
  }
}

module.exports = nextConfig

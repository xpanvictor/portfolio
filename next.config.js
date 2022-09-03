/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    PUBLIC: process.env.PUBLIC,
    SITE_URL: 'https://portfolio-xpanvictor.vercel.app/'
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

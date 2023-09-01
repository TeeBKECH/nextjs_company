/** @type {import('next').NextConfig} */
module.exports = nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    CAPTCHA_CLIENT_KEY: process.env.CAPTCHA_CLIENT_KEY,
  },
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

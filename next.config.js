/** @type {import('next').NextConfig} */
module.exports = nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
}

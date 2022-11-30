/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['uploaddeimagens.com.br', 'www.google.com.br'],
  },
}

module.exports = nextConfig

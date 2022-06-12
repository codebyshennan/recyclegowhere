/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
      {
        source: '/app',
        destination: '/app/stats',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

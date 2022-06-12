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
      {
        source: '/gov',
        destination: '/gov/db',
        permanent: true,
      },
      {
        source: '/fmcg',
        destination: '/fmcg/reports',
        permanent: true,
      },
      {
        source: '/grab',
        destination: '/grab/health',
        permanent: true,
      },
      {
        source: '/partner',
        destination: '/partner/stats',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

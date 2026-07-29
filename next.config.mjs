/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/community',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/community/:slug',
        destination: '/events/:slug',
        permanent: true,
      },
      {
        source: '/projects/:slug((?!.*\\.).*)',
        destination: '/work/:slug',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

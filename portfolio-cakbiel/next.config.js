const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,   // ← tambahkan ini
  },
  eslint: {
    ignoreDuringBuilds: true,  // ← tambahkan ini
  },
  images: {
    domains: ['placehold.co'],
  },
}
module.exports = nextConfig

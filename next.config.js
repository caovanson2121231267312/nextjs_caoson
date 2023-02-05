
const nextConfig = {
  images: {
    loader: 'custom',
    unoptimized: true,
    domains: ['imgur.com'],
  },
  experimental: {
    appDir: true,
    nextScriptWorkers: true,
  },
}
// loader: 'cloudinary',
module.exports = nextConfig

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com',
      },
      {
        hostname: 'media.licdn.com',
      },
      {
        hostname: 'cdn.discordapp.com',
      },
    ],
  },
}

export default nextConfig

import * as http from '@/lib/http'

export const discordApi = http.create({
  baseURL: 'https://discord.com/api',
  headers: {
    Authorization: `Bot ${process.env.DISCORD_API_KEY}`,
  },
})

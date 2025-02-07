import { GUILD_ID } from '@/consts'
import { discordApi } from './api'
import type { DiscordMember } from './types'

interface Options {
  limit?: number
}

export const getServerMembers = ({
  limit = 200,
}: Options): Promise<DiscordMember[]> => {
  return discordApi
    .get(`/guilds/${GUILD_ID}/members`, {
      params: {
        limit,
      },
    })
    .then(({ data }) => data)
}

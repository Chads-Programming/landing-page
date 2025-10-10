import { DISCORD_BASE_IMAGE_URL } from '@/consts'
import type { DiscordMember } from './types'

const getMemberAvatarUrl = (member: DiscordMember) => {
  return member.user.avatar
    ? `${DISCORD_BASE_IMAGE_URL}/avatars/${member.user.id}/${member.user.avatar}.png`
    : '/discord-avatar.webp'
}

export { getMemberAvatarUrl }

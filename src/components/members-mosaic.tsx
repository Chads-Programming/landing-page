'use server'

import {
  CONSPIRADOR_ROLE,
  DISCORD_BASE_IMAGE_URL,
  GIGA_CHAD_ROLE,
} from '@/consts'
import { getServerMembers } from '@/server/discord/get-server-members'
import type { DiscordMember } from '@/server/discord/types'
import { IconCloud } from './ui/icon-cloud'

const MAX_LIMIT = 200

const filterOnlyGigachadMembers = (members: DiscordMember[]) =>
  members.filter((member: DiscordMember) => {
    return (
      member.roles.includes(GIGA_CHAD_ROLE) ||
      member.roles.includes(CONSPIRADOR_ROLE)
    )
  })

export const MembersMosaic = async () => {
  const members = await getServerMembers({ limit: MAX_LIMIT }).then(
    filterOnlyGigachadMembers,
  )

  return (
    <div className="[&>*]:w-[700px] [&>*]:h-[700px]">
      <IconCloud
        images={members.map((member) =>
          member.user.avatar
            ? `${DISCORD_BASE_IMAGE_URL}/avatars/${member.user.id}/${member.user.avatar}.png`
            : '/discord-avatar.webp',
        )}
      />
    </div>
  )
}

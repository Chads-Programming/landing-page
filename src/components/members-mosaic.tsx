'use server'

import { GIGA_CHAD_ROLE } from '@/consts'
import { getServerMembers } from '@/server/discord/get-server-members'
import type { DiscordMember } from '@/server/discord/types'

const MAX_LIMIT = 200

const filterOnlyGigachadMembers = (members: DiscordMember[]) =>
  members.filter((member: DiscordMember) => {
    return member.roles.includes(GIGA_CHAD_ROLE)
  })

export const MembersMosaic = async () => {
  const members = await getServerMembers({ limit: MAX_LIMIT }).then(
    filterOnlyGigachadMembers,
  )

  return (
    <ul>
      {members.map((member) => (
        <li key={member.user.id}>{member.nick ?? member.user.username}</li>
      ))}
    </ul>
  )
}

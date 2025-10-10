import { CONSPIRADOR_ROLE, GIGA_CHAD_ROLE, ULTRA_CHAD_ROLE } from '@/consts'
import type { DiscordMember } from './types'

const filterOnlyGigachadMembers = (members: DiscordMember[]) =>
  members.filter((member: DiscordMember) => {
    return (
      member.roles.includes(GIGA_CHAD_ROLE) ||
      member.roles.includes(CONSPIRADOR_ROLE)
    )
  })

const filterUltraChadMembers = (members: DiscordMember[]) => {
  return members.filter((member: DiscordMember) => {
    return member.roles.includes(ULTRA_CHAD_ROLE)
  })
}

export { filterOnlyGigachadMembers, filterUltraChadMembers }

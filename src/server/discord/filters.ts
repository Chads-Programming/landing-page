import {
  CONSPIRADOR_ROLE,
  GIGA_CHAD_ROLE,
  HALL_OF_FAME_CHANNEL_ROLE_ID,
  ULTRA_CHAD_ROLE,
} from '@/consts'
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

const filterHallOfFameMembers = (members: DiscordMember[]) => {
  return members.filter((member: DiscordMember) => {
    return member.roles.includes(HALL_OF_FAME_CHANNEL_ROLE_ID)
  })
}

export {
  filterOnlyGigachadMembers,
  filterUltraChadMembers,
  filterHallOfFameMembers,
}

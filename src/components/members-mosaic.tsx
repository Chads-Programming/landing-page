'use server'

import { DISCORD_BASE_IMAGE_URL } from '@/consts'
import { filterOnlyGigachadMembers } from '@/server/discord/filters'
import { getServerMembers } from '@/server/discord/get-server-members'
import { IconCloud } from './ui/icon-cloud'

const MAX_LIMIT = 200

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

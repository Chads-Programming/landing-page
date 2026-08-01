'use server'

import { filterOnlyGigachadMembers } from '@/server/discord/filters'
import { getServerMembers } from '@/server/discord/get-server-members'
import { getMemberAvatarUrl } from '@/server/discord/helpers'
import { IconCloud } from './ui/icon-cloud'

const MAX_LIMIT = 200

export const MembersMosaic = async () => {
  const members = await getServerMembers({ limit: MAX_LIMIT }).then(
    filterOnlyGigachadMembers,
  )

  return (
    <div className="[&>*]:w-[700px] [&>*]:h-[700px]">
      <IconCloud images={members.map(getMemberAvatarUrl)} />
    </div>
  )
}

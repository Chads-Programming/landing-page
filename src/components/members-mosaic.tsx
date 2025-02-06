'use server'

import {
  CONSPIRADOR_ROLE,
  DISCORD_BASE_IMAGE_URL,
  GIGA_CHAD_ROLE,
} from '@/consts'
import { getServerMembers } from '@/server/discord/get-server-members'
import type { DiscordMember } from '@/server/discord/types'
import { IconCloud } from './icon-cloud'

const MAX_LIMIT = 200

const filterOnlyGigachadMembers = (members: DiscordMember[]) =>
  members.filter((member: DiscordMember) => {
    return (
      member.roles.includes(GIGA_CHAD_ROLE) ||
      member.roles.includes(CONSPIRADOR_ROLE)
    )
  })

interface MembersMosaicProps extends React.ComponentProps<'div'> {}

export const MembersMosaic = async ({
  className,
  ...props
}: MembersMosaicProps) => {
  const members = await getServerMembers({ limit: MAX_LIMIT }).then(
    filterOnlyGigachadMembers,
  )

  return (
    <div className="[&>*]:w-[700px] [&>*]:h-[700px]">
      <IconCloud
        images={members.map((member) =>
          member.user.avatar
            ? `${DISCORD_BASE_IMAGE_URL}/avatars/${member.user.id}/${member.user.avatar}.webp`
            : '/discord-avatar.webp',
        )}
      />
    </div>
  )

  // const orbits = [
  //   {
  //     id: 1,
  //     iconSize: 55,
  //     radius: 180,
  //     items: members.slice(0, members.length / 2 - 1),
  //   },
  //   {
  //     id: 2,
  //     iconSize: 40,
  //     radius: 260,
  //     reverse: true,
  //     items: members.slice(members.length / 2),
  //   },
  // ]

  // return (
  //   <div
  //     className="flex flex-col justify-center items-center h-[600px]"
  //     {...props}
  //   >
  //     <Image
  //       src="/chadprogramming.webp"
  //       width={256}
  //       height={256}
  //       alt="community logo"
  //       className="rounded-full"
  //       draggable={false}
  //     />
  //     {orbits.map(({ items: members, id, ...orbit }) => (
  //       <OrbitingCircles key={id} path={false} {...orbit}>
  //         {members.map((member) => (
  //           <Image
  //             key={member.user.id}
  //             src={
  //               member.user.avatar
  //                 ? `${DISCORD_BASE_IMAGE_URL}/avatars/${member.user.id}/${member.user.avatar}.webp?s=100`
  //                 : '/discord-avatar.webp'
  //             }
  //             alt={member.nick ?? member.user.username}
  //             width={100}
  //             height={100}
  //             className="rounded-full"
  //           />
  //         ))}
  //       </OrbitingCircles>
  //     ))}
  //   </div>
  // )
}

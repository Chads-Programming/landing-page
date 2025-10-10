'use server'

import { AnimateInView } from '@/components/ui/animate-in-view'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { filterUltraChadMembers } from '@/server/discord/filters'
import { getServerMembers } from '@/server/discord/get-server-members'
import { getMemberAvatarUrl } from '@/server/discord/helpers'
import type { DiscordUser } from '@/server/discord/types'
import Image from 'next/image'

const MAX_LIMIT = 500

const alphabeticalSort = (
  a: { user: DiscordUser },
  b: { user: DiscordUser },
) => {
  return a.user.username.localeCompare(b.user.global_name || b.user.username)
}

export const ColaboratorsSection = async () => {
  const members = await getServerMembers({ limit: MAX_LIMIT })
    .then(filterUltraChadMembers)
    .then((members) => members.sort(alphabeticalSort))

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="container px-4 mx-auto relative z-20">
        <AnimatedHeading
          title="Notable Members"
          subtitle="Meet our distinguished members who have made significant contributions to our community"
        />

        <div className="flex flex-wrap justify-center gap-6">
          {members.map((member, i) => (
            <AnimateInView
              key={member.user.id}
              delay={i * 0.1}
              className="colaborator-item"
            >
              <div className="relative group colaborator-item">
                <div className="absolute top-0 flex w-full justify-center">
                  <div className="left-0 group-hover:h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
                </div>
                <div className="flex h-full items-center justify-center rounded-md border border-transparent group-hover:border-solid group-hover:border-zinc-800/40">
                  <article className="text-center p-6 group relative overflow-hidden">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-600 group-hover:bg-gradient-to-br from-green-400 to-neutral-800 p-1 transition-all ease-in">
                      <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
                        <Image
                          src={getMemberAvatarUrl(member)}
                          alt={`${member.user.username} avatar image`}
                          width={64}
                          height={64}
                          className="rounded-full grayscale group-hover:grayscale-0 transition-all ease-in"
                          draggable={false}
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-1 inline-flex group-hover:animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-transparent">
                      {member.user.global_name || member.user.username}
                    </h3>
                  </article>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}

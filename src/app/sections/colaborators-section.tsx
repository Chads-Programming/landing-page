'use server'

import { AnimateInView } from '@/components/ui/animate-in-view'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { getCollaboratorsLeaderBoard } from '@/server/github/get-collaborators-leaderboard'
import Image from 'next/image'
import Link from 'next/link'
export const ColaboratorsSection = async () => {
  const leaderboard = await getCollaboratorsLeaderBoard()

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="container px-4 mx-auto relative z-20">
        <AnimatedHeading
          title="Notable Members"
          subtitle="Meet some of our outstanding community contributors"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaderboard.map((member, i) => (
            <AnimateInView key={member.login} delay={i * 0.1}>
              <div className="relative group">
                <div className="absolute top-0 flex w-full justify-center">
                  <div className="left-0 group-hover:h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
                </div>
                <div className="flex h-full items-center justify-center rounded-md border border-transparent group-hover:border-solid group-hover:border-zinc-800/40">
                  <Link href={member.html_url} target="_blank">
                    <article className="text-center p-6 group relative overflow-hidden">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-600 group-hover:bg-gradient-to-br from-green-400 to-neutral-800 p-1 transition-all ease-in">
                        <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
                          <Image
                            src={member.avatar_url}
                            alt={member.login}
                            width={64}
                            height={64}
                            className="rounded-full grayscale group-hover:grayscale-0 transition-all ease-in"
                            draggable={false}
                          />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-1 inline-flex group-hover:animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-transparent">
                        {member.login}
                      </h3>
                      <div className="text-sm text-zinc-500">
                        {member.totalContributions}+ Contributions
                      </div>
                    </article>
                  </Link>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}

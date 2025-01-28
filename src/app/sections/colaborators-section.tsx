'use client'

import { AnimateInView } from '@/components/animate-in-view'
import { AnimatedHeading } from '@/components/animated-heading'
import type { LeaderboardItem } from '@/server/github/types'
import { GithubIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const ColaboratorsSection = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>([])

  useEffect(() => {
    fetch('/api/leaderboard')
      .then((res) => res.json())
      .then(({ data }) => setLeaderboard(data))
  }, [])

  return (
    <section className="py-20 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B1E] via-[#070812] to-black opacity-90" />
      <div className="container px-4 mx-auto relative z-20">
        <AnimatedHeading
          title="Notable Members"
          subtitle="Meet some of our outstanding community contributors"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaderboard.map((member, i) => (
            <AnimateInView key={member.login} delay={i * 0.1}>
              <article className="relative overflow-hidden rounded-xl bg-zinc-800/50 p-6 group">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1">
                    <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
                      <Image
                        src={member.avatar_url}
                        alt={member.login}
                        width={64}
                        height={64}
                        className="rounded-full"
                        draggable={false}
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {member.login}
                  </h3>
                  <Link href={member.html_url} className="inline-flex ">
                    <GithubIcon className="w-8 h-8 text-white" />
                  </Link>
                  <div className="text-sm text-zinc-500">
                    {member.totalContributions}+ Contributions
                  </div>
                </div>
              </article>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}

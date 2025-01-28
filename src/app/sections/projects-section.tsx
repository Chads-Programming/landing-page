'use client'

import { AnimateInView } from '@/components/animate-in-view'
import { SectionHeading } from '@/components/section-heading'
import { SpotlightCard } from '@/components/spotlight-card'
import type { Repository } from '@/server/github/types'
import { Star } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Repository[]>([])

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then(({ data }) => setProjects(data))
  }, [])

  return (
    <section className="py-20 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B1E] via-[#070812] to-black opacity-90" />
      <div className="container px-4 mx-auto relative z-20">
        <AnimateInView>
          <SectionHeading
            title="Featured Projects"
            subtitle="Check out some of the amazing projects built by our community members"
          />
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimateInView key={project.name} delay={i * 0.1}>
              <Link href={project.url} target="_blank">
                <SpotlightCard>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.fullname}
                  </h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="text-sm text-zinc-500">
                    {project.languages.map((lang) => (
                      <span
                        className="px-2"
                        key={`${project.fullname}-${lang}`}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-zinc-800">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-zinc-400">
                        {project.stargazersCount}
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}

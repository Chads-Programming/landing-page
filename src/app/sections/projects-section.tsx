'use server'

import { AnimateInView } from '@/components/ui/animate-in-view'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { LangIcon } from '@/components/ui/lang-icon'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { getOrganizationRepositories } from '@/server/github/get-org-repository'
import { Star } from 'lucide-react'
import Link from 'next/link'

const MIN_STARS = 3

export const ProjectsSection = async () => {
  const projects = await getOrganizationRepositories()
    .then((repos) =>
      repos.filter(
        (repo) => repo.stargazersCount >= MIN_STARS && !repo.archived,
      ),
    )
    .then((repos) =>
      repos.sort(
        (aRepo, bRepo) => aRepo.stargazersCount - bRepo.stargazersCount,
      ),
    )

  return (
    <section className="py-20 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-[#11111b] to-black opacity-90" />
      <div className="container px-4 mx-auto relative z-20">
        <AnimatedHeading
          title="Featured Projects"
          subtitle="Check out some of the amazing projects built by our community members"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimateInView key={project.name} delay={i * 0.1}>
              <Link key={project.name} href={project.htmlUrl} target="_blank">
                <SpotlightCard>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="text-sm text-zinc-500 inline-flex flex-wrap gap-2 items-center">
                    {project.languages.map((lang) => (
                      <div className="px-2" key={`${project.fullname}-${lang}`}>
                        <LangIcon lang={lang} />
                      </div>
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

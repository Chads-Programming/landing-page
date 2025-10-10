'use server'

import { AnimateInView } from '@/components/ui/animate-in-view'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { LangIcon } from '@/components/ui/lang-icon'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { getOrganizationRepositories } from '@/server/github/get-org-repository'
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
      <div className="absolute inset-0 bg-background" />
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
                      <div
                        className="font-mono text-white text-xs py-1 px-2 rounded-lg bg-neutral-700/50 hover:bg-secondary border border-neutral-700 text-primary-content gap-2 inline-flex items-center font-medium"
                        key={`${project.fullname}-${lang}`}
                      >
                        <LangIcon lang={lang} />
                        <span>{lang}</span>
                      </div>
                    ))}
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

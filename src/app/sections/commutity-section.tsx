import { MembersMosaic } from '@/components/members-mosaic'
import { AnimateInView } from '@/components/ui/animate-in-view'
import { Github } from '@/icons/github'
import { PlayIcon } from 'lucide-react'
import Link from 'next/link'

export const CommunitySection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="container px-4 mx-auto relative z-20">
        <AnimateInView>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex flex-col gap-2 justify-center lg:justify-start w-full lg:w-auto">
              <AnimateInView>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4 [text-shadow:_0_2px_10px_rgb(139_92_246_/_20%)]">
                    Backed by a Thriving Community
                  </h2>
                  <p className="text-zinc-400 md:max-w-2xl mx-auto">
                    We're a thriving ecosystem of developers, designers, and
                    innovators united by our passion for creating exceptional
                    digital experiences and pushing the boundaries of
                    technology.
                  </p>
                </div>
              </AnimateInView>

              <div className="w-full inline-flex justify-center gap-3 text-sm">
                <Link
                  href="https://github.com/Chads-Programming"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-neutral-200 px-3 py-2 text-sm font-bold duration-300 hover:bg-black hover:text-white dark:bg-neutral-800 dark:hover:bg-white dark:hover:text-black"
                >
                  <Github className="h-4 w-4 fill-current transition-transform duration-500 group-hover:rotate-[-360deg]" />
                  <span className="flex items-center justify-center pt-0.5">
                    Contribute on GitHub
                  </span>
                </Link>
                <Link
                  href="https://www.youtube.com/@ChadsProgramming"
                  className="group flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold duration-300 hover:bg-red-600 bg-neutral-800"
                >
                  <PlayIcon className="h-4 w-4 fill-current transition-transform duration-500 group-hover:rotate-[-360deg]" />
                  <span className="flex items-center justify-center pt-0.5">
                    Follow us on Youtube
                  </span>
                </Link>
              </div>
            </div>

            <MembersMosaic />
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}

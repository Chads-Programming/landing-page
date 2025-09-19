import { MembersMosaic } from '@/components/members-mosaic'
import { LinkButton } from '@/components/ui/link-button'
import Prism from '@/components/ui/prism'
import { TextAnimatedGradient } from '@/components/ui/text-animated'
import { Discord } from '@/icons/discord'
import { Github } from '@/icons/github'
import { YouTube } from '@/icons/youtube'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="container w-full px-4 mx-auto relative z-20 flex flex-wrap md:flex-nowrap justify-center items-center">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Image
            src="/chadprogramming.webp"
            width={256}
            height={256}
            alt="community logo"
            className="rounded-full self-center"
            draggable={false}
          />
          <div className="relative py-8">
            <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tighter text-white mb-6 [text-shadow:_0_2px_10px_rgb(139_92_246_/_20%)] uppercase">
              Chads <TextAnimatedGradient>Programming</TextAnimatedGradient>
              <br />
              <TextAnimatedGradient>Discord</TextAnimatedGradient> Community
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl">
              Join our 24/7 active community of passionate developers and tech
              enthusiasts. Share knowledge, collaborate on projects, and grow
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkButton url="https://discord.gg/FSKeeDhMNN">
                <Discord className="w-6 h-6" /> Join Discord
              </LinkButton>

              <LinkButton
                url="https://github.com/Chads-Programming"
                color="dark"
                reverse
              >
                <Github className="w-6 h-6" /> Github
              </LinkButton>

              <LinkButton
                url="https://www.youtube.com/@ChadsProgramming"
                color="dark"
                reverse
              >
                <YouTube className="w-6 h-6" /> Youtube
              </LinkButton>
            </div>
          </div>
        </div>
        <MembersMosaic />
      </div>
      <div className="absolute w-full h-full">
        <Prism
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="lighten"
          colors={['#16a34a', '#4d3dff', '#ffffff']}
        />
      </div>
    </div>
  )
}

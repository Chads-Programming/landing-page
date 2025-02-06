import { MembersMosaic } from '@/components/members-mosaic'
import { TextAnimatedGradient } from '@/components/text-animated'
import { Discord } from '@/icons/discord'
import { Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <div
      className="relative overflow-hidden bg-gradient-to-b from-black via-[#070812] to-[#0A0B1E]"
      style={{
        backgroundImage: `
        radial-gradient(circle at 50% 50%, rgba(67, 24, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%),
        linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(10, 11, 30, 1))
      `,
      }}
    >
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
          <div className="relative py-8 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/20 before:via-blue-500/20 before:to-purple-500/20 before:blur-3xl before:-z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tighter text-white mb-6 [text-shadow:_0_2px_10px_rgb(139_92_246_/_20%)] uppercase">
              Chads <TextAnimatedGradient>Programming</TextAnimatedGradient>
              <br />
              Community Hub
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl">
              Join our 24/7 active community of passionate developers and tech
              enthusiasts. Share knowledge, collaborate on projects, and grow
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://discord.gg/FSKeeDhMNN" target="_blank">
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button className="text-lg relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full gap-4 w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 font-medium text-gray-50 backdrop-blur-3xl">
                    <Discord className="w-6 h-6" /> Join Discord
                  </span>
                </button>
              </Link>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Users className="h-4 w-4" />
                <span>Already have &gt;100 members</span>
              </div>
            </div>
          </div>
        </div>
        <MembersMosaic />
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-1/2 top-[20%] -translate-y-1/2 w-1/2 aspect-square">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-3xl rotate-45" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0B1E] to-transparent" />
    </div>
  )
}

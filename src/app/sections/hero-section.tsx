'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-b from-black via-[#070812] to-[#0A0B1E]"
      style={{
        backgroundImage: `
        radial-gradient(circle at 50% 50%, rgba(67, 24, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%),
        linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(10, 11, 30, 1))
      `,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className="container px-4 mx-auto relative z-20 flex flex-wrap md:flex-nowrap justify-center md:justify-between pb-20 md:pb-0 gap-10">
        <div className="flex flex-col items-start justify-center md:min-h-[90vh] max-w-3xl md:pb-20">
          <motion.div
            className="relative py-8 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/20 before:via-blue-500/20 before:to-purple-500/20 before:blur-3xl before:-z-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 [text-shadow:_0_2px_10px_rgb(139_92_246_/_20%)] uppercase">
              Chads Programming
              <br />
              Community Hub
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl">
              Join our 24/7 active community of passionate developers and tech
              enthusiasts. Share knowledge, collaborate on projects, and grow
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://discord.gg/FSKeeDhMNN" target="_blank">
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button className="text-lg relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 font-medium text-gray-50 backdrop-blur-3xl">
                    Join Discord
                  </span>
                </button>
              </Link>

              <div className="text-zinc-500 flex items-center">
                <span className="mr-2">•</span>
                Already have {'>'}100 members
              </div>
            </div>
          </motion.div>
        </div>
        <Image
          src="/chadprogramming.webp"
          width={256}
          height={256}
          alt="community logo"
          className="rounded-full self-center"
        />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 aspect-square"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-3xl rotate-45" />
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0B1E] to-transparent" />
    </motion.div>
  )
}

import Image from 'next/image'

import { AnimateInView } from '@/components/animate-in-view'
import { SectionHeading } from '@/components/section-heading'
import sponsors from '@/sponsors'
import Link from 'next/link'

export const Sponsorsection = () => {
  return (
    <section className="py-20 relative border-t border-zinc-800 bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B1E] via-[#070812] to-black opacity-90" />
      <div className="container px-4 mx-auto relative z-20">
        <AnimateInView>
          <SectionHeading
            title="Our Sponsors"
            subtitle="Companies that support our community"
          />
        </AnimateInView>

        <div className="flex flex-wrap gap-9 items-center justify-center">
          {sponsors.map((sponsor, i) => (
            <AnimateInView key={sponsor.name} delay={i * 0.1}>
              <Link href={sponsor.url} target="_blank">
                <div className="w-full h-14 rounded-lg flex items-center justify-center p-4 transition-all group">
                  <Image
                    src={sponsor.imageUrl}
                    alt={sponsor.name}
                    width={64}
                    height={65}
                    className="opacity-50 rounded-full group-hover:opacity-100 transition-opacity"
                  />
                  <span className="text-pretty ml-2 text-sm font-semibold text-white">
                    {sponsor.name}
                  </span>
                </div>
              </Link>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}

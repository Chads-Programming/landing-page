'use server'
import { AnimateInView } from '@/components/ui/animate-in-view'
import { SectionHeading } from '@/components/ui/section-heading'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import testimonials from '@/testimonials'
import { MessageSquare } from 'lucide-react'
import Image from 'next/image'

export const TestimonialsSection = async () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="container px-4 mx-auto relative z-20">
        <AnimateInView>
          <SectionHeading
            title="Community Testimonials"
            subtitle="What our members say about the community"
          />
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimateInView key={testimonial.author} delay={i * 0.1}>
              <SpotlightCard>
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-neutral-800 p-[2px]">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || '/placeholder.svg'}
                          alt={`Photo of ${testimonial.author}`}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-green-600 rounded-full p-1">
                      <MessageSquare className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      {testimonial.author}
                    </div>
                    <div className="text-zinc-500 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <blockquote className="text-zinc-300 mb-4">
                  "{testimonial.text}"
                </blockquote>
              </SpotlightCard>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { AnimateInView } from './animate-in-view'
import { SectionHeading } from './section-heading'

interface Props {
  title: string
  subtitle: string
}

export const AnimatedHeading = ({ title, subtitle }: Props) => {
  return (
    <AnimateInView>
      <SectionHeading title={title} subtitle={subtitle} />
    </AnimateInView>
  )
}

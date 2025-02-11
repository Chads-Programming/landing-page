'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface AnimateInViewProps {
  children: ReactNode
  delay?: number
}

export function AnimateInView({ children, delay = 0 }: AnimateInViewProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

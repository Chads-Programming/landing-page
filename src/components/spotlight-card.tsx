'use client'

import { motion } from 'framer-motion'
import type React from 'react'
import { type PropsWithChildren, useRef, useState } from 'react'

export const SpotlightCard: React.FC<PropsWithChildren> = ({ children }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-xl bg-zinc-800/50 p-6 group"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-xl transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
          boxShadow: `inset 0 0 0 1px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.2)`,
        }}
      />
      {children}
    </motion.div>
  )
}

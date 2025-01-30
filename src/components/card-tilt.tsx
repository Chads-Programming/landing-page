'use client'

import { throttle } from '@/lib/throttle'
import { useCallback, useState } from 'react'

interface Props {
  children: React.ReactNode
}

export const CardTilt = ({ children }: Props) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const onMouseMove = useCallback(
    throttle((e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget
      const box = card.getBoundingClientRect()
      const x = e.clientX - box.left
      const y = e.clientY - box.top
      const centerX = box.width / 2
      const centerY = box.height / 2
      const rotateX = (y - centerY) / 4
      const rotateY = (centerX - x) / 4

      setRotate({ x: rotateX, y: rotateY })
    }, 100),
    [],
  )

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <>
      <div
        className="card relative h-auto w-full transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
        }}
      >
        <div className="group relative overflow-hidden rounded-xl bg-zinc-800/50 p-6 group">
          <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 rounded-xl transition duration-300 opacity-0 group-hover:opacity-100" />
          {children}
        </div>
      </div>
    </>
  )
}

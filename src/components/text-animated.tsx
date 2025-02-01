interface Props {
  children: React.ReactNode
}

export const TextAnimatedGradient = ({ children }: Props) => {
  return (
    <span className="inline-flex animate-text-gradient bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-[200%_auto] bg-clip-text text-4xl md:text-6xl font-bold  text-transparent">
      {children}
    </span>
  )
}

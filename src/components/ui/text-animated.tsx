interface Props {
  children: React.ReactNode
}

export const TextAnimatedGradient = ({ children }: Props) => {
  return (
    <span className="inline-flex animate-text-gradient bg-primary-gradient bg-[200%_auto] bg-clip-text text-4xl md:text-6xl font-bold  text-transparent">
      {children}
    </span>
  )
}

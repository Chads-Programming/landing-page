interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4 [text-shadow:_0_2px_10px_rgb(139_92_246_/_20%)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}

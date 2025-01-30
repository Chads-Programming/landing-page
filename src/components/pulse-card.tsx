interface Props {
  children: React.ReactNode
}

export const CardPulseBorder = ({ children }: Props) => {
  return (
    <div className="relative">
      <div className="absolute top-0 flex w-full justify-center">
        <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
      </div>
      <div className="flex h-full items-center justify-center rounded-md border border-zinc-800/40">
        {children}
      </div>
    </div>
  )
}

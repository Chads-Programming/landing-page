import Link from 'next/link'

const colorMap = {
  purple:
    'bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]',
  red: 'bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FFFFFF_50%,#FF0000_100%)]',
  dark: 'bg-[conic-gradient(from_90deg_at_50%_50%,#6E7681_0%,#010409_50%,#6E7681_100%)]',
} as const

interface Props {
  url: string
  children: React.ReactNode
  color?: keyof typeof colorMap
  reverse?: boolean
}

export const LinkButton = ({
  url,
  children,
  color = 'purple',
  reverse = false,
}: Props) => {
  return (
    <Link href={url} target="_blank" className="group">
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button className="text-lg relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
        <span
          className={`absolute inset-[-1000%] ${reverse ? 'animate-[reverse_spin_2s_linear_infinite]' : 'animate-[spin_2s_linear_infinite]'} ${colorMap[color]}`}
        />
        <span className="inline-flex h-full gap-4 w-full cursor-pointer items-center justify-center rounded-lg bg-gray-950 px-8 py-1 font-medium text-gray-50 backdrop-blur-3xl">
          {children}
        </span>
      </button>
    </Link>
  )
}

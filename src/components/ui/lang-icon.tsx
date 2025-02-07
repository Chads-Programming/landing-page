import { Bash } from '@/icons/bash'
import { CSS } from '@/icons/css'
import { HTML5 } from '@/icons/html'
import { JavaScript } from '@/icons/javascript'
import { PostgreSQL } from '@/icons/pg'
import { Python } from '@/icons/python'
import { Rust } from '@/icons/rust'
import { TypeScript } from '@/icons/typescript'

const LANG_ICON_MAP = {
  PLPGSQL: PostgreSQL,
  TYPESCRIPT: TypeScript,
  JAVASCRIPT: JavaScript,
  PYTHON: Python,
  HTML: HTML5,
  CSS: CSS,
  RUST: Rust,
  SHELL: Bash,
} as const

interface Props {
  lang: string
}

export const LangIcon = ({ lang }: Props) => {
  const langKey = lang.toUpperCase()
  const defaultIcon = () => (
    <span className="font-semibold border border-border/10 p-2 rounded-md">
      {langKey}
    </span>
  )

  const LangComponent =
    langKey in LANG_ICON_MAP
      ? LANG_ICON_MAP[langKey as keyof typeof LANG_ICON_MAP]
      : defaultIcon

  return <LangComponent className="w-7 h-7" />
}

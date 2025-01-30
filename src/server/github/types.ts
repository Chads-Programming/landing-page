export interface RawRepository {
  name: string
  full_name: string
  html_url: string
  description?: string
  stargazers_count: number
  languages_url: string
  url: string
  archived: boolean
}

export interface Repository {
  name: string
  fullname: string
  htmlUrl: string
  description?: string
  stargazersCount: number
  languages: string[]
  url: string
  archived: boolean
}

export interface Contributor {
  login: string
  contributions: number
  avatar_url: string
  html_url: string
}

export type LeaderboardItem = Contributor & { totalContributions: number }

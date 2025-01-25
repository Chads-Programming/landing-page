export interface Repository {
  name: string
  full_name: string
  html_url: string
  description?: string
  stargazers_count: number
}

export interface Contributor {
  login: string
  contributions: number
  avatar_url: string
  html_url: string
}

export type LeaderboardItem = Contributor & { totalContributions: number }

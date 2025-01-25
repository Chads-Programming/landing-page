import { GITHUB_ORG_NAME } from '@/consts'
import { githubApi } from './api'
import type { Repository } from './types'

export async function getOrganizationRepositories(): Promise<Repository[]> {
  try {
    const response = await githubApi.get(`/orgs/${GITHUB_ORG_NAME}/repos`)

    return response.data.map((repo: Repository) => ({
      name: repo.name,
      full_name: repo.full_name,
      html_url: repo.html_url,
      description: repo.description,
      stargazers_count: repo.stargazers_count,
    }))
  } catch (error) {
    console.error('Error fetching repositories:', error)
    return []
  }
}

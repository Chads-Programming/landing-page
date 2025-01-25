import { GITHUB_ORG_NAME } from '@/consts'
import { githubApi } from './api'
import type { Contributor } from './types'

export async function getRepositoryContributors(
  repositoryName: string,
): Promise<Contributor[]> {
  try {
    const response = await githubApi.get(
      `/repos/${GITHUB_ORG_NAME}/${repositoryName}/contributors`,
      {
        params: {
          per_page: 100,
        },
      },
    )

    return response.data.map((contributor: Contributor) => ({
      login: contributor.login,
      contributions: contributor.contributions,
      avatar_url: contributor.avatar_url,
      html_url: contributor.html_url,
    }))
  } catch (error) {
    console.error('Error fetching contributors:', error)
    return []
  }
}

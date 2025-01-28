import { GITHUB_ORG_NAME } from '@/consts'
import { githubApi } from './api'
import type { RawRepository, Repository } from './types'

export async function getOrganizationRepositories(): Promise<Repository[]> {
  try {
    const response = await githubApi.get(`/orgs/${GITHUB_ORG_NAME}/repos`)

    const responseQuery = response.data
      .filter((repo: RawRepository) => repo.stargazers_count >= 2)
      .map(async (repo: RawRepository) => {
        const langResponse = await fetch(repo.languages_url)
        const langs = await langResponse.json().then(Object.keys)

        return {
          name: repo.name,
          fullname: repo.full_name,
          htmlurl: repo.html_url,
          description: repo.description,
          stargazersCount: repo.stargazers_count,
          languages: langs,
          url: repo.url,
        }
      })

    return Promise.all(responseQuery)
  } catch (error) {
    console.error('Error fetching repositories:', error)
    return []
  }
}

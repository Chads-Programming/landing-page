import { GITHUB_ORG_NAME } from '@/consts'
import { githubApi } from './api'
import type { RawRepository, Repository } from './types'

export async function getOrganizationRepositories(): Promise<Repository[]> {
  try {
    const response = await githubApi.get<RawRepository[]>(
      `/orgs/${GITHUB_ORG_NAME}/repos`,
    )

    const responseQuery = response.data
      .filter((repo: RawRepository) => repo.stargazers_count)
      .map(async (repo: RawRepository) => {
        const langResponse = await fetch(repo.languages_url)

        const langs = await langResponse.json().then((langsObj) => {
          return Object.keys(langsObj)
        })

        return {
          name: repo.name,
          fullname: repo.full_name,
          htmlUrl: repo.html_url,
          description: repo.description,
          stargazersCount: repo.stargazers_count,
          languages: langs,
          url: repo.url,
          archived: repo.archived,
        } as Repository
      })

    return Promise.all(responseQuery)
  } catch (error) {
    console.error('Error fetching repositories:', error)
    return []
  }
}

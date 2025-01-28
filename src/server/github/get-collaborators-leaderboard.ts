import { getOrganizationRepositories } from './get-org-repository'
import { getRepositoryContributors } from './repo-collaborators'
import type { Contributor, LeaderboardItem } from './types'

const BOT_USERS = ['turbobot-temp', 'dependabot[bot]']

export async function getCollaboratorsLeaderBoard(): Promise<
  LeaderboardItem[]
> {
  try {
    const repositories = await getOrganizationRepositories()

    const rawContributionsRequests = repositories.map((repo) =>
      getRepositoryContributors(repo.name),
    )
    const rawContributions = (
      await Promise.all(rawContributionsRequests)
    ).flat()

    const contributors = rawContributions.reduce(
      (currentLeaderboard, contributor: Contributor) => {
        const leaderboardItem = currentLeaderboard.get(contributor.login)
        const currentContributions = leaderboardItem?.totalContributions ?? 0

        if (BOT_USERS.includes(contributor.login)) {
          return currentLeaderboard
        }

        currentLeaderboard.set(contributor.login, {
          ...contributor,
          totalContributions: currentContributions + contributor.contributions,
        })

        return currentLeaderboard
      },
      new Map<string, LeaderboardItem>(),
    )

    return [...contributors.values()].sort(
      (aContributor, bContributor) =>
        bContributor.totalContributions - aContributor.totalContributions,
    )
  } catch (error) {
    console.error(error)
    return []
  }
}
export { getOrganizationRepositories }

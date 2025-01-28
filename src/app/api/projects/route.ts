import { getOrganizationRepositories } from '@/server/github/get-collaborators-leaderboard'

export async function GET() {
  const repositories = await getOrganizationRepositories()

  return Response.json({ data: repositories })
}

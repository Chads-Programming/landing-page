import { getCollaboratorsLeaderBoard } from '@/server/github/get-collaborators-leaderboard'

export async function GET() {
  const leaderboard = await getCollaboratorsLeaderBoard()

  return Response.json({ data: leaderboard })
}

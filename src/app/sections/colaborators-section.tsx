'use server'

import { getCollaboratorsLeaderBoard } from '@/services/github/get-collaborators-leaderboard'

export const ColaboratorsSection = async () => {
  const leaderboard = await getCollaboratorsLeaderBoard()

  return (
    <section>
      <ul>
        {leaderboard.map((item) => (
          <li key={item.login}>
            {item.totalContributions} - {item.login}
          </li>
        ))}
      </ul>
    </section>
  )
}

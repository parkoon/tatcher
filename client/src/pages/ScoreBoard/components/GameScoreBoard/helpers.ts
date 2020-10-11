import { Winner } from './types'

const A_TEAM_GAME_POINT = [0, 15, 30, 40]
const B_TEAM_GAME_POINT = [0, 15, 30, 40]

export function currentGamePoint(winner?: Winner): { teamAPoint: number; teamBPoint: number } {
    return {
        teamAPoint: A_TEAM_GAME_POINT[0],
        teamBPoint: A_TEAM_GAME_POINT[0],
    }
}

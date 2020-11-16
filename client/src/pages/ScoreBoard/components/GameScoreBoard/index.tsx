import React, { Ref, useState, useEffect } from 'react'

import { Container, Wrapper, Row, PlayerNameField, Point, GamePoint, Status } from './styles'

import Text from '@Components/Typography/Text'
import Button from '@Components/Button'
import { useStep } from '@Pages/ScoreBoard/context/step'
import { Winner } from './types'
import { currentGamePoint } from './helpers'

const ACTIVE_STEP = 2

const GAME_POINT = [0, 15, 30, 40]
const TIE_BREAK_POINT = 5
const MAX_GAME_SCORE = 6

type ScoreBoardTypes = {}
function GameScoreBoard({}: ScoreBoardTypes) {
    const [selectedUser, setSelectedUser] = useState('')
    const { setActiveStepValue, step } = useStep()

    const [aTeamPoint, setATeamPoint] = useState(0)
    const [bTeamPoint, setBTeamPoint] = useState(0)
    const [aTeamScore, setATeamScore] = useState(0)
    const [bTeamScore, setBTeamScore] = useState(0)

    console.log('step', step)

    useEffect(() => {
        if (aTeamPoint === GAME_POINT.length && bTeamPoint === GAME_POINT.length && aTeamPoint === bTeamPoint) {
            alert('duce')
            // no ad popup
        }

        if (aTeamPoint > GAME_POINT.length) {
            setATeamPoint(0)
            setBTeamPoint(0)
            setATeamScore((s) => s + 1)
        }
        if (bTeamPoint > GAME_POINT.length) {
            setATeamPoint(0)
            setBTeamPoint(0)
            setBTeamScore((s) => s + 1)
        }
    }, [aTeamPoint, bTeamPoint])

    useEffect(() => {
        if (aTeamScore === TIE_BREAK_POINT && bTeamScore === TIE_BREAK_POINT) {
            alert('tie')
        }

        if (aTeamScore === MAX_GAME_SCORE) {
            alert('a 팀 윈')
        }
        if (bTeamScore === MAX_GAME_SCORE) {
            alert('b 팀 윈')
        }
    }, [aTeamScore, bTeamScore])
    const handleGamePoint = (winner: Winner) => {
        const { A, B } = step[2]

        console.log(winner, A, B)

        if (winner === 'teamA') {
            setATeamPoint((p) => p + 1)
        } else {
            setBTeamPoint((p) => p + 1)
        }

        // setActiveStepValue(
        //     {
        //         A: {
        //             score: 1,
        //             point: 30,
        //         },
        //         B: {
        //             score: 1,
        //             point: 15,
        //         },
        //     },
        //     ACTIVE_STEP,
        // )
    }

    useEffect(() => {
        const { teamAPoint, teamBPoint } = currentGamePoint()
        setActiveStepValue(
            {
                A: {
                    score: 0,
                    point: teamAPoint,
                },
                B: {
                    score: 0,
                    point: teamBPoint,
                },
            },
            ACTIVE_STEP,
        )
    }, [])

    return (
        <Container>
            <Status>TIEBREAK</Status>
            <Wrapper>
                <Row>
                    <PlayerNameField isServeTurn={true}>
                        <Text>박종혁</Text>
                        <Text>김진아</Text>
                    </PlayerNameField>

                    <Point>{aTeamScore}</Point>
                    <GamePoint onClick={() => handleGamePoint('teamA')}>{aTeamPoint}</GamePoint>
                </Row>
                <Row>
                    <PlayerNameField isServeTurn={false}>
                        <Text>박종혁</Text>
                        <Text>김진아</Text>
                    </PlayerNameField>

                    <Point>{bTeamScore}</Point>
                    <GamePoint onClick={() => handleGamePoint('teamB')}>{bTeamPoint}</GamePoint>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default GameScoreBoard

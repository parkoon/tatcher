import React, { Ref, useState, useEffect } from 'react'

import { Container, Wrapper, Row, PlayerNameField, Point, GamePoint, Status } from './styles'

import Text from '@Components/Typography/Text'
import Button from '@Components/Button'
import { useStep } from '@Pages/ScoreBoard/context/step'
import { Winner } from './types'
import { currentGamePoint } from './helpers'

const ACTIVE_STEP = 2

type ScoreBoardTypes = {}
function GameScoreBoard({}: ScoreBoardTypes) {
    const [selectedUser, setSelectedUser] = useState('')
    const { setActiveStepValue, step } = useStep()

    console.log('step', step)

    const handleGamePoint = (winner: Winner) => {
        const { A, B } = step[2]

        console.log(winner, A, B)

        if (winner === 'teamA') {
            A.
        } else {

        }

        setActiveStepValue(
            {
                A: {
                    score: 1,
                    point: 15,
                },
                B: {
                    score: 1,
                    point: 15,
                },
            },
            ACTIVE_STEP,
        )
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

                    <Point>{step[2].A.score}</Point>
                    <GamePoint onClick={() => handleGamePoint('teamA')}>{step[2].A.point}</GamePoint>
                </Row>
                <Row>
                    <PlayerNameField isServeTurn={false}>
                        <Text>박종혁</Text>
                        <Text>김진아</Text>
                    </PlayerNameField>

                    <Point>{step[2].B.score}</Point>
                    <GamePoint onClick={() => handleGamePoint('teamB')}>{step[2].B.point}</GamePoint>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default GameScoreBoard

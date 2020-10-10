import React from 'react'

import { Wrapper } from './styles'

import TennisImageCard from '@Pages/ScoreBoard/components/TennisImageCard'
import { GameType } from '@Pages/ScoreBoard/types'
import { useStep } from '@Pages/ScoreBoard/context/step'

function SingleDoubleSelector() {
    const { setActiveStepValue, next, activeStep } = useStep()

    const handleGameType = (type: GameType) => {
        setActiveStepValue(type)
        next()
    }

    return activeStep === 0 ? (
        <Wrapper>
            <TennisImageCard onClick={() => handleGameType('single')} source="/images/tennis-single.jpg" />
            <TennisImageCard onClick={() => handleGameType('double')} source="/images/tennis-double.jpg" />
        </Wrapper>
    ) : null
}

export default SingleDoubleSelector

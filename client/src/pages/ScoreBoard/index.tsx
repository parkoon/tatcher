import React, { useContext, useState } from 'react'

import Container from '@Components/Container'
import StepBar from './components/StepBar'
import SingleDoubleSelector from './components/SingleDoubleSelector'
import { StepProvider } from './context/step'

const steps = ['단/복식 선택', '선수 입력', '스코어 작성']

function ScoreBoardPage() {
    return (
        <StepProvider maxStep={2}>
            <Container>
                <StepBar steps={steps} />

                <SingleDoubleSelector />
            </Container>
        </StepProvider>
    )
}

export default ScoreBoardPage

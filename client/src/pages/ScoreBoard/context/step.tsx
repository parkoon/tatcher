import React, { createContext, useContext, useReducer, useState } from 'react'
import { GameType, GameScore } from '../types'

type Step = {
    0: GameType
    1: {
        A: string[]
        B: string[]
    }
    2: {
        A: GameScore
        B: GameScore
    }
}

type State = {
    gameType: GameType
    member: {
        teamA: string[]
        teamB: string[]
    }
    count: {
        teamA: GameScore
        teamB: GameScore
    }
}

type Action = { type: 'SET_GAMETYPE'; payload: GameType }
const initialState: State = {
    gameType: 'double',
    member: {
        teamA: [''],
        teamB: [''],
    },
    count: {
        teamA: {
            point: 0,
            score: 0,
        },
        teamB: {
            point: 0,
            score: 0,
        },
    },
}

type StepContextType = {
    go(index: number): void
    next(): void
    back(): void
    setActiveStepValue(payload: any, stepCount?: number): void
    activeStep: number
    step: Step
}
export const StepContext = createContext({} as StepContextType)

type StepProviderProps = {
    children: React.ReactNode
    maxStep: number
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        default:
            return state
    }
}
export const StepProvider: React.FC<StepProviderProps> = ({ children, maxStep }) => {
    const [activeStep, setActiveStep] = useState(0)
    const [step, setStep] = useState<Step>({
        0: 'double',
        1: {
            A: [''],
            B: [''],
        },
        2: {
            A: {
                point: 0,
                score: 0,
            },
            B: {
                point: 0,
                score: 0,
            },
        },
    })

    const [state, dispatch] = useReducer(reducer, initialState)
    const next = () => {
        setActiveStep((prevActiveStep) => {
            if (prevActiveStep === maxStep) return prevActiveStep
            return prevActiveStep + 1
        })
    }

    const back = () => {
        setActiveStep((prevActiveStep) => {
            if (prevActiveStep === 1) return prevActiveStep
            return prevActiveStep - 1
        })
    }

    const go = (index: number) => {
        setActiveStep(index)
    }

    const setActiveStepValue = (payload: any, stepCount?: number) => {
        setStep({
            ...step,
            [stepCount ? stepCount : activeStep]: payload,
        })
    }

    return (
        <StepContext.Provider
            value={{
                next,
                back,
                go,
                activeStep,
                setActiveStepValue,
                step,
            }}
        >
            {children}
        </StepContext.Provider>
    )
}

export function useStep() {
    const context = useContext(StepContext)
    return context
}

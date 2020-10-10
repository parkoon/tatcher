import React, { createContext, useContext, useState } from 'react'
import { GameType } from '../types'

type GameScore = {
    point: number
    score: number
}
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
type StepContextType = {
    go(index: number): void
    next(): void
    back(): void
    setActiveStepValue(payload: any): void
    activeStep: number
    step: Step
}
export const StepContext = createContext({} as StepContextType)

type StepProviderProps = {
    children: React.ReactNode
    maxStep: number
}
export const StepProvider: React.FC<StepProviderProps> = ({ children, maxStep }) => {
    const [activeStep, setActiveStep] = useState(0)
    const [step, setStep] = useState({} as Step)
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

    const setActiveStepValue = (payload: any) => {
        setStep({
            ...step,
            [activeStep]: payload,
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
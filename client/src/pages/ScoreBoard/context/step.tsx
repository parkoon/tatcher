import React, { createContext, useContext, useState } from 'react'

type StepContextType = {
    go(index: number): void
    next(): void
    back(): void
    setActiveStepValue(payload: any): void
    activeStep: number
}
export const StepContext = createContext({} as StepContextType)

const MAX_STEP = 2
type StepProviderProps = {
    children: React.ReactNode
    maxStep: number
}
export const StepProvider: React.FC<StepProviderProps> = ({ children, maxStep }) => {
    const [activeStep, setActiveStep] = useState(0)
    const [step, setStep] = useState({})

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

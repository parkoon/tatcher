import React from 'react'
import { MdCheck, MdCreate } from 'react-icons/md'

import { IconWrapper, Item, Wrapper } from './styles'
import Text from '@Components/Typography/Text'
import { useStep } from '@Pages/ScoreBoard/context/step'

type StepBarProps = {
    steps: string[]
}
function StepBar({ steps }: StepBarProps) {
    const { activeStep, go } = useStep()

    return (
        <>
            <Wrapper>
                <ul>
                    {steps.map((step, index) => (
                        <Step
                            onClick={() => go(index)}
                            title={step}
                            active={index <= activeStep}
                            done={index + 1 <= activeStep}
                        />
                    ))}
                </ul>
            </Wrapper>
        </>
    )
}

type StepProps = {
    title: string
    active: boolean
    done: boolean
    onClick(): void
}
function Step({ title, active, done, onClick }: StepProps) {
    return (
        <Item onClick={onClick}>
            <IconWrapper active={active}>
                {done ? <MdCheck color="#fff" size={20} /> : <MdCreate color="#fff" size={20} />}
            </IconWrapper>
            <Text bold>{title}</Text>
        </Item>
    )
}

export default StepBar

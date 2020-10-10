import React from 'react'

import Text from '@Components/Typography/Text'
import { palette } from '@Helpers/palette'
import { Container, Wrapper } from './styles'

type TextInput = {
    label: string
    name: string
    error?: boolean | string
    helperText?: string
}
function TextInput({ label, helperText, name, ...props }: TextInput) {
    const helperTextColor = props.error ? palette.error : palette.black

    helperText = typeof props.error === 'string' ? props.error : helperText
    return (
        <Container>
            <Wrapper {...props}>
                <input required name={name} />
                <label>{label}</label>
            </Wrapper>
            <Text fontSize="sm" color={helperTextColor}>
                {helperText}
            </Text>
        </Container>
    )
}

export default TextInput

import React from 'react'

import Text from '@Components/Typography/Text'
import { palette } from '@Helpers/palette'
import { Container } from './styles'

type TextInput = {
    label: string
    error?: boolean
    helperText?: string
}
function TextInput({ label, helperText, ...props }: TextInput) {
    const helperTextColor = props.error ? palette.error : palette.black
    return (
        <Container {...props}>
            <input required />
            <label>{label}</label>
            <Text color={helperTextColor}>{helperText}</Text>
        </Container>
    )
}

export default TextInput

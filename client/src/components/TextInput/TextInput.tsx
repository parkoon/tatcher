import React from 'react'

import Text from '@Components/Typography/Text'
import { Container } from './styles'

type TextInput = {
    label: string
    error?: boolean
    helperText?: string
}
function TextInput({ label, helperText, ...props }: TextInput) {
    return (
        <Container {...props}>
            <input required />
            <label>{label}</label>
            <Text>{helperText}</Text>
        </Container>
    )
}

export default TextInput

import React from 'react'

import { Container } from './styles'

type TextInput = {
    label: string
}
function TextInput({ label }: TextInput) {
    return (
        <Container>
            <input required />
            <label>{label}</label>
        </Container>
    )
}

export default TextInput

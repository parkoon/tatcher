import React from 'react'

import { Wrapper } from './styles'

type TextButtonProps = {
    children: React.ReactNode
}
function TextButton({ children }: TextButtonProps) {
    return <Wrapper>{children}</Wrapper>
}

export default TextButton

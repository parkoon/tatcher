import React from 'react'

import { TextProps } from './types'
import { TextWrapper } from './styles'

function Text({ children, ...props }: TextProps) {
    return <TextWrapper {...props}>{children}</TextWrapper>
}

export default Text

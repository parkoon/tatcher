import React from 'react'

import { Wrapper } from './styles'
import { MarginSize } from '@Helpers/theme'

type VerticalSpacingProps = {
    children: React.ReactNode
    top?: boolean
    bottom?: boolean
    size?: MarginSize
}
function VerticalSpacing({ children, size, ...props }: VerticalSpacingProps) {
    return (
        <Wrapper size={size || 'base'} {...props}>
            {children}
        </Wrapper>
    )
}

export default VerticalSpacing

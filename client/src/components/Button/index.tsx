import React from 'react'

import { Wrapper } from './styles'

type ButtonProps = {
    children: React.ReactNode
    onClick(): void
    disabled?: boolean
}
function Button({ children, onClick, ...props }: ButtonProps) {
    return (
        <Wrapper
            {...props}
            onClick={() => {
                !props.disabled && onClick()
            }}
        >
            {children}
        </Wrapper>
    )
}

export default Button

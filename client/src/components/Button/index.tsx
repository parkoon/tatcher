import React from 'react'

import { Wrapper } from './styles'

type ButtonType = 'button' | 'submit' | 'reset'
type ButtonProps = {
    children: React.ReactNode
    disabled?: boolean
    type?: ButtonType
    onClick?(): void
}
function Button({ children, onClick, ...props }: ButtonProps) {
    const hasClickEvent = typeof onClick === 'function'
    return (
        <Wrapper
            {...props}
            onClick={() => {
                if (!hasClickEvent) return
                !props.disabled && onClick!()
            }}
        >
            {children}
        </Wrapper>
    )
}

Button.defaultProps = {
    type: 'button',
}

export default Button

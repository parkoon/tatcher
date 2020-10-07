import React from 'react'

import { Wrapper } from './styles'

type IconButtonProps = {
    icon: React.ReactNode
    onClick(): void
}
function IconButton({ icon, ...props }: IconButtonProps) {
    return <Wrapper {...props}> {icon}</Wrapper>
}

export default IconButton

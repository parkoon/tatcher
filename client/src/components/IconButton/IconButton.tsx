import React from 'react'

import { Wrapper } from './styles'

type IconButtonProps = {
    icon: React.ReactNode
}
function IconButton({ icon }: IconButtonProps) {
    return <Wrapper>{icon}</Wrapper>
}

export default IconButton

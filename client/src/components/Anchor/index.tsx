import React from 'react'

import { Wrapper } from './styles'

type AnchorProps = {
    children: React.ReactNode
}
function Anchor({ children }: AnchorProps) {
    return <Wrapper>{children}</Wrapper>
}

export default Anchor

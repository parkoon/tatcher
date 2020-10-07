import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

import { Wrapper, Image } from './styles'

type AvatarProps = {
    source: string
    onClick?(): void
}
function Avatar({ source, onClick }: AvatarProps) {
    const hasClick = typeof onClick === 'function'
    return (
        <Wrapper onClick={onClick} hasClick={hasClick}>
            <Image src={source} />
            {onClick && <AiFillCaretDown />}
        </Wrapper>
    )
}

export default Avatar

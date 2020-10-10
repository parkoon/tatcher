import React from 'react'

import { Wrapper } from './styles'

type TennisImageCardProps = {
    source: string
    onClick(): void
}
function TennisImageCard({ source, onClick }: TennisImageCardProps) {
    return (
        <Wrapper onClick={onClick}>
            <img src={source} />
        </Wrapper>
    )
}

export default TennisImageCard

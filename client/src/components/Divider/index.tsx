import React from 'react'

import { Vertical, Horizontal } from './styles'

export type DividerProps = {
    horizontal?: boolean
    gutter?: number
    vertical?: boolean
    height?: number
}
function Divider({ vertical, height = 0, gutter = 0 }: DividerProps) {
    if (vertical) {
        return <Vertical gutter={gutter} height={height} />
    }
    return <Horizontal gutter={gutter} />
}

export default Divider

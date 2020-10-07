import React, { ReactNode } from 'react'

import { Placement } from './types'
import { Container } from './styles'

const placements = {
    'top-left': { top: 12, left: 12 },
    'top-center': { top: 12, left: '50%', transform: 'translateX(-50%)' },
    'top-right': { top: 12, right: 12 },
    'bottom-left': { bottom: 12, left: 12 },
    'bottom-center': { bottom: 12, left: '50%', transform: 'translateX(-50%)' },
    'bottom-right': { bottom: 12, right: 12 },
}

export const gutter = 8

type NotificationContainerProps = {
    children?: ReactNode
    hasToasts?: boolean
    placement: Placement
}

export const NotificationContainer = ({ placement, children }: NotificationContainerProps) => (
    <Container
        style={{
            ...placements[placement],
        }}
    >
        {children}
    </Container>
)

import React from 'react'
import { createPortal } from 'react-dom'

import { Container, Overlay, Wrapper } from './styles'

type ModalContainerProps = {
    children: React.ReactNode
    open: boolean
    onClose(): void
}
function ModalContainer({ children, open = false, onClose }: ModalContainerProps) {
    return createPortal(
        <Container open={open}>
            <Overlay
                open={open}
                onClick={(e) => {
                    e.stopPropagation()
                    onClose()
                }}
            />
            <Wrapper key={Date.now()}>{children}</Wrapper>
        </Container>,
        document.getElementById('modal')!,
    )
}

export default ModalContainer

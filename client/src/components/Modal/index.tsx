import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'

import { Wrapper, BackDrop, Box } from './styles'

export type ModalRef = {
    openModal(): void
    close(): void
}
type ModalProps = {
    children: React.ReactNode
}
const Modal = forwardRef<ModalRef, ModalProps>(({ children }, ref) => {
    const [display, setDisplay] = useState(true)

    const open = () => {
        setDisplay(true)
    }

    const close = () => {
        setDisplay(false)
    }
    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            close: () => close(),
        }
    })

    if (display) {
        return createPortal(
            <Wrapper>
                <BackDrop onClick={close} />
                <Box>{children}</Box>
            </Wrapper>,
            document.getElementById('modal')!,
        )
    }

    return null
})

export default Modal

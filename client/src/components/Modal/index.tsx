import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'

export type ModalRef = {
    openModal(): void
    close(): void
}
type ModalProps = {
    children: React.ReactNode
}
const Modal = forwardRef<ModalRef, ModalProps>(({ children}, ref) => {

    const [display, setDisplay] = useState(true)

    useImperativeHandle(ref, () => {
        return {
            openModal:() => open(),
            close: () => close()
        }
    })

    const open = () => {
        setDisplay(true)
    }

    const close = () => {
        setDisplay(false)
    }

    if (display) {
        return createPortal(
            <div className={'modal-wrapper'}>
                <div className={'modal-backdrop'} onClick={close} />
                <div className={'modal-box'}>
            {children}
                </div>
            </div>, document.getElementById('modal')!
        )
    }

    return null

})

export default Modal

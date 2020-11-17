import React, { useState } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
    children: React.ReactNode
}
function Modal({ children }: ModalProps) {

    const [display, setDisplay] = useState(true)

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

}

export default Modal

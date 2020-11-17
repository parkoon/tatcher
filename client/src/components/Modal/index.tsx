import React, { useState } from 'react'

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
        return (
            <div className={'modal-wrapper'}>
                <div className={'modal-backdrop'} onClick={close} />
                <div className={'modal-box'}>
            {children}
                </div>
            </div>
        )
    }

    return null

}

export default Modal

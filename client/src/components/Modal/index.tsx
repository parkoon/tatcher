import React from 'react'

type ModalProps = {
    children: React.ReactNode
}
function Modal({ children }: ModalProps) {
    return (
        <div className={'modal-wrapper'}>
            <div className={'modal-backdrop'} />
            <div className={'modal-box'}>
        {children}
            </div>
        </div>
    )
}

export default Modal

import React, { createContext, useState, useContext } from 'react'

type Modal = {
    type: string
}
type ContextProps = {
    modals: Modal[]
}

// we initialize them without default values, to make that happen,
// we apply the `Partial` helper type.
const ModalContext = createContext<Partial<ContextProps>>({})

type ModalProviderProps = {
    children: React.ReactNode
}

export function ModalProvider({ children }: ModalProviderProps) {
    const [modals, setModals] = useState<Modal[]>([])

    const openModal = (type: string) => {
        setModals([
            ...modals,
            {
                type,
            },
        ])
    }

    // const closeModal = () => {
    //     setModals(modals.filter(modal => modal.))
    // }

    return <ModalContext.Provider value={{ modals }}>{children}</ModalContext.Provider>
}

export function useModal() {
    const context = useContext(ModalContext)
    return context
}

export default useModal

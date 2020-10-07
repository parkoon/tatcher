import React, { useState, useRef, useEffect } from 'react'

import { Dropdown, Arrow } from './styles'
import { useOtherClicked } from '@Hooks/useOtherFieldClicked'

type DropdownContainerProps = {
    children: React.ReactNode
    open: boolean
    onClose(): void
}
function DropdownContainer({ children, open, onClose }: DropdownContainerProps) {
    const DropdownRef = useRef<HTMLDivElement>(null)

    const { otherFieldClicked } = useOtherClicked(DropdownRef)

    useEffect(() => {
        if (otherFieldClicked) {
            onClose()
        }
    }, [otherFieldClicked])

    return (
        <Dropdown open={open} ref={DropdownRef}>
            <Arrow />
            {children}
        </Dropdown>
    )
}

export default DropdownContainer

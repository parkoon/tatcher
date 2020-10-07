import React, { ReactNode, useEffect, useRef } from 'react'
import { TransitionStatus } from 'react-transition-group/Transition'
import { NotificationElement } from './NotificationElement'
import { AppearanceTypes, Placement } from './types'

class Timer {
    private timerId: number
    private remaining: number
    private start: number
    private callback: () => void

    constructor(callback: () => void, delay: number) {
        this.start = delay
        this.remaining = delay
        this.callback = callback
        this.timerId = 0
        this.resume()
    }

    clear() {
        clearTimeout(this.timerId)
    }
    pause() {
        clearTimeout(this.timerId)
        this.remaining -= Date.now() - this.start
    }

    resume() {
        this.start = Date.now()
        clearTimeout(this.timerId)
        this.timerId = setTimeout(this.callback, this.remaining)
    }
}

type NotificationControllerProps = {
    children: ReactNode
    appearance: AppearanceTypes
    transitionDuration: number
    transitionState: TransitionStatus
    autoDismissTimeout: number
    placement: Placement
    onDismiss(): void
    mobile?: boolean
}
function NotificationController({
    children,
    appearance,
    onDismiss,
    autoDismissTimeout,
    transitionState,
    transitionDuration,
    placement,
    mobile = false,
}: NotificationControllerProps) {
    const timeout = useRef<Timer | null>(null)
    useEffect(() => {
        startTimer()

        return () => {
            clearTimer()
        }
    }, [])

    const startTimer = () => {
        timeout.current = new Timer(onDismiss!, autoDismissTimeout)
    }

    const clearTimer = () => {
        if (timeout.current) timeout.current.clear()
    }

    return (
        <NotificationElement
            appearance={appearance}
            transitionState={transitionState}
            transitionDuration={transitionDuration}
            onDismiss={onDismiss}
            placement={placement}
            mobile={mobile}
        >
            {children}
        </NotificationElement>
    )
}

export default NotificationController

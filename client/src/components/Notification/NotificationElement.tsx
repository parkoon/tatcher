import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { TransitionStatus } from 'react-transition-group/Transition'

import * as colors from './colors'
import { ElementWrapper, MobileElement, Element } from './styles'
import { gutter } from './NotificationContainer'
import { AppearanceTypes, Placement } from './types'

const appearances = {
    success: {
        text: colors.G500,
        fg: colors.G300,
        bg: colors.G50,
    },
    error: {
        text: colors.R500,
        fg: colors.R300,
        bg: colors.R50,
    },
    warning: {
        text: colors.Y500,
        fg: colors.Y300,
        bg: colors.Y50,
    },
    info: {
        text: colors.N400,
        fg: colors.B200,
        bg: '#fff',
    },
}

export const borderRadius = 4
export const notificationWidth = 270

function getTranslate(placement: Placement) {
    const pos = placement.split('-')
    const relevantPlacement = pos[1] === 'center' ? pos[0] : pos[1]
    const translateMap: { [key: string]: string } = {
        right: 'translate3d(120%, 0, 0)',
        left: 'translate3d(-120%, 0, 0)',
        bottom: 'translate3d(0, 120%, 0)',
        top: 'translate3d(0, -120%, 0)',
    }

    return translateMap[relevantPlacement]
}
const toastStates = (placement: Placement): { [key: string]: any } => ({
    entering: { transform: getTranslate(placement) },
    entered: { transform: 'translate3d(0,0,0)' },
    exiting: { transform: 'scale(0.66)', opacity: 0 },
    exited: { transform: 'scale(0.66)', opacity: 0 },
})

type NotificationElementProps = {
    appearance: AppearanceTypes
    transitionDuration: number
    transitionState: TransitionStatus
    children: ReactNode
    onDismiss(): void
    placement: Placement
    mobile?: boolean
}
export const NotificationElement = ({
    appearance,
    transitionState,
    children,
    onDismiss,
    placement,
    mobile = false,
}: NotificationElementProps) => {
    const [height, setHeight] = useState<string | number>('auto')
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!elementRef.current) return

        if (transitionState === 'entered') {
            setHeight(elementRef.current.offsetHeight + gutter)
        }
        if (transitionState === 'exiting') {
            setHeight(0)
        }
    }, [transitionState])

    return (
        <ElementWrapper ref={elementRef} height={height}>
            {mobile ? (
                <MobileElement
                    bgColor={appearances[appearance].bg}
                    color={appearances[appearance].text}
                    onClick={onDismiss}
                    style={{ ...toastStates('top-right')[transitionState] }}
                >
                    {children}
                </MobileElement>
            ) : (
                <Element
                    {...toastStates(placement)[transitionState]}
                    gutter={gutter}
                    bgColor={appearances[appearance].bg}
                    color={appearances[appearance].text}
                    onClick={onDismiss}
                >
                    {children}
                </Element>
            )}
        </ElementWrapper>
    )
}

type MobileNotificationProps = {
    children: ReactNode
}

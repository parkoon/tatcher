import React, { ReactNode, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { Transition, TransitionGroup } from 'react-transition-group'
import { v4 as uuidv4 } from 'uuid'
import { NotificationContainer } from './NotificationContainer'
import NotificationController from './NotificationController'
import { ContentTypes, Id, NotificationModel, Options, Placement } from './types'

type NotificationContextType = {
    addNotification(content: ContentTypes, options: Options): Id | boolean
}
const NotificationContext = React.createContext({} as NotificationContextType)

const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement)

type NotificationProviderProps = {
    children: ReactNode
    placement?: Placement
    autoDismiss?: boolean
    transitionDuration?: number
    autoDismissTimeout?: number
}

export function NotificationProvider({
    children,
    transitionDuration = 220,
    autoDismissTimeout = 3333,
    placement = 'bottom-right',
}: NotificationProviderProps) {
    const [notifications, setNotifications] = useState<NotificationModel[]>([])

    const portalTarget = canUseDOM ? document.body : null

    if (!portalTarget) {
        return null
    }

    const onDismiss = (id: Id) => () => {
        remove(id)
    }

    const add = (content: ContentTypes, options: Options): Id | boolean => {
        const id: Id = uuidv4()

        const { appearance, mobile } = options

        if (has(id)) {
            return false
        }

        const newToast: NotificationModel = { content, id, appearance, mobile }
        setNotifications([...notifications, newToast])

        return id
    }

    const has = (id: string) => {
        if (!notifications.length) {
            return false
        }

        return Boolean(notifications.filter((n) => n.id === id).length)
    }

    const remove = (id: Id) => {
        if (!has(id)) {
            return
        }
        setNotifications((state) => {
            const filteredNotifications = state.filter((n) => n.id !== id)
            return filteredNotifications
        })
    }

    return (
        <NotificationContext.Provider value={{ addNotification: add }}>
            {children}
            {createPortal(
                <NotificationContainer placement={placement}>
                    <TransitionGroup>
                        {notifications.map(({ appearance, id, content, mobile }) => {
                            return (
                                <Transition mountOnEnter unmountOnExit key={id} timeout={transitionDuration}>
                                    {(transitionState) => {
                                        return (
                                            <NotificationController
                                                placement={placement}
                                                appearance={appearance}
                                                key={id}
                                                onDismiss={onDismiss(id)}
                                                transitionDuration={transitionDuration}
                                                transitionState={transitionState}
                                                autoDismissTimeout={autoDismissTimeout}
                                                mobile={mobile}
                                            >
                                                {content}
                                            </NotificationController>
                                        )
                                    }}
                                </Transition>
                            )
                        })}
                    </TransitionGroup>
                </NotificationContainer>,
                portalTarget,
            )}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const ctx = useContext(NotificationContext)

    if (!ctx) {
        throw Error('The `useNotification` hook must be called from a descendent of the `ToastProvider`.')
    }

    const { addNotification } = ctx

    return {
        addNotification,
        //   removeToast: ctx.remove,
        //   removeAllToasts: ctx.removeAll,
        //   updateToast: ctx.update,
        //   toastStack: ctx.notifications,
    }
}

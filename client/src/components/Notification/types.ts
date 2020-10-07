import { ReactNode } from 'react'

export type ContentTypes = ReactNode | string
export type AppearanceTypes = 'error' | 'info' | 'success' | 'warning'
export type Id = string
export type Options = {
    appearance: AppearanceTypes
    mobile?: boolean
}

export type NotificationModel = {
    content: ContentTypes
    appearance: AppearanceTypes
    id: Id
    mobile?: boolean
}
export type AddFn = (content: ReactNode, options?: Options) => Id
export type Placement = 'bottom-left' | 'bottom-center' | 'bottom-right' | 'top-left' | 'top-center' | 'top-right'

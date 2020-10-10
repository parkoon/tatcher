export type Level = 1 | 2 | 3 | 4 | 5
export type FontSize = 'sm' | 'base' | 'lg' | 'xl' | 'xxl' | 'xxxl'

export type CommonTypographyProps = {
    children: React.ReactNode
    fontSize?: FontSize
    color?: string
    bold?: boolean
    center?: boolean
    right?: boolean
    style?: React.CSSProperties
    block?: boolean
    wordBreak?: boolean
    className?: string
}
export type TitleProps = {
    level?: Level
} & CommonTypographyProps

export type TextProps = {} & CommonTypographyProps

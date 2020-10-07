import styled from 'styled-components'

type VerticalAlignContentType = 'top' | 'center' | 'bottom' | 'spaceBetween' | 'spaceAround'
type HorizontalAlignContentType = 'left' | 'center' | 'right' | 'spaceBetween' | 'spaceAround'

type GrowType = boolean | number
type ShrinkType = boolean | number
type BasisType = string | number

type FlexViewProps = {
    children?: React.ReactNode
    column?: boolean
    vAlignContent?: VerticalAlignContentType
    hAlignContent?: HorizontalAlignContentType
    marginLeft?: string | number
    marginTop?: string | number
    marginRight?: string | number
    marginBottom?: string | number
    grow?: boolean | number
    shrink?: boolean | number
    basis?: string | number
    wrap?: boolean
    height?: string | number
    width?: string | number
    style?: React.CSSProperties
}

function getGrow(grow?: GrowType): number {
    if (typeof grow === 'number') {
        return grow
    }
    return 0 // default
}

function getShrink(shrink?: ShrinkType, basis?: BasisType): number {
    if (typeof shrink === 'number') {
        return shrink
    }

    if (!shrink) {
        return 0
    }

    if (basis && basis !== 'auto') {
        return 0
    }

    return 1 // default
}

function getBasis(basis?: BasisType): string {
    if (basis) {
        const suffix = typeof basis === 'number' || String(parseInt(basis as string, 10)) === basis ? 'px' : ''
        return basis + suffix
    }

    return 'auto'
}

function alignPropToFlex(align?: HorizontalAlignContentType | VerticalAlignContentType) {
    switch (align) {
        case 'top':
        case 'left':
            return 'flex-start'
        case 'center':
            return 'center'
        case 'bottom':
        case 'right':
            return 'flex-end'
        case 'spaceBetween':
            return 'space-between'
        case 'spaceAround':
            return 'space-around'
    }
}
const FlexView = styled.div<FlexViewProps>`
    box-sizing: border-box;
    min-height: 0;
    min-width: 0;
    display: flex;
    flex: ${(props) => `${getGrow(props.grow)} ${getShrink(props.shrink, props.basis)} ${getBasis(props.basis)}`};
    flex-direction: ${(props) => (props.column ? 'column' : 'row')};
    flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
    justify-content: ${(props) => alignPropToFlex(props.column ? props.vAlignContent : props.hAlignContent)};
    align-items: ${(props) => alignPropToFlex(props.column ? props.hAlignContent : props.vAlignContent)};
`

export default FlexView

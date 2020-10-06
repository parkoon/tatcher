import styled from 'styled-components'
import { MarginSize } from '@Helpers/theme'

export const Wrapper = styled.div<{
    top?: boolean
    bottom?: boolean
    size: MarginSize
}>`
    width: 100%;
    margin-top: ${({ top, theme, size }) => (top ? theme.margins[size] : 0)};
    margin-bottom: ${({ bottom, theme, size }) => (bottom ? theme.margins[size] : 0)};
`

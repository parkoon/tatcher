import styled, { css } from 'styled-components'

import { CommonTypographyProps } from './types'
import { palette } from '@Helpers/palette'

export const CommonStyles = css<CommonTypographyProps>`
    color: ${({ color }) => (color ? color : palette.black)};
    display: ${({ block }) => (block ? 'block' : 'inline-block')};
    font-size: ${({ fontSize, theme }) => (fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.base)};
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
    text-align: ${({ center, right }) => (center ? 'center' : right ? 'right' : 'left')};
    word-break: ${({ wordBreak }) => (wordBreak ? 'keep-all' : 'normal')};
`

export const TextWrapper = styled.span`
    ${CommonStyles}
`

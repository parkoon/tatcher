import React from 'react'
import styled from 'styled-components'

import { TitleProps } from './types'
import { CommonStyles } from './styles'

const Title = styled(({ level = 1, children, block, bold, ...props }: TitleProps) =>
    React.createElement(
        `h${level}`,
        {
            block: block ? 1 : 0,
            bold: bold ? 1 : 0,
            ...props,
        },
        children,
    ),
)`
    ${CommonStyles}
    margin: 0;
`

export default Title

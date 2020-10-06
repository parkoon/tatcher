import React from 'react'
import styled from 'styled-components'

import { TitleProps } from './types'
import { CommonStyles } from './styles'

const Title = styled(({ level = 1, children, ...props }: TitleProps) =>
    React.createElement(`h${level}`, props, children),
)`
    ${CommonStyles}
    margin: 0;
`

export default Title

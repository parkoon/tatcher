import styled from 'styled-components'
import { palette } from '@Helpers/palette'

export const Wrapper = styled.a`
    text-decoration: underline;
    cursor: pointer;

    transition: 0.3s;

    &:hover {
        color: ${palette.primary.dark};
    }
`

import styled from 'styled-components'
import { palette } from '@Helpers/palette'

export const Wrapper = styled.div`
    display: inline-flex;
    padding: ${({ theme }) => theme.paddings.sm};
    cursor: pointer;
    border-radius: 50%;
    transition: 0.3s;

    &:hover {
        background: ${palette.greyscale[2]};
    }
`

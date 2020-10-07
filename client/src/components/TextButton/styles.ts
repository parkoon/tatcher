import styled from 'styled-components'
import { palette } from '@Helpers/palette'

export const Wrapper = styled.button`
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    color: ${palette.primary.light};
    font-size: ${({ theme }) => theme.fontSizes.base};

    transition: 0.3s;

    &:hover {
        color: ${palette.primary.dark};
    }
`

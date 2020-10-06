import styled, { css } from 'styled-components'

import { palette } from '@Helpers/palette'

export const Disabled = ({ disabled }: { disabled?: boolean }) =>
    disabled &&
    css`
        background: ${palette.primary.light};
        cursor: not-allowed;

        &:hover {
            background: ${palette.primary.light};
        }
    `

export const Wrapper = styled.button<{ disabled?: boolean }>`
    background: ${palette.primary.main};
    color: ${palette.white};
    outline: none;
    border: none;
    word-break: keep-all;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.base};
    padding: ${({ theme }) => theme.paddings.xl};
    transition: 0.3s;
    user-select: none;

    &:hover {
        background: ${palette.primary.dark};
    }

    ${Disabled}
`

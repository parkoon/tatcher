import styled from 'styled-components'
import { palette } from '@/helpers/palette'

export const Container = styled.div`
    position: relative;

    &:hover {
        > input {
            border-color: ${palette.primary.main};
        }
    }

    input {
        width: 100%;
        border: 1px solid ${palette.inputBorder};
        padding: ${({ theme }) => theme.paddings.base};
        height: 48px;
        outline: none;
        font-size: ${({ theme }) => theme.fontSizes.lg};
        &:focus {
            border-color: ${palette.primary.main};
        }
    }

    label {
        display: block;
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.3s;
        background: ${palette.white};
        font-size: ${({ theme }) => theme.fontSizes.lg};
        pointer-events: none;
    }

    input:focus ~ label,
    input:valid ~ label {
        transform: translate(-2px, -30px);
        padding: 3px;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        color: ${palette.primary.main};
    }
`

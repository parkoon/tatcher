import styled, { css } from 'styled-components'
import { palette } from '@Helpers/palette'

const InputError = ({ error }: { error?: boolean | string }) =>
    error &&
    css`
        input {
            color: ${palette.error};
            border-color: ${palette.error};
            &:focus,
            &:hover {
                border-color: ${palette.error};
            }
        }

        label {
            color: ${palette.error};
        }

        input:focus ~ label,
        input:valid ~ label {
            color: ${palette.error};
        }
    `

export const Wrapper = styled.div`
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
        /* label이 있는 경우 input 에 마우스 hover 시 input hover 동작 안하는 부분 처리 */
        pointer-events: none;
    }

    input:focus ~ label,
    input:valid ~ label {
        transform: translate(-2px, -30px);
        padding: 3px;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        color: ${palette.primary.main};
    }

    ${InputError}
`
export const Container = styled.div<{ error?: boolean | string }>`
    span {
        margin-top: 5px;
        margin-bottom: 7px;
    }
`

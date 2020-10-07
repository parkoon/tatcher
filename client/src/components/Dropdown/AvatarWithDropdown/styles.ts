import styled, { css } from 'styled-components'
import { palette } from '@Helpers/palette'

export const Wrapper = styled.div`
    position: relative;
`
export const ProfileField = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.paddings.xxl};

    border-bottom: 1px solid ${palette.greyscale[3]};

    .right-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        span {
            margin-bottom: 7px;
        }
    }
`

export const Item = styled.div`
    cursor: pointer;
    padding: ${({ theme }) => theme.paddings.xxl};
    transition: 0.3s;

    &:hover {
        background-color: ${palette.greyscale[2]};
    }
`

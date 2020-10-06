import styled from 'styled-components'

import { palette } from '@Helpers/palette'

export const Wrapper = styled.div`
    width: 600px;
    height: 480px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 12px 0px;
    display: flex;
    z-index: 1;
    background: #fff;

    .left-column {
        width: 216px;
        background: ${palette.greyscale[1]};
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            margin-bottom: ${({ theme }) => theme.margins.xxl};
        }
    }

    .right-column {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        flex: 1;
        padding: 24px;

        .sign-up-field {
            position: absolute;
            right: 24px;
            bottom: 24px;
        }

        .close-icon {
            position: absolute;
            right: 24px;
            top: 24px;
        }
    }
`

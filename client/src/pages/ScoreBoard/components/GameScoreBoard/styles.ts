import styled, { css } from 'styled-components'
import { palette } from '@Helpers/palette'

const boxShadow = `0px 0px 2px rgba(0, 0, 0, 0.2)`

export const Container = styled.div`
    margin-bottom: 24px;
    background: transparent;
    /* height: 120px; */
    width: 420px;

    padding: 20px;
`
export const Wrapper = styled.div`
    user-select: none;
`

export const Status = styled.div`
    display: inline-block;
    background: #fff;
    padding: 5px 0px;
    font-size: 16px;
    letter-spacing: 1px;
    box-shadow: ${boxShadow};
    font-weight: bold;
    box-sizing: border-box;
    width: 150px;
    text-align: center;
`

export const Row = styled.div`
    display: flex;
    font-size: 24px;
`

export const PlayerNameField = styled.div<{ isServeTurn: boolean }>`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    flex: 1;
    position: relative;
    font-size: 20px;
    color: #fff;
    letter-spacing: 4px;
    padding: 7px;
    padding-left: 24px;
    margin-right: 7px;
    min-width: 250px;
    min-height: 45px;
    box-shadow: ${boxShadow};

    ${({ isServeTurn }) =>
        isServeTurn &&
        css`
            &::before {
                content: '';
                position: absolute;
                width: 10px;
                height: 100%;
                background: red;
                left: 0;
                top: 0;
            }
        `}
`

export const Point = styled.span`
    width: 50px;
    background: #fff;
    margin-right: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    box-shadow: ${boxShadow};
`

export const GamePoint = styled(Point)`
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: ${palette.greyscale[1]};
    }
`

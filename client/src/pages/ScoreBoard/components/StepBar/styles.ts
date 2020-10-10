import { palette } from '@Helpers/palette'
import styled from 'styled-components'

export const Wrapper = styled.div`
    ul {
        text-align: center;
    }
`
export const Item = styled.li`
    width: 200px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:first-child {
        div {
            &::before {
                width: 0;
            }
        }
    }
`
export const IconWrapper = styled.div<{ active: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${({ active }) => (active ? palette.primary.main : palette.greyscale[2])};
    transition: 0.3s;
    cursor: pointer;

    &::before {
        content: '';
        background: ${({ active }) => (active ? palette.primary.main : palette.greyscale[2])};
        height: 3px;
        width: 200px;
        position: absolute;
        display: block;
        right: 0;
        z-index: -1;
    }
`

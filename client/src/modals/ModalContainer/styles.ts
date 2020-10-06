import styled, { css } from 'styled-components'

export const Container = styled.div<{ open: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    overflow: hidden;
    visibility: hidden;
    opacity: 0;

    ${({ open }) =>
        open &&
        css`
            visibility: visible;
            opacity: 1;
        `}

    transition: 0.3s;
`
export const Overlay = styled.div<{ open: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
`

export const Wrapper = styled.div`
    z-index: 9999;
`

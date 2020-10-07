import styled, { css } from 'styled-components'

export const Dropdown = styled.div<{ open: boolean }>`
    width: 230px;
    position: absolute;
    right: 0;
    top: 65px;
    background-color: #fff;
    border: 1px solid #e9ecef;
    border-radius: 1px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
    z-index: 110;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.95);
    transform-origin: top right;
    transition: visibility 0.15s ease, opacity 0.15s ease, transform 0.15s ease;

    ${({ open }) =>
        open &&
        css`
            visibility: visible;
            opacity: 1;
        `}
`
export const Arrow = styled.span`
    &::after,
    &::before {
        content: '';
        position: absolute;
        border-style: solid;
        display: block;
        height: 0;
        width: 0;
        top: 0;
    }

    &::after {
        border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #fff;
        border-width: 6px;
        right: 12px;
        top: -12px;
    }
    &::before {
        border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #dee2e6;
        border-width: 6px;
        right: 12.5px;
        top: -13px;
    }
`

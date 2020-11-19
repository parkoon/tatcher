import styled, { keyframes } from 'styled-components'

const BoxFade = keyframes`
    from {
        transform: translateY(10%)
    }

    to {
        transform: translateY(0px)
    }
`

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
`

export const Box = styled.div`
    position: relative;
    max-height: 70%;
    max-width: 40%;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    z-index: 101;
    overflow: auto;
    padding: 40px;
    transition: 0.2s;
    animation: ${BoxFade} 0.3s;
`

import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 320px;
    height: 400px;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    cursor: pointer;
    border-radius: 7px;

    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

import styled from 'styled-components'

export const Wrapper = styled.div<{ hasClick: boolean }>`
    display: flex;
    align-items: center;
    cursor: ${({ hasClick }) => (hasClick ? 'pointer' : 'default')};
    width: 62px;
    justify-content: space-between;
`

export const Image = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
`

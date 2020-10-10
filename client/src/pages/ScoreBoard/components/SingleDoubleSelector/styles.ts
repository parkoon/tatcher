import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 72px;

    div {
        &:first-child {
            margin-right: ${({ theme }) => theme.margins.base};
        }
    }
`

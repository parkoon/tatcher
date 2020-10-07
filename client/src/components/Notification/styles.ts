import styled from 'styled-components'

export const Container = styled.div`
    box-sizing: border-box;
    max-height: 100%;
    overflow: hidden;
    padding: gutter;
    position: fixed;
    z-index: 1000;
`

export const ElementWrapper = styled.div<{ height: number | string; transitionDuration?: number }>`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    height: ${(props) => {
        if (typeof props.height === 'string') return props.height
        return props.height + 'px'
    }};
    transition: 0.2s;
`

export const Element = styled.div<{
    transform?: string
    opacity?: number
    gutter: number
    bgColor: string
    color: string
    width: number
}>`
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.175);
    display: flex;
    opacity: ${({ opacity }) => opacity};
    transform: ${({ transform }) => transform};
    transition: transform 0.3s cubic-bezier(0.2, 0, 0, 1), opacity 0.3s;
    margin-bottom: ${({ gutter }) => gutter}px;
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
    padding: 12px 18px;
    font-size: 14px;
    letter-spacing: 0.05rem;
    border-radius: 6px;
`

export const MobileElement = styled.div<{ bgColor: string; color: string; top?: number }>`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    font-size: 12px;
    height: 41px;
    transition: transform 0.3s cubic-bezier(0.2, 0, 0, 1), opacity 0.3s;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
`

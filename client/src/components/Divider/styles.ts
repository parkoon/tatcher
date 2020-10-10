import styled from 'styled-components'
import { DividerProps } from '.'
import { palette } from '@Helpers/palette'

export const Vertical = styled.div<DividerProps>`
    width: 1px;
    height: ${(props) => props.height}px;
    background-color: ${palette.greyscale[4]};
    margin-left: ${(props) => props.gutter}px;
    margin-right: ${(props) => props.gutter}px;
`
export const Horizontal = styled.div<DividerProps>`
    width: 100%;
    height: 1px;
    background-color: ${palette.greyscale[4]};
    margin-top: ${(props) => props.gutter}px;
    margin-bottom: ${(props) => props.gutter}px;
`

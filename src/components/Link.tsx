import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

type LinkPropsType = {
    width: number,
    height: number,
    borderRadius? : number,
    bgColor? : string,
    border? : string,
}

export const Link = styled.a<LinkPropsType>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-radius: ${props => props.borderRadius}px;
    background-color: ${props => props.bgColor};
    
    padding: 8px 24px;
    white-space: nowrap;

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: ${theme.colors.titlesFont};
    border: ${props => props.border};
`
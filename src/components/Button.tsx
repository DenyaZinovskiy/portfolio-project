import styled from "styled-components";

type ButtonPropsType = {
    width : number,
    height : number,
    borderRadius : number,
    bgColor? : string,
}

export const Button = styled.button<ButtonPropsType>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border-radius: ${(props) => props.borderRadius}px;
    background-color: ${(props) => props.bgColor};
`
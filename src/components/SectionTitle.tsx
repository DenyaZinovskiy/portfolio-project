import styled from "styled-components";
import {theme} from "../styles/Theme.ts";


export const SectionTitle = styled.h2`
    
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 1.5;
    text-align: center;
    
    color: ${theme.colors.titlesFont};
    margin-bottom: 80px;
    
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        width: 100px;
        height: 4px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -4px;
    }
`
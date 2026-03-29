import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href=""> {item}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 48px
    }
    
    li {
        font-family: "Raleway", sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.6;
    }
    
    li > a {
        color: ${theme.colors.titlesFont};
    }
`

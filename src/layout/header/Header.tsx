import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {theme} from "../../styles/Theme.ts";
import {Container} from "../../styles/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";

const items = ["About", "Projects", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <HeaderWrapper justify="space-between" align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </HeaderWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`

    height: 56px;
    //padding: 12px 0;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    z-index: 10;

    display: flex;

    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    //&::before {
    //    content: "";
    //    position: absolute;
    //    inset: 0;
    //    background-color: 
    //}

`

const HeaderWrapper = styled(FlexWrapper)`
    
    position: relative;
    height: 100%;
`

const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href=""> {item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    
    ul {
        display: flex;
        gap: 48px
    }
    
    @media ${theme.media.tablet} {
        display: none;
    }
`
const ListItem = styled.li`
    
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.6;
`

const Link = styled.a`
    
    color: ${theme.colors.titlesFont};
`
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

    display: flex;
    
    height: 56px;
    //padding: 12px 0;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    z-index: 10;

    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

`

const HeaderWrapper = styled(FlexWrapper)`
    
    position: relative;
    height: 100%;
`

const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <Menu role="menu">
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index} role="menuitem">
                        <Link href=""> {item}</Link>
                    </ListItem>
                })}
            </Menu>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    
    @media ${theme.media.tablet} {
        display: none;
    }
`

const Menu = styled.ul`
    
    display: flex;
    gap: 48px
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
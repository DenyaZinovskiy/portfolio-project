import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts"
import {Icon} from "../../../components/icon/Icon.tsx";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton aria-haspopup={true}>
                <Icon iconId={"burger"} width={"24"} height={"24"} viewBox="0 0 24 24"/>
            </BurgerButton>
            <MobileMenuPopup>
                <Menu role="menu">
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index} role="menuitem">
                            <Link href=""> {item}</Link>
                        </ListItem>
                    })}
                </Menu>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`

    display: none;

    @media ${theme.media.tablet} {
        display: flex;
    }
`

const Menu = styled.ul`
    
    display: flex;
    gap: 48px
`

const MobileMenuPopup = styled.div`
    
    @media ${theme.media.tablet} {
        display: none;
    }
`

const BurgerButton = styled.button`
    position: fixed;
    top: 15px;
    right: 15px;
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

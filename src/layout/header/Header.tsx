import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {theme} from "../../styles/Theme.ts";
import {Container} from "../../styles/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

const items = ["About", "Projects", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <HeaderWrapper justify="space-between" align={"center"}>
                    <Logo/>
                    <Menu menuItems={items}/>
                </HeaderWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    height: 56px;
    padding: 12px 0;
`

const HeaderWrapper = styled(FlexWrapper)`
    
    position: relative;
    height: 100%;
    z-index: 10;
    
`
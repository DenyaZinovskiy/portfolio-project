import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

const items = ["About", "Projects", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems = {items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #b53535;
`
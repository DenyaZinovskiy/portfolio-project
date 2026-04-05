import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

export const SkillsMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <Menu>
                {props.menuItems.map(iconId => {
                    return <ListItem>
                    <Icon width="131" height="131" viewBox="0 0 131 131" iconId={iconId}/>
                    </ListItem>;
                })}
            </Menu>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    
`

const Menu = styled.ul`

    display: flex;
    gap: 74px;
    flex-wrap: wrap;
    justify-content: center;
`

const ListItem = styled.li`

    width: 112px;
    height: 112px;

    display: flex;
    justify-content: center;
    align-items: center;
`

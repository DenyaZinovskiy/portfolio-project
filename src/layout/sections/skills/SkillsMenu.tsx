import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

export const SkillsMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map(iconId => {
                    return <li>
                    <Icon width="131" height="131" viewBox="0 0 131 131" iconId={iconId}/>
                    </li>;
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 74px;
        flex-wrap: wrap;
        justify-content: center;
    }

    li {
        width: 112px;
        height: 112px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

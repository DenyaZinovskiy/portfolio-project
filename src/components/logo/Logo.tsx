import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

export const Logo = () => {
    return <StyledLink href="/" aria-label="Denis Zinovskiy - home page">
        <Icon width="146" height="18" viewBox="0 0 146 18" iconId="logo"/>
    </StyledLink>
}

const StyledLink = styled.a`
    display: flex;
    align-items: center;
    line-height: 0;
`

// href="/" вместо href="": Пустой href технически просто перезагружает текущую страницу. Для логотипа стандарт — это / (корень сайта).
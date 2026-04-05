import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../styles/Container.ts";
import {theme} from "../../styles/Theme.ts";
import {Icon} from "../../components/icon/Icon.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <InfoWrapper>
                    <StyledList>
                        <StyledItem>
                            <StyledLink>
                            </StyledLink>
                            <Icon iconId={"instagram"} width={"48"} height={"48"} viewBox={"0 0 48 48"}/>
                        </StyledItem>
                        <StyledItem>
                            <StyledLink>
                                <Icon iconId={"linkedin"} width={"48"} height={"48"} viewBox={"0 0 48 48"}/>
                            </StyledLink>
                        </StyledItem>
                        <StyledItem>
                            <StyledLink>
                                <Icon iconId={"envelope"} width={"48"} height={"48"} viewBox={"0 0 48 48"}/>
                            </StyledLink>
                        </StyledItem>
                    </StyledList>
                    <Copyright>Denis Zinovskiy 2026</Copyright>
                </InfoWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
    height: 344px;
    background-color: ${theme.colors.primaryBg};

    position: relative;
}
`

const StyledList = styled.ul`
    
    display: flex;
    flex-direction: row;
    gap: 20px;
`

const StyledItem = styled.li`

`

const StyledLink = styled.a`

`

const Copyright = styled.small`

    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.descriptionsFont};
    
    text-align: center;
`

const InfoWrapper = styled(FlexWrapper)`
    
    max-width: 192px;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 32px;
    
    margin: 0 auto;


    &::after {
        
        content: "";
        display: inline-block;
        background-image: url("${import.meta.env.BASE_URL}wave-footer.svg");
        width: 100%;
        height: 100%;

        background-repeat: no-repeat;

        position: absolute;
        background-position: bottom;
        background-size: 100% 100%;

        bottom: 0;
        left: 0;
        
        @media ${theme.media.tablet} {
            background-size: contain;
        }
`



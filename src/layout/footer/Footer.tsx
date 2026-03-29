import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import FooterImg from "./../../assets/images/footer.webp"
import {Container} from "../../styles/Container.ts";
import {theme} from "../../styles/Theme.ts";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction="column" align={"center"}>
                    <StyledList>
                        <StyledItem>
                            <StyledLink>
                            </StyledLink>
                            <Icon iconId={"instagram"} width={"48"} height={"48"} viewBox={"0 0 48px 48px"}/>
                        </StyledItem>
                        <StyledItem>
                            <StyledLink>
                                <Icon iconId={"linkedin"} width={"48"} height={"48"} viewBox={"0 0 48px 48px"}/>
                            </StyledLink>
                        </StyledItem>
                        <StyledItem>
                            <StyledLink>
                                <Icon iconId={"envelope"} width={"48"} height={"48"} viewBox={"0 0 48px 48px"}/>
                            </StyledLink>
                        </StyledItem>
                    </StyledList>
                    <Copyright>Madelyn Torff 2021</Copyright>
                    <FooterImage src={FooterImg}/>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 30vh;
    background-color: ${theme.colors.primaryBg};
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

`

const FooterImage = styled.img`
    width: 100%;
    object-fit: cover;
`


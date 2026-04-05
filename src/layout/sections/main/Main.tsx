import styled from "styled-components";
import mainPhoto from "../../../assets/images/main.webp";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../styles/Container.ts";
import {Link} from "../../../components/Link.tsx";
import {theme} from "../../../styles/Theme.ts";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainWrapper direction="row">
                    <InfoWrapper direction="column">
                        <MainTitle>Software Developer</MainTitle>
                        <Name>Hello, my name is Denis Zinovskiy</Name>
                        <MainDescription>Short text with details about you, what you do or your professional career. You can add more information on the about page.</MainDescription>
                        <FlexWrapper gap={12}>
                            <Link href="#projects" width={117} height={43} borderRadius={8} bgColor={theme.colors.accent}>Projects</Link>
                            <Link href="" width={117} height={43} borderRadius={8} border={`2px solid ${theme.colors.titlesFont}`}>LinkedIn</Link>
                        </FlexWrapper>
                    </InfoWrapper>
                    <PhotoWrapper>
                        <Photo src={mainPhoto} alt=""/>
                    </PhotoWrapper>
                </MainWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    background-color: ${theme.colors.primaryBg};
    
    display: flex;
    padding: 110px 0 70px 0;

    overflow-x: clip;
`

const InfoWrapper = styled(FlexWrapper)`
    max-width: 508px;
    
    text-align: start;
    margin-top: 55px;

    z-index: 10;

    @media ${theme.media.main} {
        margin-top: 357px;
    }

    @media ${theme.media.mobile} {
        margin-top: 325px;
    }
`

const MainWrapper = styled(FlexWrapper)`
    position: relative;
    z-index: 1;
`

const PhotoWrapper = styled.div`
    position: absolute;
    right: -97px;
    top: -112px;
`


const Photo = styled.img`
    
    width: 100%;
    height: 100%;
    
    mask: url("${import.meta.env.BASE_URL}yellow-bg.svg");
    -webkit-mask: url("${import.meta.env.BASE_URL}yellow-bg.svg");

    mask-size: cover;
    mask-repeat: no-repeat;

    mask-position: left bottom;

    background-color: ${theme.colors.accent};
    
`

const MainTitle = styled.h1`
    font-family: "Nunito", sans-serif;

    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: ${theme.colors.accent};
    
    margin-bottom: 12px;
    
`

const Name = styled.p`
    font-family: "Roboto", sans-serif;

    font-weight: 700;
    font-size: 64px;
    line-height: 1.2;
    color: ${theme.colors.titlesFont};

    margin-bottom: 32px;

    @media ${theme.media.mobile} {
        font-size: 42px;
    }
`

const MainDescription = styled.p`
    font-family: "Nunito", sans-serif;

    font-weight: 400;
    font-size: 24px;
    line-height: 1.5;
    color: ${theme.colors.descriptionsFont};

    margin-bottom: 32px;
`

import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Link} from "../../../../components/Link.tsx";
import {theme} from "../../../../styles/Theme.ts";


type ProjectPropsType = {
    title: string,
    text: string,
    src: string,
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ProjectWrapper direction="column" gap={24} justify="center">
                <ProjectTitle>{props.title}</ProjectTitle>
                <ProjectDescription>{props.text}</ProjectDescription>
                <Link width={150} height={43} borderRadius={24} border={`1px solid ${theme.colors.titlesFont}`}>View Project</Link>
            </ProjectWrapper>
            <ProjectImage src={props.src}/>
        </StyledProject>
    );
};

const StyledProject = styled.article`
    
    background-color: #fff;
    max-width: 992px;
    width: 100%;
    min-height: 524px;
    
    display: flex;

    border-radius: 24px;
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
    overflow: hidden;
    
    justify-content: space-between;
    
    @media ${theme.media.mobile} {
        flex-direction: column-reverse;
    }
`

const ProjectWrapper = styled(FlexWrapper)`

    padding: 0 45px;
    
    flex: 1 1 50%;

    @media ${theme.media.mobile} {
        min-height: 259px;
        
        align-items: center;

        padding: 130px 30px;
    }
`


const ProjectTitle = styled.h3`
    font-family: "Playfair Display", sans-serif;

    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
    color: ${theme.colors.titlesFont};
    
    text-align: left;
`

const ProjectDescription = styled.p`
    font-family: "Nunito", sans-serif;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: ${theme.colors.descriptionsFont};
    
    text-align: start;
`

const ProjectImage = styled.img`
    object-fit: cover;
    min-width: 0;
    
    flex: 1 1 50%;
    
    @media ${theme.media.mobile} {
        min-height: 522px;
    }
`

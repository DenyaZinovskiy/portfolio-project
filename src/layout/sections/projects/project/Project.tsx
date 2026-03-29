import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Link} from "../../../../components/Link.tsx";
import {theme} from "../../../../styles/Theme.ts";


type ProjectPropsType = {
    title: string,
    text: string,
    src: string,
    imageOrder?: number
    margin?: string
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ProjectWrapper direction="column" gap={24} justify="center" marginP={props.margin}>
                <ProjectTitle>{props.title}</ProjectTitle>
                <ProjectDescription>{props.text}</ProjectDescription>
                <Link width={150} height={43} borderRadius={24} border={`1px solid ${theme.colors.titlesFont}`}>View Project</Link>
            </ProjectWrapper>
            <ProjectImage src={props.src} order={props.imageOrder || 0}/>
        </StyledProject>
    );
};

const StyledProject = styled.article`
    
    background-color: #fff;
    max-width: 992px;
    width: 100%;
    min-height: 524px;
    
    display: flex;
    align-items: center;

    border-radius: 24px;
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
    overflow: hidden;
    
    justify-content: space-between;
`

const ProjectWrapper = styled(FlexWrapper)<{ marginP? : string }>`
    
    margin: ${props => props.marginP};
    width: 406px;
    height: 232px;
    
    align-items: flex-start;
`


const ProjectTitle = styled.h3`
    font-family: "Playfair Display", sans-serif;

    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
    color: ${theme.colors.titlesFont};
`

const ProjectDescription = styled.p`
    font-family: "Nunito", sans-serif;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: ${theme.colors.descriptionsFont};
    
    text-align: start;
`

const ProjectImage = styled.img<{ order: number }>`
    order: ${props => props.order};
    max-width: 496px;
    width: 100%;
    height: 526px;
    object-fit: cover;
`



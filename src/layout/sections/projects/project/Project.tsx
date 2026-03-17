import styled from "styled-components";
import {Button} from "../../../../components/Button.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type ProjectPropsType = {
    title: string,
    text: string,
    src: string,
    imageOrder?: number
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper direction="column" gap={24} justify="center">
                <ProjectTitle>{props.title}</ProjectTitle>
                <ProjectDescription>{props.text}</ProjectDescription>
                <Button width={150} height={43} borderRadius={24}>View Project</Button>
            </FlexWrapper>
            <ProjectImage src={props.src} order={props.imageOrder || 0}/>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: #fff;
    max-width: 992px;
    height: 524px;
    
    display: flex;
`


const ProjectTitle = styled.h3`

`

const ProjectDescription = styled.p`

`

const ProjectImage = styled.img<{ order: number }>`
    order: ${props => props.order};
    max-width: 496px;
    width: 100%;
    height: 526px;
    object-fit: cover;
`



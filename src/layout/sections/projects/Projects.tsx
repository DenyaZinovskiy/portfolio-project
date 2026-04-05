import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import proj1 from '../../../assets/images/proj-1.webp'
import proj2 from '../../../assets/images/proj-2.webp'
import proj3 from '../../../assets/images/proj-3.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import {Container} from "../../../styles/Container.ts";
import {theme} from "../../../styles/Theme.ts";


export const Projects = () => {
    return (
        <StyledProjects id="projects">
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <ProjectsWrapper direction="column" gap={80} align={"center"}>
                    <Project title={"Project Name"}
                             text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."}
                             src={proj1}
                    />
                    <Project title={"Project Name"}
                             text={"What was your role, your deliverables, if the project was personal, freelancing."}
                             src={proj2}
                    />
                    <Project title={"Project Name"}
                             text={"You can also add in this description the type of the project, if it was for web, mobile, electron."}
                             src={proj3}
                    />
                </ProjectsWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    article:nth-child(even) img {
        order: -1;
    }
    
    @media ${theme.media.mobile} {
        article:nth-child(even) img {
            order: 1;
        }
    }
`

const ProjectsWrapper = styled(FlexWrapper)`
    
`
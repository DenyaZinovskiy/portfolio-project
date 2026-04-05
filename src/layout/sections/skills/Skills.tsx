import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../styles/Container.ts";
import {SkillsMenu} from "./SkillsMenu.tsx";

const items = ["vscode", "vscode-js", "vscode-css", "vscode-html", "greensock", "vector", "github", "git", "react", "sass", "bootstrap", "vscode-tailwind"]

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <SkillsMenu menuItems={items}/>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    
`
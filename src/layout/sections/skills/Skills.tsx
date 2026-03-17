import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper gap={96} justify="center">
                <Icon width="112" height="112" viewBox="0 0 112 112" iconId="vscode"/>
                <Icon width="112" height="112" viewBox="0 0 112 112" iconId="vscode-js"/>
                <Icon width="112" height="112" viewBox="0 0 112 112" iconId="vscode-css"/>
                <Icon width="112" height="112" viewBox="0 0 112 112" iconId="vscode-html"/>
                <Icon width="112" height="112" viewBox="0 0 112 112" iconId="greensock"/>
                <Icon width="112" height="112" viewBox="0 0 112 112" iconId="vector"/>
            </FlexWrapper>
            <FlexWrapper gap={96} justify="center">
                <Icon width="112" height="112" viewBox="0 0 112 112" iconId="github"/>
                <Icon width="112" height="112" viewBox="0 0 112 112" iconId="git"/>
                <Icon width="112" height="112" viewBox="0 0 112 112" iconId="react"/>
                <Icon width="112" height="112" viewBox="0 0 112 112" iconId="sass"/>
                <Icon width="112" height="112" viewBox="0 0 112 112" iconId="bootstrap"/>
                <Icon width="112" height="112" viewBox="0 0 112 112" iconId="vscode-tailwind"/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
    gap: 74px;
    min-height: 100vh;

    background-color: #bdf4ff;
`;
import styled from "styled-components";
import mainPhoto from "../../../assets/images/main.webp";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction="row">
                <FlexWrapper direction="column">
                    <MainTitle>Software Developer</MainTitle>
                    <Name>Hello, my name is Denis Zinovskiy</Name>
                    <MainDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consectetur
                        debitis, ipsa iste labore minima quisquam tempore tenetur vel!</MainDescription>
                    <FlexWrapper>
                        <Button width={115} height={43} bgColor={"#fdc435"} borderRadius={8}>Projects</Button>
                        <Button width={115} height={43} borderRadius={8}>LinkedIn</Button>
                    </FlexWrapper>
                </FlexWrapper>
                <Photo src={mainPhoto} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #e4bbbb`

const Photo = styled.img`
    width: 720px;
    height: 629px;`

const MainTitle = styled.h1`

`

const Name = styled.h1`

`

const MainDescription = styled.p`

`

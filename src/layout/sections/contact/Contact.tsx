import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../styles/Container.ts";


export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <StyledForm>
                    <FieldName>
                        Name
                        <Field/>
                    </FieldName>
                    <FieldName>
                        Email
                        <Field/>
                    </FieldName>
                    <FieldName>
                        Message
                        <Field as="textarea"/>
                    </FieldName>
                    <Button type="submit" width={89} height={43} borderRadius={8} bgColor={"#fdc435"}>Send</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background-color: #c6fdc6;
    min-height: 50vh;

`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    max-width: 400px;
    width: 100%;
    gap: 24px;
`

const Field = styled.input`
    display: block;
`

const FieldName = styled.label`

`


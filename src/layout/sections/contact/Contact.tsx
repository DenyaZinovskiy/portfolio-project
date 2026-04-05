import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../styles/Container.ts";
import {theme} from "../../../styles/Theme.ts";


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

    button[type="submit"] {
        
        align-self: flex-end;

        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.5;
        color: ${theme.colors.titlesFont};
    }

    textarea {
        
        height: 160px;
        resize: none;
    }
    
    padding-bottom: 56px;
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
    
    width: 100%;
    height: 40px;

    border: 1px solid #e8ecf4;
    border-radius: 8px;
`

const FieldName = styled.label`

    display: flex;
    flex-direction: column;
    gap: 8px;

    font-weight: 600;
    font-size: 16px;
    color: ${theme.colors.titlesFont};

`




import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const ContactForm = () => {
    return (
        <StyledContact>
            <Container>
                <StyledContactForm>
                    <SectionTitle title={'Leave us your info'} description={''} />
                    <StyledForm>
                        <label>Your Full Name ( Required)</label>
                        <Field/>
                        <label>Your Email ( Required)</label>
                        <Field/>
                        <label>Subject</label>
                        <Field/>
                        <label>Your Message</label>
                        <Field as={"textarea"}/>
                        <Button>send message</Button>
                    </StyledForm>
                </StyledContactForm>
                <StyledContactInformation>
                    <SectionTitle title={'Contact information'} description={''} />
                </StyledContactInformation>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media ${theme.media.mobile} {
            flex-direction: column;
            justify-content: center;
        }
    }
`

const StyledContactForm = styled.div`
    max-width: 570px;
    width: 100%;
`
const StyledContactInformation = styled.div`
    max-width: 370px;
    width: 100%;

    @media ${theme.media.mobile} {
        margin-top: 66px;
    }
`

const StyledForm = styled.form`
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: white;
    padding: 25px 24px 25px 25px;

    textarea {
        height: 210px;
    }

    ${Button} {
        width: 159px;
        padding: 9px 24px 9px 25px;
        background: ${theme.colors.accent};
        font-weight: 600;
        line-height: 17px;
        text-transform: uppercase;
        margin-top: 25px;

        &:hover {
            color: ${theme.colors.primaryBg};
        }
    }
`

const Field = styled.input`
    height: 50px;
    background: ${theme.colors.secondaryBg};
    border: none;
`

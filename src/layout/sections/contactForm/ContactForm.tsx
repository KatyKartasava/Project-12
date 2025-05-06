import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Card} from "../../../components/card/Card";

export const ContactForm: React.FC = () => {

    const card1 = [
        { name: "Country", value: "Bangladesh" },
        { name: "City", value: "Dhaka" },
        { name: "Street", value: "35 vhatara, Badda" }
    ];

    const card2=[
        { name: "Email", value: "youremail@gmail.com" },
        { name: "Skype", value: "@yourusername" },
        { name: "Telegram", value: "@yourusername" }
    ];

    const card3= [
        { name: "Support services", value: "15369" },
        { name: "Office", value: "+58 (021)356 587 235" },
        { name: "Personal", value: "+58 (021)356 587 235" }
    ];

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
                    <Card iconId={'location'} cards={card1} />
                    <Card iconId={'mail'} cards={card2} />
                    <Card iconId={'mobile'} cards={card3} />
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
        flex-wrap: wrap-reverse;
        column-gap: 30px;

        @media ${theme.media.mobile} {
            justify-content: center;
        }
    }
`

const StyledContactForm = styled.div`
    max-width: 570px;
    min-width: 345px;
    flex-grow: 2;
`
const StyledContactInformation = styled.div`
    max-width: 370px;
    min-width: 255px;
    flex-grow: 1;
`

const StyledForm = styled.form`
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: white;
    padding: 25px 24px 25px 25px;
    
    label {
        font-size: 18px;
        font-weight: 500;
    }
    
    label:not(:first-of-type) {
        padding-top: 25px;
    }

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


import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";
import {Key, Value} from "../../../components/menu/LeftMenu";

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
                    <Card>
                        <IconWrapper>
                            <Icon iconId={'location'} width={'18'} height={'18'} viewBox={'0 0 18 18'}/>
                        </IconWrapper>
                        <ContactInfo>
                            <p><Key>Country:</Key> <Value>Bangladesh</Value></p>
                            <p><Key>City:</Key> <Value>Dhaka</Value></p>
                            <p><Key>Street:</Key> <Value>35 vhatara, Badda</Value></p>
                        </ContactInfo>
                    </Card>
                    <Card>
                        <IconWrapper>
                            <Icon iconId={'mail'} width={'18'} height={'18'} viewBox={'0 0 18 18'}/>
                        </IconWrapper>
                        <ContactInfo>
                            <p><Key>Email:</Key> <Value>youremail@gmail.com</Value></p>
                            <p><Key>Skype:</Key> <Value>@yourusername</Value></p>
                            <p><Key>Telegram:</Key> <Value>@yourusername</Value></p>
                        </ContactInfo>
                    </Card>
                    <Card>
                        <IconWrapper>
                            <Icon iconId={'mobile'} width={'18'} height={'18'} viewBox={'0 0 18 18'}/>
                        </IconWrapper>
                        <ContactInfo>
                            <p><Key>Support services:</Key> <Value>15369</Value></p>
                            <p><Key>Office:</Key> <Value>+58 (021)356 587 235</Value></p>
                            <p><Key>Personal:</Key> <Value>+58 (021)356 587 235</Value></p>
                        </ContactInfo>
                    </Card>
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

const Card = styled.div`
    text-align: center;
    padding: 38px 25px 2px 25px;
    margin-bottom: 18px;
    background-color: ${theme.colors.primaryBg};
`

const IconWrapper = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: 30px;

    &::before {
        content: "";
        display: inline-block;
        width: 40px;
        height: 40px;
        background-color: ${theme.colors.accent};
        border-radius: 50%;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -10px;
        z-index: -1;
    }
`

const ContactInfo = styled.div`
    p {
        display: flex;
        justify-content: space-between;
        padding-bottom: 14px;
    }
    
    ${Key} {
        background-color: ${theme.colors.primaryBg};
        font-size: 18px;
        font-weight: 500;
    }
`

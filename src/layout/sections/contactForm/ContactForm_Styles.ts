import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/button/Button";

const Contact = styled.section`
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

const ContactForm = styled.div`
    max-width: 570px;
    min-width: 345px;
    flex-grow: 2;
`
const ContactInformation = styled.div`
    max-width: 370px;
    min-width: 255px;
    flex-grow: 1;
`

const Form = styled.form`
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

export const S ={
    Contact,
    ContactForm,
    ContactInformation,
    Form,
    Field
}
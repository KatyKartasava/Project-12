import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

// Services

const Services = styled.section`
    text-align: center;
    
    ${FlexWrapper} {
        gap: 20px;
        
        @media ${theme.media.tablet} {
            justify-content: center;
        }
    }
`

const LastService = styled.div`
    background-color: white;
    flex-grow: 1;
    width: 310px;
    height: 225px;
    padding: 30px 25px 28px 25px;
    
    & button {
        color: ${theme.colors.accent};
        font-family: Roboto, sans-serif;
        font-size: 12px;
        font-weight: 700;
        padding: 3px 17px 3px 0;
        
        position: relative;
        
        &::before {
            content: "";
            width: 5px;
            height: 1.5px;
            background-color: ${theme.colors.accent};
            position: absolute;
            right: 7px;
            top: 40%;
            transform: rotate(45deg);
        }

        &::after {
            content: "";
            width: 5px;
            height: 1.5px;
            background-color: ${theme.colors.accent};
            position: absolute;
            right: 7px;
            bottom: 40%;
            transform: rotate(-45deg);
        }
    }
`

const LastServiceTitle = styled.h3``

const LastServiceDescription = styled.p`
    padding: 16px 0 7px;
`

// Service

const Service = styled.div`
    background-color: white;
    flex-grow: 1;
    width: 310px;
    height: 225px;
    padding: 30px 25px 28px 25px;
    
    & svg {
        fill: ${theme.colors.accent};
    }
`

const ServiceTitle = styled.h3`
    padding: 10px 0 15px;
`

const ServiceText = styled.p``

export const S = {
    Services,
    LastService,
    LastServiceTitle,
    LastServiceDescription,
    Service,
    ServiceTitle,
    ServiceText
}
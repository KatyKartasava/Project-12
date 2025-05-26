import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import arrow from "../../../assets/images/svg/ArrowButtonMain.svg";
import arrowHover from './../../../assets/images/svg/ArrowButtonHover.svg';

const Main = styled.section`
    
    div div {
        background-color: ${theme.colors.primaryBg};
    }
`

const TextMain = styled.div`
    max-width: 580px;
    width: 100%;
    padding-left: 60px;
    padding-top: 20px;
    
    display: flex;
    flex-direction: column;

    @media ${theme.media.tablet} {
        padding: 100px 32px 0;
    }

    button {
        width: 154px;
        padding: 16px 32px;
        background-color: ${theme.colors.accent};
        border-radius: 5px;

        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        text-align: left;

        position: relative;
        
        transition: all 0.5s ease-in;

        &::after {
            content: "";
            background-image: url(${arrow});
            width: 16px;
            height: 16px;
            right: 32px;
            top: 50%;
            position: absolute;
            transform: translateY(-50%);
        }

        &:focus {
            border: 1px solid ${theme.colors.fontPrimary};
            border-radius: 0;
            background: ${theme.colors.primaryBg};
        }


        &:hover {
            width: 202px;
            border-radius: 8px;
            color: ${theme.colors.primaryBg};
            font-size: 24px;
            font-weight: 700;
            line-height: 32px;

            &::after {
                background-image: url(${arrowHover});
                width: 32px;
                height: 32px;
            }
        }
    }
`

export const Name = styled.span`
    font-size: 48px;
    font-weight: 700;
    color: ${theme.colors.fontPrimary};
    line-height: 123.6%;
    text-align: left;
    letter-spacing: 1.3px;
`

export const MainTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    color: ${theme.colors.fontPrimary};
    line-height: 123.6%;
    letter-spacing: 1.3px;

    p {
        display: none;
    }

    span span {
        color: ${theme.colors.accent};
        text-transform: none;
    }
`

const Text = styled.p`
    font-size: 16px;
    font-weight: normal;
    max-width: 424px;
    width: 100%;
    line-height: 24px;

    padding-top: 18px;
    padding-bottom: 40px;
`

const WrapperPhoto = styled.div`
    max-width: 100%;
    padding-top: 8px;
    margin: 0 auto;
`

const Photo = styled.img`
    width: 326px;
    height: 459px;
    object-fit: cover;

    @media ${theme.media.tablet} {
        margin-top: 52px;
    }
`

export const S = {
    Main,
    TextMain,
    Name,
    MainTitle,
    Text,
    WrapperPhoto,
    Photo
}
import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/photo.png';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import arrow from './../../../assets/images/svg/ArrowButtonMain.svg';
import arrowHover from './../../../assets/images/svg/ArrowButtonHover.svg';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justifyContent={'space-around'} alignItems={'center'} wrap={'wrap'}>
                    <TextMain>
                        <Name>I’m Rayan Adlrdard</Name>
                        <MainTitle><span>Front-end</span> Developer</MainTitle>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat
                            lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</Text>
                        <Button>HIRE ME</Button>
                    </TextMain>
                    <Photo src={photo} alt="Photo Rayan Adlrdard"/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    div div {
        background-color: ${theme.colors.primaryBg};
    }
`

const TextMain = styled.div`
    max-width: 500px;
    width: 100%;
    margin-top: 93px;
    margin-left: 60px;

    @media ${theme.media.tablet} {
        margin-top: 100px;
        margin-left: 32px;
    }

    button {
        width: 154px;
        padding: 16px 32px;
        background-color: ${theme.colors.accent};
        border-radius: 5px;
        margin-bottom: 74px;

        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        text-align: left;

        position: relative;

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
            height: 64px;
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
`

export const MainTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    color: ${theme.colors.fontPrimary};
    line-height: 123.6%;

    span {
        color: ${theme.colors.accent};
    }
`

const Text = styled.p`
    font-size: 16px;
    font-weight: normal;
    max-width: 424px;
    width: 100%;

    margin-top: 18px;
    margin-bottom: 25px;
`

const Photo = styled.img`
    max-width: 326px;
    width: 100%;
    height: 459px;
    object-fit: cover;
    margin-top: 8px;

    @media ${theme.media.tablet} {
        margin-top: 52px;
    }
`
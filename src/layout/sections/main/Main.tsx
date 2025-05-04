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
                <FlexWrapper justifyContent={'center'} alignItems={'center'} wrap={'wrap'}>
                    <TextMain>
                        <Name>I’m Rayan Adlrdard</Name>
                        <MainTitle><span>Front-end</span> Developer</MainTitle>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat
                            lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</Text>
                        <Button>HIRE ME</Button>
                    </TextMain>
                    <WrapperPhoto>
                        <Photo src={photo} alt="Photo Rayan Adlrdard"/>
                    </WrapperPhoto>
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
    margin-left: 6px;
    margin-top: 20px;
    
    display: flex;
    flex-direction: column;

    @media ${theme.media.tablet} {
        margin-top: 100px;
        margin-left: 32px;
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

    span {
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
    max-width: 50%;
    margin-top: 8px;
    margin-left: 25px;
`

const Photo = styled.img`
    width: 326px;
    height: 459px;
    object-fit: cover;

    @media ${theme.media.tablet} {
        margin-top: 52px;
    }
`
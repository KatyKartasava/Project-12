import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/button/Button";
import {theme} from "../../../../styles/Theme";

type BlogItemPropsType = {
    title: string
    text: string
    src: string
}

export const BlogItem = (props: BlogItemPropsType) => {
    return (
        <BlogItemStyled>
            <Image src={props.src} alt="Blog" />
            <TextWrapper>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Button>Learn more</Button>
            </TextWrapper>
        </BlogItemStyled>
    );
};

const BlogItemStyled = styled.div`
    background-color: white;
    width: 310px;
    flex-grow: 1;

    ${Button} {
        width: 115px;
        color: ${theme.colors.accent};
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        text-transform: capitalize;

        position: relative;

        &::before {
            content: "";
            width: 5px;
            height: 1.5px;
            background-color: ${theme.colors.accent};
            position: absolute;
            right: 7px;
            top: 37%;
            transform: rotate(45deg);
        }

        &::after {
            content: "";
            width: 5px;
            height: 1.5px;
            background-color: ${theme.colors.accent};
            position: absolute;
            right: 7px;
            bottom: 37%;
            transform: rotate(-45deg);
        }
    }
`

const Image = styled.img`
    width: 310px;
    height: 300px;
    object-fit: cover;
    margin: 0 auto;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 17px 18px 25px;
`

const Title = styled.h4`
    font-size: 18px;
    font-weight: 500;
`

const Text = styled.p`
    margin-bottom: 9px;
    margin-top: 8px;
`

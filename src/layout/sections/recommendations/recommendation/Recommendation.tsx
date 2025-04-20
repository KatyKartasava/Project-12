import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Star} from "../../../../components/star/Star";
import {theme} from "../../../../styles/Theme";

type RecommendationPropsType = {
    title: string
    comment: string
    src: string
    name: string
    profession: string
}

export const Recommendation = (props: RecommendationPropsType) => {
    return (
        <RecommendationStyled>
            <Star />
            <Title>{props.title}</Title>
            <Comment>{props.comment}</Comment>
            <AboutPeople>
                <Image src={props.src} alt={"Photo"}/>
                <FlexWrapper direction={"column"}>
                    <Name>{props.name}</Name>
                    <Profession>{props.profession}</Profession>
                </FlexWrapper>
            </AboutPeople>
        </RecommendationStyled>
    );
};

const RecommendationStyled = styled.li`
    width: 310px;
    background-color: white;
    text-align: left;
    padding: 25px 21px 25px 25px;
`
const Title = styled.h3`
    padding: 17px 0 18px;
    font-size: 18px;
    font-weight: 500;
`

const Comment = styled.p`
    padding-bottom: 30px;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: left;
    text-transform: capitalize;
`

const AboutPeople = styled.div`
    display: flex;
`

const Image = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 27px;
`

const Name = styled.p`
    color: ${theme.colors.fontPrimary};
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
`

const Profession = styled.p`
    font-weight: 400;
    font-size: 15px;
`
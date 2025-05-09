import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Star} from "../../../../components/star/Star";
import {S} from "../Recommendations_Styles";

type RecommendationPropsType = {
    title: string
    comment: string
    src: string
    name: string
    profession: string
}

export const Recommendation: React.FC<RecommendationPropsType> = (props: RecommendationPropsType) => {
    return (
        <S.Recommendation>
            <Star />
            <S.Title>{props.title}</S.Title>
            <S.Comment>{props.comment}</S.Comment>
            <S.AboutPeople>
                <S.Image src={props.src} alt={"Photo"}/>
                <FlexWrapper direction={"column"}>
                    <S.Name>{props.name}</S.Name>
                    <S.Profession>{props.profession}</S.Profession>
                </FlexWrapper>
            </S.AboutPeople>
        </S.Recommendation>
    );
};


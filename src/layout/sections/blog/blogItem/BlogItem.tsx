import React from 'react';
import {S} from "../Blog_Styles";
import {Button} from "../../../../components/button/Button";

type BlogItemPropsType = {
    title: string
    text: string
    src: string
}

export const BlogItem: React.FC<BlogItemPropsType> = (props: BlogItemPropsType) => {
    return (
        <S.BlogItem>
            <S.Image src={props.src} alt="Blog" />
            <S.TextWrapper>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Button>Learn more</Button>
            </S.TextWrapper>
        </S.BlogItem>
    );
};


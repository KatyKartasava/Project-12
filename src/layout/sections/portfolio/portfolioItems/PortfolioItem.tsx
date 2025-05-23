import React from 'react';
import {S} from "../Portfolio_Styles";
import {Button} from "../../../../components/button/Button";

export type PortfolioItemProps = {
    img: string
    type: string
}

export const PortfolioItem= (props: PortfolioItemProps) => {
    return (
        <S.PortfolioItem>
            <S.ImageWrapper>
                <img src={props.img} alt="Portfolio image" />
                <Button>+</Button>
            </S.ImageWrapper>
        </S.PortfolioItem>
    );
};


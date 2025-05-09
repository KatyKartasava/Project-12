import React from 'react';
import {S} from "../Portfolio_Styles";
import {Button} from "../../../../components/button/Button";

export const PortfolioItems: React.FC<{imgItems: Array<string>}> = (props: {imgItems: Array<string>}) => {
    return (
        <S.PortfolioItems>
            <ul>
                {props.imgItems.map((imgItem, i) => {
                    return (
                        <S.ImageWrapper key={i}>
                            <img src={imgItem} alt="Portfolio image" />
                            <Button>+</Button>
                        </S.ImageWrapper>
                    )
                })}
            </ul>
        </S.PortfolioItems>
    );
};


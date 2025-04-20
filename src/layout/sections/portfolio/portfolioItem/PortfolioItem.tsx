import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/button/Button";
import {theme} from "../../../../styles/Theme";


export const PortfolioItem = (props: {imgItems: Array<string>}) => {
    return (
        <StyledPortfolioItem>
            <ul>
                {props.imgItems.map((imgItem, i) => {
                    return (
                        <ImageWrapper key={i}>
                            <img src={imgItem} alt="Portfolio image" />
                            <Button>+</Button>
                        </ImageWrapper>
                    )
                })}
            </ul>
        </StyledPortfolioItem>
    );
};

const StyledPortfolioItem = styled.div`
    ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        @media ${theme.media.tablet} {
            justify-content: center;
            gap: 20px;
        }
    }

    img {
        width: 310px;
        height: 300px;
        object-fit: cover;
    }
`

const ImageWrapper = styled.li`
    position: relative;

    ${Button} {
        font-size: 60px;
        font-weight: 200;
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover {
        ${Button} {
            opacity: 1;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background: rgba(255, 180, 0, 0.95);
        }
    }
`
import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type Card = {
    name: string;
    value: string;
}

export type Props = {
    iconId: string;
    cards: Card[];
};

export function Card ({iconId, cards} : Props) {

    return (
        <StyledCard>
            <IconWrapper>
                <Icon iconId={iconId} width={'18'} height={'18'} viewBox={'0 0 18 18'}/>
            </IconWrapper>
            <ContactInfo>
                {cards.map(c => {
                    return <li><span>{c.name}:</span> <span>{c.value}</span></li>
                })}
            </ContactInfo>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    text-align: center;
    padding: 39px 25px 7px 25px;
    margin-bottom: 18px;
    
    background-color: ${theme.colors.primaryBg};
`

const IconWrapper = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: 30px;

    &::before {
        content: "";
        display: inline-block;
        width: 40px;
        height: 40px;
        background-color: ${theme.colors.accent};
        border-radius: 50%;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -10px;
        z-index: -1;
    }
`

const ContactInfo = styled.ul`
    
    li {
        display: flex;
        justify-content: space-between;
        padding-bottom: 14px;
    }

    span:first-of-type {
        font-size: 18px;
        font-weight: 500;
    }
`
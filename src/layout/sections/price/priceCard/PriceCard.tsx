import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/button/Button";

type PriceCardPropsType = {
    title: string
    price: string
    text: string
}

export const PriceCard = (props: PriceCardPropsType) => {
    return (
        <StyledPriceCard>
            <TitlePriceCard>{props.title}</TitlePriceCard>
            <Price>{props.price} <span>/Hour</span></Price>
            <Text>{props.text}</Text>
            <ServicePlan>
                <li>UI Design</li>
                <li>Web development</li>
                <li>Logo design</li>
                <li>Seo optimization</li>
                <li>WordPress integration</li>
                <li>5 Websites</li>
                <li>Unlimited user</li>
                <li>20 gB bandwith</li>
            </ServicePlan>
            <Button title={'ORDER NOW'} />
        </StyledPriceCard>
    );
};

const StyledPriceCard = styled.div`
    background-color: white;
    max-width: 310px;
    width: 100%;
    text-align: center;
    margin-right: 20px;
`

const TitlePriceCard = styled.h3``

const Price = styled.p`
    font-size: 32px;
    font-weight: 700;
    
    span {
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
    }
`

const Text = styled.span`
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
`

const ServicePlan = styled.ul``
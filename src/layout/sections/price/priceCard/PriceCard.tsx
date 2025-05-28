import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/button/Button";

interface PriceCardPropsType {
    title: string;
    price: string;
    text: string;
}

export const PriceCard = ({ title, price, text}: PriceCardPropsType) => {
    const services=[
        "UI Design",
        "Web development",
        "Logo design",
        "SEO optimization",
        "WordPress integration",
        "5 Websites",
        "Unlimited users",
        "20 GB bandwidth"
    ];

    return (
        <StyledPriceCard>
            <TitlePriceCard>{title}</TitlePriceCard>
            <Price>{price} <span>/Hour</span></Price>
            <Text>{text}</Text>
            <ServicePlan>
                {services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
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
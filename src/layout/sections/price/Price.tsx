import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {PriceCard} from "./priceCard/PriceCard";

export const Price = () => {
    return (
        <StyledPrice>
           <SectionTitle title={'Price plans'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'} />
            <FlexWrapper>
                <PriceCard title={'Silver'}
                           price={'$0.00'}
                           text={'For most businesses that want to optimize web queries'} />
                <PriceCard title={'Gold'}
                           price={'$50.00'}
                           text={'For most businesses that want to optimize web queries'} />
                <PriceCard title={'Diamond'}
                           price={'$80.00'}
                           text={'For most businesses that want to optimize web queries'} />
            </FlexWrapper>
        </StyledPrice>
    );
};

const StyledPrice = styled.section`
    max-width: 970px;
    width: 100%;
    margin-left: 335px;
`
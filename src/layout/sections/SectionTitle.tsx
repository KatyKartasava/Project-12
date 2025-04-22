import React from 'react';
import styled from "styled-components";

type SectionTitleProps = {
    title: string;
    description: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
    return (
        <StyledSectionTitle>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.div`
    max-width: 438px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
`

const Title = styled.h2`
    font-weight: 700;
    font-size: 32px;
`

const Description = styled.p`
    margin-bottom: 50px;
    margin-top: 25px;
`
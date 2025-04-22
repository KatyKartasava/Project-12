import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Copyright>&#169; 2021 All Rights Reserved.Ojjomedia</Copyright>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    text-align: center;

    & > div {
        background-color: ${theme.colors.primaryBg};
    }

    @media ${theme.media.tablet} {
        padding-bottom: 80px;
    }
`

const Copyright = styled.p`
    padding: 5px;

    @media ${theme.media.tablet} {
        padding: 18px 0;
    }
`
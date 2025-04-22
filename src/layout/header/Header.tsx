import React from 'react';
import styled from "styled-components";
import {RightMenu} from "../../components/menu/RightMenu";
import {LeftMenu} from "../../components/menu/LeftMenu";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <LeftMenu />
                <RightMenu />
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    @media ${theme.media.tablet} {
        & div {
            position: relative;
        } 
    }
`

import React from 'react';
import styled from "styled-components";
import {RightMenu} from "../../components/menu/RightMenu";
import {LeftMenu} from "../../components/menu/LeftMenu";
import {Container} from "../../components/Container";

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
    & div {
        position: relative;
    }
`

import React from 'react';
import styled from "styled-components";
import {RightMenu} from "../../components/menu/RightMenu";
import {LeftMenu} from "../../components/menu/LeftMenu";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import {MobileMenu} from "./mobileMenu/MobileMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <LeftMenu />
                <MobileMenu />
                <RightMenu />
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    ${Container} {
        position: relative;
    }
    
    // @media ${theme.media.tablet} {        
    //     & div {
    //         position: relative;
    //     } 
    // }
`

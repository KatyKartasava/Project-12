import React from 'react';
import styled from "styled-components";
import {RightMenu} from "../../components/menu/RightMenu";
import {LeftMenu} from "../../components/menu/LeftMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <LeftMenu />
            <RightMenu />
        </StyledHeader>
    );
};

const StyledHeader = styled.header``

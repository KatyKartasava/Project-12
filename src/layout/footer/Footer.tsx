import React from 'react';
import {Container} from "../../components/Container";
import {S} from "./Footer_Styles";

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <S.Copyright>&#169; 2021 All Rights Reserved.Ojjomedia</S.Copyright>
            </Container>
        </S.Footer>
    );
};


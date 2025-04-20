import React from 'react';
import map from "../../../assets/images/map.png";
import styled from "styled-components";
import {Container} from "../../../components/Container";

export const Map = () => {
    return (
        <StyledMap>
            <Container>
                <Image src={map} alt={"map"}/>
            </Container>
        </StyledMap>
    );
};

const StyledMap = styled.section``

const Image = styled.img`
    width: 970px;
    height: 300px;
    object-fit: cover;
`
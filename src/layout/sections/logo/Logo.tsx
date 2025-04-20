import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import petroleum from "../../../assets/images/svg/Petroleum.svg";
import fillingStation from "../../../assets/images/svg/FillingStation.svg";
import petrolGarage from "../../../assets/images/svg/PetrolGarage.svg";
import station from "../../../assets/images/svg/Station.svg";
import {theme} from "../../../styles/Theme";

export const Logo = () => {
    return (
        <StyledLogo>
            <Container>
                <LogoWrapper>
                    <Image src={petroleum} alt={"Logo Petroleum"} />
                    <Image src={fillingStation} alt={"Logo FillingStation"} />
                    <Image src={petrolGarage} alt={"Logo PetrolGarage"} />
                    <Image src={station} alt={"Logo Station"} />
                </LogoWrapper>
            </Container>
        </StyledLogo>
    );
};

const StyledLogo = styled.section``

const LogoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Image = styled.img`
    width: 140px;
    height: 140px;
    object-fit: cover;
`
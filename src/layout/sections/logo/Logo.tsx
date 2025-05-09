import React from 'react';
import {Container} from "../../../components/Container";
import petroleum from "../../../assets/images/svg/Petroleum.svg";
import fillingStation from "../../../assets/images/svg/FillingStation.svg";
import petrolGarage from "../../../assets/images/svg/PetrolGarage.svg";
import station from "../../../assets/images/svg/Station.svg";
import {S} from "./Logo_Styles";

export const Logo: React.FC = () => {
    return (
        <S.Logo>
            <Container>
                <S.LogoWrapper>
                    <S.Image src={petroleum} alt={"Logo Petroleum"} />
                    <S.Image src={fillingStation} alt={"Logo FillingStation"} />
                    <S.Image src={petrolGarage} alt={"Logo PetrolGarage"} />
                    <S.Image src={station} alt={"Logo Station"} />
                </S.LogoWrapper>
            </Container>
        </S.Logo>
    );
};


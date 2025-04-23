import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../SectionTitle";
import {Service} from "./service/Service";
import styled from "styled-components";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Services = () => {
    return (
        <StyledServices>
            <Container>
                <SectionTitle title={'My services'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'} />
                <FlexWrapper justifyContent={'space-between'} wrap={'wrap'}>
                    <Service iconId={'coding'} width={'68'} height={'68'} viewBox={'0 0 68 68'} text={'web development'} title={'blog, e-commerce'} />
                    <Service iconId={'illustration'} width={'68'} height={'68'} viewBox={'0 0 68 68'} title={'uI/uX design'} text={'Mobile app, website design'} />
                    <Service iconId={'microphone'} width={'74'} height={'74'} viewBox={'0 0 74 74'} title={'sound design'} text={'Voice Over, Beat Making'} />
                    <Service iconId={'gameDevelopment'} width={'74'} height={'74'} viewBox={'0 0 74 74'} title={'game design'} text={'Character Design, Props & Objects'} />
                    <Service iconId={'photographer'} width={'78'} height={'78'} viewBox={'0 0 78 78'} title={'photography'} text={'portrait, product photography'} />
                    <StyledLastService>
                        <LastServiceTitle>advertising</LastServiceTitle>
                        <LastServiceDescription>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.</LastServiceDescription>
                        <Button>ORDER NOW</Button>
                    </StyledLastService>
                </FlexWrapper>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section`
    text-align: center;
`

const StyledLastService = styled.div`
    background-color: white;
    max-width: 310px;
    width: 100%;
    min-height: 225px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    
    & button {
        color: ${theme.colors.accent};
        font-family: Roboto, sans-serif;
        font-size: 12px;
        font-weight: 700;
        padding: 3px 17px 3px 0;
        
        position: relative;
        
        &::before {
            content: "";
            width: 5px;
            height: 1.5px;
            background-color: ${theme.colors.accent};
            position: absolute;
            right: 7px;
            top: 40%;
            transform: rotate(45deg);
        }

        &::after {
            content: "";
            width: 5px;
            height: 1.5px;
            background-color: ${theme.colors.accent};
            position: absolute;
            right: 7px;
            bottom: 40%;
            transform: rotate(-45deg);
        }
    }
`

const LastServiceTitle = styled.h3``

const LastServiceDescription = styled.p`
    margin: 22px 0 18px;
`
import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {Recommendation} from "./recommendation/Recommendation";
import photo1 from "../../../assets/images/James Gouse.jpg";
import photo2 from "../../../assets/images/Tiana Philips.jpg";
import photo3 from "../../../assets/images/Talan Westervelt.jpg";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";


export const Recommendations = () => {
    return (
        <StyledRecommendations>
            <Container>
                <SectionTitle title={'Recommendation'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'} />
                <ListRecommendation>
                    <Recommendation title={'Great Quality!'}
                                    comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
                                    src={photo1}
                                    name={'James Gouse'}
                                    profession={'Graphic Designer'} />
                    <Recommendation title={'Amazing work!'}
                                    comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
                                    src={photo2}
                                    name={'Tiana Philips'}
                                    profession={'Photographer'} />
                    <Recommendation title={'Great Quality!'}
                                    comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
                                    src={photo3}
                                    name={'Talan Westervelt'}
                                    profession={'Business man'} />
                </ListRecommendation>
                <Pagination>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </Pagination>
            </Container>
        </StyledRecommendations>
    );
};

const StyledRecommendations = styled.section`
    text-align: center;
`

const ListRecommendation = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;

    @media ${theme.media.tablet} {
        justify-content: center;
    }
`

const Pagination = styled.span`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #FFB400;
        border-radius: 50%;
        margin-top: 50px;

        &+span {
            margin-left: 10px;
        }
    }
`
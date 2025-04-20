import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Experience} from "../../../components/experience/Experience";

export const Education = () => {
    return (
        <StyledEducation>
            <Container>
                <SectionTitle title={'Education'}
                              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'} />
                <EducationWrapper>
                    <Experience center={'University of Toronto'}
                               position={'Student'}
                               period={'Jan 1016 - Dec 2021'}
                               name={'Certificate of web training'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'} />
                    <Experience center={'Programming Course'}
                               position={'Student'}
                               period={'Jan 1016 - Dec 2021'}
                               name={'Certificate of web training'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'} />
                    <Experience center={'Web developer courses'}
                               position={'Student'}
                               period={'Jan 1016 - Dec 2021'}
                               name={'Certificate of web training'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'} />
                </EducationWrapper>
            </Container>
        </StyledEducation>
    );
};

const StyledEducation = styled.section``

const EducationWrapper = styled.div`
    background-color: ${theme.colors.primaryBg};
    padding: 47px 29px 38px 37px;

    & > div:not(:last-of-type) {
        position: relative;
        &:before {
            content: "";
            position: absolute;
            bottom: -15px;
            border: 1px solid rgb(240, 240, 246);
            width: 901px;
            height: 0;
            left: 50%;
            transform: translate(-50%);
        }
    }
`
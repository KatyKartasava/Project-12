import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Experience} from "../../../components/experience/Experience";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const WorkHistory = () => {
    return (
        <StyledWorkHistory>
            <Container>
                <SectionTitle title={'Work History'}
                              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'} />
                <WorkHistoryWrapper>
                    <Experience center={'Lead Web Designer'}
                                position={'Student'}
                                period={'Jan 1016 - Dec 2021'}
                                name={'Certificate of web training'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'} />
                    <Experience center={'Junior Web Designer'}
                                position={'Student'}
                                period={'Jan 1016 - Dec 2021'}
                                name={'Certificate of web training'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'} />
                    <Experience center={'Senior Web Designer'}
                                position={'Student'}
                                period={'Jan 1016 - Dec 2021'}
                                name={'Certificate of web training'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'} />
                </WorkHistoryWrapper>
            </Container>
        </StyledWorkHistory>
    );
};

const StyledWorkHistory = styled.section``

const WorkHistoryWrapper = styled.div`
    background-color: ${theme.colors.primaryBg};
    padding: 43px 29px 42px 37px;
`

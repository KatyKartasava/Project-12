import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {BlogItem} from "./blogItem/BlogItem";
import blogImg1 from "../../../assets/images/landing-page-business-startup.jpg";
import blogImg2 from "../../../assets/images/white-business-card-with-red-details.jpg";
import blogImg3 from "../../../assets/images/flyer-letterhead-mockup.jpg";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Blog = () => {
    return (
        <StyledBlog>
            <Container>
                <SectionTitle title={"Blog"} description={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} />
                <FlexWrapper justifyContent={"space-between"} wrap={"wrap"}>
                    <BlogItem src={blogImg1}
                              title={'How to make web tempates'}
                              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '} />
                    <BlogItem src={blogImg2}
                              title={'Make Business card'}
                              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '} />
                    <BlogItem src={blogImg3}
                              title={'How to make Flyer Design'}
                              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '}  />
                </FlexWrapper>
            </Container>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`
    ${FlexWrapper} {
        @media ${theme.media.tablet} {
            justify-content: center; 
            gap: 20px;
        }
    }
`
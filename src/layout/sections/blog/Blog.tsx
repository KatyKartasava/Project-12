import React from 'react';
import {SectionTitle} from "../SectionTitle";
import {BlogItem} from "./blogItem/BlogItem";
import blogImg1 from "../../../assets/images/landing-page-business-startup.jpg";
import blogImg2 from "../../../assets/images/white-business-card-with-red-details.jpg";
import blogImg3 from "../../../assets/images/flyer-letterhead-mockup.jpg";
import {Container} from "../../../components/Container";
import {S} from "./Blog_Styles";

const blogItemsData = [
    {src: blogImg1, title: 'How to make web tempates', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' },
    {src: blogImg2, title: 'Make Business card', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '},
    {src: blogImg3, title: 'How to make Flyer Design', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna'}
]

export const Blog: React.FC = () => {
    return (
        <S.Blog>
            <Container>
                <SectionTitle title={"Blog"} description={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} />
                <S.FlexWrapper justifyContent={"space-between"} wrap={"wrap"}>
                    {blogItemsData.map((b, index) => (
                        <BlogItem src={b.src}
                                  title={b.title}
                                  text={b.text} />

                    ))}
                </S.FlexWrapper>
            </Container>
        </S.Blog>
    );
};

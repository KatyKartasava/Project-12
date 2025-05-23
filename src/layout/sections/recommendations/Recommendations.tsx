import React from 'react';
import {SectionTitle} from "../SectionTitle";
import {Recommendation} from "./recommendation/Recommendation";
import photo1 from "../../../assets/images/James Gouse.jpg";
import photo2 from "../../../assets/images/Tiana Philips.jpg";
import photo3 from "../../../assets/images/Talan Westervelt.jpg";
import {Container} from "../../../components/Container";
import {S} from "./Recommendations_Styles";
import {Slider} from "../../../components/slider/Slider";

const recommendationData = [
    { title: 'Great Quality!', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....', src: photo1, name: 'James Gouse', profession: 'Graphic Designer'},
    { title: 'Amazing work!', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....', src: photo2, name: 'Tiana Philips', profession: 'Photographer'},
    { title: 'Great Quality!', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....', src: photo3, name: 'Talan Westervelt', profession: 'Business man'}
]

export const Recommendations: React.FC = () => {
    return (
        <S.Recommendations>
            <Container>
                <SectionTitle title={'Recommendation'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'} />
                {/*<S.ListRecommendation>*/}
                {/*    {recommendationData.map((r, index) => (*/}
                {/*        <Recommendation key={index}*/}
                {/*                        title={r.title}*/}
                {/*                        comment={r.comment}*/}
                {/*                        src={r.src}*/}
                {/*                        name={r.name}*/}
                {/*                        profession={r.profession} />*/}
                {/*    ))}*/}
                {/*</S.ListRecommendation>*/}
                {/*<S.Pagination>*/}
                {/*    <span> </span>*/}
                {/*    <span> </span>*/}
                {/*    <span> </span>*/}
                {/*</S.Pagination>*/}
                <Slider />
            </Container>
        </S.Recommendations>
    );
};


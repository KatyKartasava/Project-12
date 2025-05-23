import React from 'react';
import photo1 from "../../../assets/images/James Gouse.jpg";
import photo2 from "../../../assets/images/Tiana Philips.jpg";
import photo3 from "../../../assets/images/Talan Westervelt.jpg";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Star} from "../star/Star";
import {S} from "./Slider_Styles";
import {FlexWrapper} from "../FlexWrapper";

const slideData = [
    { title: 'Great Quality!', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....', src: photo1, name: 'James Gouse', profession: 'Graphic Designer'},
    { title: 'Amazing work!', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....', src: photo2, name: 'Tiana Philips', profession: 'Photographer'},
    { title: 'Great Quality!', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....', src: photo3, name: 'Talan Westervelt', profession: 'Business man'}
]

type SlidePropsType = {
    title: string,
    comment: string,
    src: string,
    name: string,
    profession: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <Star />
            <S.Title>{props.title}</S.Title>
            <S.Comment>{props.comment}</S.Comment>
            <S.AboutPeople>
                <S.Image src={props.src} alt={"Photo"}/>
                <FlexWrapper direction={"column"}>
                    <S.Name>{props.name}</S.Name>
                    <S.Profession>{props.profession}</S.Profession>
                </FlexWrapper>
            </S.AboutPeople>
        </S.Slide>
    );
};

const items = [
    {slideData.map((s, i) => {
        return <Slide title={s.title} comment={s.comment} src={s.src} name={s.name} profession={s.profession} key={i} />
        })}
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
);



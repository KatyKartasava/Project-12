import React from 'react';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../SectionTitle";
import { Service } from "./service/Service";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import { S } from "./Services_Styles";

interface ServiceData {
    iconId: string;
    width: string;
    height: string;
    viewBox: string;
    title: string;
    text: string;
}

const services: ServiceData[] = [
    { iconId: 'coding', width: '68', height: '68', viewBox: '0 0 68 68', title: 'web development', text: 'blog, e-commerce' },
    { iconId: 'illustration', width: '68', height: '68', viewBox: '0 0 68 68', title: 'UI/UX design', text: 'Mobile app, website design' },
    { iconId: 'microphone', width: '74', height: '74', viewBox: '0 0 74 74', title: 'sound design', text: 'Voice Over, Beat Making' },
    { iconId: 'gameDevelopment', width: '74', height: '74', viewBox: '0 0 74 74', title: 'game design', text: 'Character Design, Props & Objects' },
    { iconId: 'photographer', width: '78', height: '78', viewBox: '0 0 78 78', title: 'photography', text: 'portrait, product photography' },
];

export const Services: React.FC = () => {
    return (
        <S.Services id="services">
            <Container>
                <SectionTitle
                    title="My services"
                    description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
                />
                <FlexWrapper justifyContent={"space-between"} wrap={"wrap"} gap={"20px"}>
                    {services.map((service, index) => (
                        <Service
                            key={index}
                            iconId={service.iconId}
                            width={service.width}
                            height={service.height}
                            viewBox={service.viewBox}
                            title={service.title}
                            text={service.text}
                        />
                    ))}
                    <S.LastService>
                        <S.LastServiceTitle>advertising</S.LastServiceTitle>
                        <S.LastServiceDescription>
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.'
                        </S.LastServiceDescription>
                        <Button>ORDER NOW</Button>
                    </S.LastService>
                </FlexWrapper>
            </Container>
        </S.Services>
    );
};

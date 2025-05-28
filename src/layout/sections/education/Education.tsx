import React from 'react';
import {SectionTitle} from "../SectionTitle";
import {Container} from "../../../components/Container";
import {Experience} from "../../../components/experience/Experience";
import {S} from "./Education_Styles";

const experienceData = [
    {center: 'University of Toronto', position: 'Student', period: 'Jan 1016 - Dec 2021', name: 'Certificate of web training', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'},
    {center: 'Programming Course', position: 'Student', period: 'Jan 1016 - Dec 2021', name: 'Certificate of web training', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'},
    {center: 'Web developer courses', position: 'Student', period: 'Jan 1016 - Dec 2021', name: 'Certificate of web training', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'}
];

export const Education: React.FC = () => {
    return (
        <S.Education id={'cv'}>
            <Container>
                <SectionTitle title={'Education'}
                              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'} />
                <S.EducationWrapper>
                    {experienceData.map((e, index) => (
                        <Experience key={index}
                                    center={e.center}
                                    position={e.position}
                                    period={e.period}
                                    name={e.name}
                                    description={e.description} />
                    ))}
                </S.EducationWrapper>
            </Container>
        </S.Education>
    );
};


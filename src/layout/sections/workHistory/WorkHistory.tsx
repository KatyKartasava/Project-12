import React from 'react';
import { SectionTitle } from "../SectionTitle";
import { Experience } from "../../../components/experience/Experience";
import { Container } from "../../../components/Container";
import { S } from './WorkHistory_Styles';

const workHistoryData = [
    {
        center: 'Lead Web Designer',
        position: 'Student',
        period: 'Jan 2016 - Dec 2021',
        name: 'Certificate of Web Training',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
    },
    {
        center: 'Junior Web Designer',
        position: 'Student',
        period: 'Jan 2016 - Dec 2021',
        name: 'Certificate of Web Training',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
    },
    {
        center: 'Senior Web Designer',
        position: 'Student',
        period: 'Jan 2016 - Dec 2021',
        name: 'Certificate of Web Training',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
    }
];

export const WorkHistory: React.FC = () => {
    return (
        <S.WorkHistory>
            <Container>
                <SectionTitle
                    title="Work History"
                    description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                />
                <S.WorkHistoryWrapper>
                    {workHistoryData.map((e) => (
                        <Experience key={e.center} {...e} />
                    ))}
                </S.WorkHistoryWrapper>
            </Container>
        </S.WorkHistory>
    );
};



import React from 'react';
import {S} from './Experience_Styles';

type EducationProps = {
    center: string
    position: string
    period: string
    name: string
    description: string
};

export const Experience: React.FC<EducationProps> = (props: EducationProps) => {
    return (
        <S.Experience>
            <S.RightPart>
                <S.NameCenter>{props.center}</S.NameCenter>
                <S.Position>{props.position}</S.Position>
                <S.Period>{props.period}</S.Period>
            </S.RightPart>
            <S.LeftPart>
                <S.CertificateName>{props.name}</S.CertificateName>
                <S.CertificateDescription>{props.description}</S.CertificateDescription>
            </S.LeftPart>
        </S.Experience>
    );
};


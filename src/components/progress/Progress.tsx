import React, { useEffect, useState } from 'react';
import { S } from './Progress_Styled';

type ProgressProps = {
    name: string;
    value: number;
};

export const Progress: React.FC<ProgressProps> = ({ name, value }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setWidth(value);
        }, 100);

        return () => clearTimeout(timeout);
    }, [value]);

    return (
        <S.ProgressContainer>
            <p>{name} <span>{value}%</span></p>
            <S.ProgressBar>
                <S.ProgressFill style={{ width: `${width}%` }} />
            </S.ProgressBar>
        </S.ProgressContainer>
    );
};
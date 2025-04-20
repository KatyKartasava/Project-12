import React from 'react';

type Props = {
    name: string;
    value: number;
};

export const Range = (props: Props) => {
    return (
        <div>
            <p>{props.name} <span>{props.value}%</span></p>
            <input type="range" value={props.value} />
        </div>
    );
};
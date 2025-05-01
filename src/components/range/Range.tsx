import React from 'react';

type Props = {
    name: string,
    value?: number,
    type?: string
};

export const Range = (props: Props) => {
    return (
        <div>
            <label>{props.name} <span>{props.value}%</span></label>
            <input type={props.type} value={props.value}/>
        </div>
    );
};
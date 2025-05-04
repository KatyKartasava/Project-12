import React from 'react';

type RangeProps = {
    name: string,
    value?: number,
    type?: string
};

export const Range: React.FC<RangeProps> = (props: RangeProps) => {
    return (
        <div>
            <label>{props.name} <span>{props.value}%</span></label>
            <input type={props.type} value={props.value}/>
        </div>
    );
};
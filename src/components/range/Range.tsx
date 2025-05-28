// import React from 'react';
//
// type RangeProps = {
//     name: string,
//     value?: number,
//     type?: string
// };
//
// export const Range: React.FC<RangeProps> = (props: RangeProps) => {
//     return (
//         <div>
//             <label>{props.name} <span>{props.value}%</span></label>
//             <input type={props.type} value={props.value}/>
//         </div>
//     );
// };

import React from 'react';
import '../../styles/ProgressLine.css';

type RangeProps = {
    progress: number;
    name: string,
    value?: number,
    type?: string
}

export const Range: React.FC<RangeProps> = (props: RangeProps) => {
    return (
        <div className="progress-container">
            <label>{props.name} <span>{props.value}%</span></label>
            {/*<input type={props.type} value={props.value}/>*/}
            <div className="progress-bar">
                <div className="progress-fill" style={{width: `${props.progress}%`}}/>
            </div>
        </div>
    );
};
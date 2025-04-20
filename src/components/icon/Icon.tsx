import React from 'react';
import iconsSprite from '../../assets/images/svg/sprite.svg';

export type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "14"} height={props.height || "14"} viewBox={props.viewBox || "0 0 14 14"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </svg>
);
};


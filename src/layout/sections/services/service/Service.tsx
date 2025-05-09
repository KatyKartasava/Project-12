import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../Services_Styles";

export type ServicePropsType = {
    iconId: string
    title: string
    text: string
    width?: string
    height?: string
    viewBox?: string
}

export const Service: React.FC<ServicePropsType> = (props: ServicePropsType) => {
    return (
        <S.Service>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
            <S.ServiceTitle>{props.title}</S.ServiceTitle>
            <S.ServiceText>{props.text}</S.ServiceText>
        </S.Service>
    );
};



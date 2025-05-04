import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

export type ServicePropsType = {
    iconId: string
    title: string
    text: string
    width?: string
    height?: string
    viewBox?: string
}

export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
            <ServiceTitle>{props.title}</ServiceTitle>
            <ServiceText>{props.text}</ServiceText>
        </StyledService>
    );
};

const StyledService = styled.div`
    background-color: white;
    flex-grow: 1;
    width: 310px;
    height: 225px;
    padding: 30px 25px 28px 25px;
    
    & svg {
        fill: ${theme.colors.accent};
    }
`

const ServiceTitle = styled.h3`
    padding: 10px 0 15px;
`

const ServiceText = styled.p``

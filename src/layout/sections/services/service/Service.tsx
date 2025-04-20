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
            <FlexWrapper justifyContent={'center'} alignItems={'center'} direction={'column'}>
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
                <ServiceTitle>{props.title}</ServiceTitle>
                <ServiceText>{props.text}</ServiceText>
            </FlexWrapper>
        </StyledService>
    );
};

const StyledService = styled.div`
    background-color: white;
    max-width: 310px;
    width: 100%;
    margin-bottom: 20px;
    min-height: 225px;
    
    & svg {
        fill: ${theme.colors.accent};
    }
`

const ServiceTitle = styled.h3`
    margin: 25px 0 15px;
`

const ServiceText = styled.p``

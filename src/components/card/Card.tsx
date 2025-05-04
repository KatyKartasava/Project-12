
import React from 'react';
import {Icon} from "../icon/Icon";
import {Key, Value} from "../../layout/header/headerMenu/desktopMenu/DesktopMenu";
import styled from "styled-components";

type Props = {

};
export const Card = (props: Props) => {
    return (
        <StyledCard>
            <IconWrapper>
                <Icon iconId={'location'} width={'18'} height={'18'} viewBox={'0 0 18 18'}/>
            </IconWrapper>
            <ContactInfo>
                <li><span>{props.name}</span> <span>{props.value}</span></li>
                <p><Key>Country:</Key> <Value>Bangladesh</Value></p>
                <p><Key>City:</Key> <Value>Dhaka</Value></p>
                <p><Key>Street:</Key> <Value>35 vhatara, Badda</Value></p>
            </ContactInfo>
        </StyledCard>
    );
};

const StyledCard = styled.div``

const IconWrapper = styled.div``

const ContactInfo = styled.ul``
import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Icon} from "../../../../components/icon/Icon";

export const Card = (props: any) => {
    let location = [
        {name: "Country:", description: "Bangladesh"},
        {name: "City:", description: "Dhaka"},
        {name: "Street:", description: "35 vhatara, Badda"}
    ];

    let email = [
        {name: "Email:", description: "youremail@gmail.com"},
        {name: "Skype:", description: "@yourusername"},
        {name: "Telegram:", description: "@yourusername"}
    ];

    let phone = [
        {name: "Support services:", description: "15369"},
        {name: "Office:", description: "+58 (021)356 587 235"},
        {name: "Personal:", description: "+58 (021)356 587 235"}
    ];

    return (
        <StyledCard>
            <IconWrapper>
                <Icon iconId={props.iconId} width={'18'} height={'18'} viewBox={'0 0 18 18'}/>
            </IconWrapper>
            <List>
                {props.location.map((i: string) => (<li>{i}</li>))}
            </List>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    text-align: center;
    padding: 25px 25px 16px 25px;
    margin-bottom: 18px;
    background-color: ${theme.colors.primaryBg};
`
const IconWrapper = styled.div`
    position: relative;
    z-index: 1;

    &::before {
        content: "";
        display: inline-block;
        width: 40px;
        height: 40px;
        background-color: ${theme.colors.accent};
        border-radius: 50%;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -10px;
        z-index: -1;
    }
`
const List = styled.ul`

`

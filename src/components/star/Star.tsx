import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";


export const Star: React.FC = () => {
    return (
         <StyledStar>
             <Icon iconId={"star"} width={'17'} height={'17'} viewBox={'0 0 17 17'} />
             <Icon iconId={"star"} width={'17'} height={'17'} viewBox={'0 0 17 17'} />
             <Icon iconId={"star"} width={'17'} height={'17'} viewBox={'0 0 17 17'} />
             <Icon iconId={"star"} width={'17'} height={'17'} viewBox={'0 0 17 17'} />
             <Icon iconId={"star"} width={'17'} height={'17'} viewBox={'0 0 17 17'} />
         </StyledStar>
    );
};

const StyledStar = styled.span`
    svg + svg {
        margin-left: 10px;
    }
`
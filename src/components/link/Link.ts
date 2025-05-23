import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

export const Link = styled.a<{active?: boolean}>`
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    
    ${props => props.active && css<{active?: boolean}>`
        color: ${theme.colors.accent};
    `}
    
    &:hover {
        color: ${theme.colors.accent};
    }
`
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Link = styled.a`
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    
    &:hover {
        color: ${theme.colors.accent};
    }
`
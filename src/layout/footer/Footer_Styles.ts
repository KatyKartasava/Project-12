import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Footer = styled.footer`
    text-align: center;

    & > div {
        background-color: ${theme.colors.primaryBg};
    }

    @media ${theme.media.tablet} {
        padding-bottom: 80px;
    }
`

const Copyright = styled.p`
    padding: 5px;

    @media ${theme.media.tablet} {
        padding: 18px 0;
    }
`

export const S = {
    Footer,
    Copyright
}
import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle `
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        
        max-width: 1440px;
        width: 100%;

        margin: 0 auto;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.fontText};
        line-height: 24px;
        text-transform: capitalize;
        font-size: 15px;
        font-weight: 400;

        background-color: ${theme.colors.secondaryBg};
        
        min-width: 375px;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.fontPrimary};
        cursor: pointer;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    button {
        background-color: unset;
        border: none;
        color: ${theme.colors.fontPrimary};
        font-size: 14px;
        font-weight: bold;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${theme.colors.fontPrimary};
        line-height: 123.6%;
    }
    
    section {
        margin-top: 70px;
    }
    
    section:first-of-type {
        margin-top: 0;
    }
    
    section:nth-of-type(2) {
        margin-top: 135px;
    }

    img {
        max-width: 100%;
        display: block;
    }

`
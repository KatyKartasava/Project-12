import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Container = styled.div`
    max-width: 1027px;
    
    min-height: 100%;
    margin: 0 108px 0 305px;
    padding: 0 27px 0 30px;
    
    overflow-x: auto;
    
    @media ${theme.media.tablet} {
        padding: 0 15px;
        margin: 0 auto;
        width: 100%;
    }
`
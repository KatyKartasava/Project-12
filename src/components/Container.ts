import styled from "styled-components";

export const Container = styled.div`
    max-width: 1027px;
    min-height: 100%;
    margin: 0 108px 0 305px;
    padding: 0 27px 0 30px;
    overflow-x: auto;
    outline: 1px solid red;
    
    @media screen and (max-width: 970px) {
        padding: 0 15px;
        width: 100%;
    }
`
import styled from "styled-components";

const ProgressContainer = styled.div`
    margin-bottom: 10px;

    p {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
    }
`

const ProgressBar = styled.div`
    background-color: #ffffff;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid #ffb400;
    padding: 1px;
`

const ProgressFill = styled.div`
    background-color: #ffb400;
    border-radius: 4px;
    height: 100%;
    transition: width 0.5s linear;
`

export const S = {
    ProgressContainer,
    ProgressBar,
    ProgressFill
}

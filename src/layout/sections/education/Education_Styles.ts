import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Education = styled.section``

const EducationWrapper = styled.div`
    background-color: ${theme.colors.primaryBg};
    padding: 47px 29px 38px 37px;

    & > div:not(:last-of-type) {
        position: relative;
        &:before {
            content: "";
            position: absolute;
            bottom: -15px;
            border: 1px solid rgb(240, 240, 246);
            max-width: 901px;
            width: 100%;
            height: 0;
            left: 50%;
            transform: translate(-50%);
        }
    }
`

export const S = {
    Education,
    EducationWrapper
}
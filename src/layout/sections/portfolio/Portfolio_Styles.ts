import styled from "styled-components";
import {Button} from "../../../components/button/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Portfolio = styled.section`
    ${FlexWrapper} {
        gap: 20px;
    }
`

// Potfolio Item

const PortfolioItem = styled.div`
    max-width: 310px;
    width: 260px;
    flex-grow: 1;

    img {
        width: 310px;
        height: 300px;
        object-fit: cover;
    }
`

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        font-size: 60px;
        font-weight: 200;
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover {
        ${Button} {
            opacity: 1;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background: rgba(255, 180, 0, 0.95);
        }
    }
`

// Tab Menu

const TabMenu = styled.div`
    margin-bottom: 50px;

    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        column-gap: 37px;
    }
`

const ListItem = styled.li``

export const S = {
    Portfolio,
    PortfolioItem,
    ImageWrapper,
    TabMenu,
    ListItem
}
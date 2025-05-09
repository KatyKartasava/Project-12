import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/button/Button";

const Blog = styled.section`
    ${FlexWrapper} {
        gap: 20px;
        
        @media ${theme.media.tablet} {
            justify-content: center;
        }
    }
`

// Blog Item

const BlogItem = styled.div`
    background-color: white;
    width: 310px;
    flex-grow: 1;

    ${Button} {
        width: 115px;
        color: ${theme.colors.accent};
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        text-transform: capitalize;

        position: relative;

        &::before {
            content: "";
            width: 5px;
            height: 1.5px;
            background-color: ${theme.colors.accent};
            position: absolute;
            right: 7px;
            top: 37%;
            transform: rotate(45deg);
        }

        &::after {
            content: "";
            width: 5px;
            height: 1.5px;
            background-color: ${theme.colors.accent};
            position: absolute;
            right: 7px;
            bottom: 37%;
            transform: rotate(-45deg);
        }
    }
`

const Image = styled.img`
    width: 310px;
    height: 300px;
    object-fit: cover;
    margin: 0 auto;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 17px 18px 25px;
`

const Title = styled.h4`
    font-size: 18px;
    font-weight: 500;
`

const Text = styled.p`
    margin-bottom: 9px;
    margin-top: 8px;
`

export const S = {
    Blog,
    FlexWrapper,
    BlogItem,
    Image,
    TextWrapper,
    Title,
    Text
}

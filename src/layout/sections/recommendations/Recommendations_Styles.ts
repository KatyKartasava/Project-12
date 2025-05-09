import styled from "styled-components";
import {theme} from "../../../styles/Theme";

// Recommendations

const Recommendations = styled.section`
    text-align: center;
`

const ListRecommendation = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;

    @media ${theme.media.tablet} {
        justify-content: center;
    }
`

const Pagination = styled.span`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #FFB400;
        border-radius: 50%;
        margin-top: 50px;

        &+span {
            margin-left: 10px;
        }
    }
`

// Recommendation

const Recommendation = styled.li`
    width: 310px;
    background-color: white;
    text-align: left;
    padding: 25px 21px 25px 25px;
    flex-grow: 1;
`

const Title = styled.h3`
    padding: 17px 0 18px;
    font-size: 18px;
    font-weight: 500;
`

const Comment = styled.p`
    padding-bottom: 30px;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: left;
    text-transform: capitalize;
`

const AboutPeople = styled.div`
    display: flex;
`

const Image = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 27px;
`

const Name = styled.p`
    color: ${theme.colors.fontPrimary};
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
`

const Profession = styled.p`
    font-weight: 400;
    font-size: 15px;
`

export const S = {
    Recommendations,
    ListRecommendation,
    Pagination,
    Recommendation,
    Title,
    Comment,
    AboutPeople,
    Image,
    Name,
    Profession
}
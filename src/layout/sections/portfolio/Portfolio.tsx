import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import img1 from "./../../../assets/images/landing-page-business-startup.jpg";
import img2 from "./../../../assets/images/white-business-card-with-red-details.jpg";
import img3 from "./../../../assets/images/flyer-letterhead-mockup.jpg";
import img4 from "./../../../assets/images/web-template-with-landing-page-traditional-italian-food-restaurant.jpg";
import img5 from "./../../../assets/images/corporate-identity-mock-up-logo.jpg";
import img6 from "./../../../assets/images/modern-pink-alcohol-ink-business-card.jpg";
import img7 from "./../../../assets/images/place-your-design-here.jpg";
import img8 from "./../../../assets/images/modern-business-brochure.jpg";
import img9 from "./../../../assets/images/red-professional-business-branding-stationery-set.jpg";
import {PortfolioItem} from "./portfolioItem/PortfolioItem";
import {Container} from "../../../components/Container";
import {TabMenu} from "./tabMenu/TabMenu";

const menuItems = ["All categories", "UI Design", "Web Templates", "Logo", "Branding"]
const imgItems = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <SectionTitle title={'Portfolio'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'} />
                <TabMenu menuItems={menuItems} />
                <PortfolioItem imgItems={imgItems} />
            </Container>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
    
`

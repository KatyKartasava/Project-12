import React, {useState} from "react";
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
import {PortfolioItem, PortfolioItemProps} from "./portfolioItems/PortfolioItem";
import {Container} from "../../../components/Container";
import {TabMenu, TabsItemsProps, TabsStatusType} from "./tabMenu/TabMenu";
import {S} from "./Portfolio_Styles";
import {FlexWrapper} from "../../../components/FlexWrapper";

const tabsItems: Array<TabsItemsProps> = [
    {title: "All categories", status: "all"},
    {title: "UI Design", status: "design"},
    {title: "Web Templates", status: "web-template"},
    {title: "Logo", status: "logo"},
    {title: "Branding", status: "branding"}
]
const portfolioData: Array<PortfolioItemProps> = [
    {img: img1, type: "design"},
    {img: img2, type: "web-template"},
    {img: img3, type: "web-template"},
    {img: img4, type: "design"},
    {img: img5, type: "logo"},
    {img: img6, type: "web-template"},
    {img: img7, type: "branding"},
    {img: img8, type: "design"},
    {img: img9, type: "branding"}
];

export const Portfolio: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredPortfolio = portfolioData;

    if (currentFilterStatus === "design") {
        filteredPortfolio = portfolioData.filter(p => p.type === "design");
    }
    if (currentFilterStatus === "web-template") {
        filteredPortfolio = portfolioData.filter(p => p.type === "web-template");
    }
    if (currentFilterStatus === "logo") {
        filteredPortfolio = portfolioData.filter(p => p.type === "logo");
    }
    if (currentFilterStatus === "branding") {
        filteredPortfolio = portfolioData.filter(p => p.type === "branding");
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value);
    }

    return (
        <S.Portfolio>
            <Container>
                <SectionTitle title={'Portfolio'}
                              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'}/>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus} />
                <FlexWrapper wrap={'wrap'} alignItems={'center'} justifyContent={'flex-start'}>
                    {filteredPortfolio.map((p, i) => (
                        <PortfolioItem key={i} img={p.img} type={p.type}/>
                    ))}
                </FlexWrapper>
            </Container>
        </S.Portfolio>
    );
};


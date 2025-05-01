import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Range} from "../../../components/range/Range";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Block, Key, PhotoWrapper, Value} from "../../../components/menu/LeftMenu";
import photo from '../../../assets/images/Profile.jpg';
import {MainTitle, Name} from "../../sections/main/Main";
import {Item, Link, ListItem} from "../../../components/menu/RightMenu";
import {Icon} from "../../../components/icon/Icon";
import {Button} from "../../../components/button/Button";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={true}>
                <FlexWrapper direction={'column'} justifyContent={'space-between'} alignItems={'center'}>
                    <PhotoWrapper>
                        <Photo src={photo} alt="Photo Rayan Adlardard"/>
                    </PhotoWrapper>
                    <Name>Rayan Adlardard</Name>
                    <MainTitle>Font-end Developer</MainTitle>
                    <Block className="Social">
                        <ListItem>
                            <Item><Link><Icon iconId={'iconFacebook'} width={'14'} height={'14'} viewBox={'0 0 14 14'}/></Link></Item>
                            <Item><Link><Icon iconId={'iconInstagram'} width={'14'} height={'14'} viewBox={'0 0 14 14'} /></Link></Item>
                            <Item><Link><Icon iconId={'iconTwitter'} width={'14'} height={'14'} viewBox={'0 0 14 14'} /></Link></Item>
                            <Item><Link><Icon iconId={'iconLinkedin'} width={'14'} height={'14'} viewBox={'0 0 14 14'} /></Link></Item>
                            <Item><Link><Icon iconId={'iconYoutube'} width={'14'} height={'14'} viewBox={'0 0 14 14'} /></Link></Item>
                            <Item><Link><Icon iconId={'iconDribble'} width={'14'} height={'14'} viewBox={'0 0 14 14'} /></Link></Item>
                        </ListItem>
                    </Block>
                    <Block className="PrivateInfo">
                        <p><Key>Age:</Key> <Value>24</Value></p>
                        <p><Key>Residence:</Key> <Value>BD</Value></p>
                        <p><Key>Freelance:</Key> <Value className="accent">Available</Value></p>
                        <p><Key>Address:</Key> <Value>Dhaka,Bangladesh</Value></p>
                    </Block>
                    <Block className="Languages">
                        <h4>Languages</h4>
                        <Range name={"Bangla"} value={100} type={"range"} />
                        <Range name={"English"} value={80} type={"range"} />
                        <Range name={"Spanish"} value={60} type={"range"} />
                    </Block>
                    <Block className="Skills">
                        <h4>Skills</h4>
                        <Range name={"Html"} value={90} type={"range"} />
                        <Range name={"CSS"} value={85} type={"range"} />
                        <Range name={"JS"} value={80} type={"range"} />
                        <Range name={"PHP"} value={75} type={"range"} />
                        <Range name={"WordPress"} value={85} type={"range"} />
                    </Block>
                    <Block className="ExtraSkills">
                        <h4>Extra Skills</h4>
                        <Range name={"Bootstrap, Materialize"} type={"checkbox"} />
                        <Range name={"Stylus, Sass, Less"} type={"checkbox"} />
                        <Range name={"Gulp, Webpack, Grunt"} type={"checkbox"} />
                        <Range name={"GIT Knowledge"} type={"checkbox"} />
                    </Block>
                    <Button>Download CV
                        <Icon iconId={'download'} />
                    </Button>
                </FlexWrapper>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.aside`
    width: 100%;
   
    padding: 50px 46px 25px 40px;
    position: fixed;
    left: 0;
    top: 0;
    background-color: ${theme.colors.primaryBg};
    z-index: 999;
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
    
    ${FlexWrapper} {
        padding: 50px 46px 25px 40px;
    }
    
    ${Name} {
        font-size: 18px;
        font-weight: 500;
        margin-top: 30px;
        margin-bottom: 15px;
    }
    
    ${MainTitle} {
        color: ${theme.colors.fontText};
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 20px;
    }
    
    ${Button} {
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        text-align: left;
        text-transform: uppercase;
        padding: 10px 0 10px 40px;
        background-color: ${theme.colors.accent};
        margin-top: 25px;
        width: 100%;
        
        svg {
            margin-left: 20px;
        }
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    right: 50px;
    top: 35px;
    
    span {
        display: block;
        width: 30px;
        height: 2px;
        border-radius: 30px;
        background-color: ${theme.colors.accent};
        position: absolute;
        
        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            border-radius: 30px;
            background-color: ${theme.colors.accent};
            position: absolute;
            transform: translateY(-8px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}
        }
        
        &::after {
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            border-radius: 30px;
            background-color: ${theme.colors.accent};
            position: absolute;
            transform: translateY(8px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
    `

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999999;
    background-color: white;
    display: none;
    
    ${props => props.isOpen && css <{isOpen: boolean}>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`

const Photo = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`

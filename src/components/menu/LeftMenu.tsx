import React from 'react';
import styled from "styled-components";
import photo from '../../assets/images/Profile.jpg';
import {Range} from "../range/Range";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../FlexWrapper";
import {MainTitle, Name} from "../../layout/sections/main/Main";
import {Icon} from "../icon/Icon";
import {Item, Link, ListItem} from "./RightMenu";
import {Button} from "../button/Button";

export const LeftMenu = () => {
    return (
        <StyledLeftMenu>
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
                    <div><Key>Age:</Key> <Value>24</Value></div>
                    <div><Key>Residence:</Key> <Value>BD</Value></div>
                    <div><Key>Freelance:</Key> <Value className="accent">Available</Value></div>
                    <div><Key>Address:</Key> <Value>Dhaka,Bangladesh</Value></div>
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
        </StyledLeftMenu>
    );
};

const StyledLeftMenu = styled.aside`
    width: 305px;
    position: absolute;
    left: -305px;
    top: 0;
    background-color: ${theme.colors.primaryBg};
    line-height: 24px;
    
    ${FlexWrapper} {
        padding: 50px 46px 25px 40px;
    }
    
    ${Name} {
        font-size: 18px;
        font-weight: 500;
        margin-top: 30px;
        margin-bottom: 18px;
    }
    
    ${MainTitle} {
        color: ${theme.colors.fontText};
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 24px;
        letter-spacing: 0;
    }
    
    ${Button} {
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        text-align: left;
        text-transform: uppercase;
        padding: 10px 0 10px 40px;
        background-color: ${theme.colors.accent};
        margin-top: 40px;
        width: 100%;
        
        svg {
            margin-left: 20px;
        }
    }
`

export const PhotoWrapper = styled.div`
    position: relative;
    
    &::after {
        content: "";
        width: 16px;
        height: 16px;
        right: 10px;
        bottom: 18px;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.15);
        background-color: rgb(126, 185, 66);
        border-radius: 50%;
        position: absolute; 
    }
`

const Photo = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`

export const Block = styled.div`
    position: relative;
    padding-bottom: 25px;
    width: 100%;

    &::after {
        content: "";
        left: 0;
        bottom: 0;
        width: 100%;
        border: 2px solid rgb(240, 240, 246);
        position: absolute;
    }
    
    label {
        display: flex;
        justify-content: space-between;
    }
    
    input {
        width: 100%;
        cursor: pointer;
        overflow: hidden;
        margin-top: 1px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
    }  
    
    input[type="range"] {
        appearance: none;
        border: 1px solid ${theme.colors.accent};
        border-radius: 30px;
        width: 220px;
        height: 4px;
        outline: none;
    }
    
    input[type="range"]::-webkit-slider-thumb {
        appearance: none;
        border-radius: 30px;
        height: 2px;
        width: 20px;
        background-color: ${theme.colors.accent};
        box-shadow: -200px 0 0 200px ${theme.colors.accent};
        border: none;
    }
        
    input[type="checkbox"] {
        display: none;
    }
    
    &.ExtraSkills {
        label {
            padding-left: 30px;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                width: 10px;
                height: 10px;
                left: 0;
                top: 0;
                box-sizing: border-box;
                border: 2px solid ${theme.colors.accent};
            }

            &::after {
                content: "";
                position: absolute;
                width: 10px;
                height: 10px;
                left: 5px;
                top: 5px;
                box-sizing: border-box;
                border: 2px solid ${theme.colors.accent};
            }
        } 
    }
    
    &.PrivateInfo {
        position: relative;
        margin-top: 25px;
        width: 100%;
        color: ${theme.colors.fontPrimary};

        div {
            display: flex;
            justify-content: space-between;
            padding-bottom: 10px;
        } 
    }
    
    h4 {
        margin-top: 26px;
        margin-bottom: 15px;
        
        font-size: 18px;
        font-weight: 500;
        line-height: 123%;
    }
    
    ${ListItem} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        li + li {
            margin-top: 0;
        }
    }
    ${Item} {
        &::before {
            width: 24px;
            height: 24px;
            background-color: ${theme.colors.accent};
        }
    }
`

export const Key = styled.span`
    background-color: ${theme.colors.accent};
    padding: 0 6px;
`

export const Value = styled.span`
    &.accent {
        color: #7EB942;
    }
`
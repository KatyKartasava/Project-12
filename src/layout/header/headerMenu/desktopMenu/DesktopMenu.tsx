import React from 'react';
import styled from "styled-components";
import photo from '../../../../assets/images/Profile.jpg';
import {Range} from "../../../../components/range/Range";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {MainTitle, Name} from "../../../sections/main/Main";
import {Icon} from "../../../../components/icon/Icon";
import {Item, Link, ListItem} from "../menu/RightMenu";
import {Button} from "../../../../components/button/Button";

const listItemsIcon = ['iconFacebook', 'iconInstagram', 'iconTwitter', 'iconLinkedin', 'iconYoutube', 'iconDribble'];
const privatInfo = [
    {name: "Age", value: "24"},
    {name: "Residence", value: "BD"},
    {name: "Freelance", value: "Available"},
    {name: "Address", value: "Dhaka,Bangladesh"}
];
const languages = [
    {name: "Bangla", value: 100},
    {name: "English", value: 80},
    {name: "Spanish", value: 60}
];
const skills = [
    {name: "Html", value: 90},
    {name: "CSS", value: 85},
    {name: "JS", value: 80},
    {name: "PHP", value: 75},
    {name: "WordPress", value: 85}
];
const extraSkills = ["Bootstrap, Materialize", "Stylus, Sass, Less", "Gulp, Webpack, Grunt", "GIT Knowledge"];

export const DesktopMenu: React.FC = () => {
    return (
        <StyledDesktopMenu>
            <FlexWrapper direction={'column'} justifyContent={'space-between'} alignItems={'center'}>
                <PhotoWrapper>
                    <Photo src={photo} alt="Photo Rayan Adlardard"/>
                </PhotoWrapper>
                <Name>Rayan Adlardard</Name>
                <MainTitle>Font-end Developer</MainTitle>
                <Block className="Social">
                    <ListItem>
                        {listItemsIcon.map((i, index) => (
                            <Item><Link><Icon iconId={i} key={index} width={'14'} height={'14'} viewBox={'0 0 14 14'}/></Link></Item>
                        ))}
                    </ListItem>
                </Block>
                <Block className="PrivateInfo">
                    <ul>
                        {privatInfo.map((p, index) => (
                            <li key={index}><span>{p.name}:</span> <span>{p.value}</span></li>
                        ))}
                    </ul>
                </Block>
                <Block className="Languages">
                    <h4>Languages</h4>
                    {languages.map((l, index) => (
                        <Range name={l.name} value={l.value} type={"range"} />
                    ))}
                </Block>
                <Block className="Skills">
                    <h4>Skills</h4>
                    {skills.map((s, index) => (
                        <Range name={s.name} value={s.value} type={"range"} />
                    ))}
                </Block>
                <Block className="ExtraSkills">
                    <h4>Extra Skills</h4>
                    <ul>
                        {extraSkills.map((e, index) => (
                            <li key={index}>{e}</li>
                        ))}
                    </ul>
                </Block>
                <Button>Download CV
                    <Icon iconId={'download'} />
                </Button>
            </FlexWrapper>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.aside`
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
    
    &.ExtraSkills {
        li {
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
        
        span:first-of-type {
            background-color: ${theme.colors.accent};
            padding: 0 6px;
        }

        li {
            display: flex;
            justify-content: space-between;
            padding-bottom: 10px;
        }

        li:nth-child(3) span:nth-child(2) {
            color: #7EB942;
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
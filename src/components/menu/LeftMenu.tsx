import React from 'react';
import styled from "styled-components";
import photo from '../../assets/images/Profile.jpg';
import {Range} from "../range/Range";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../FlexWrapper";
import {MainTitle, Name} from "../../layout/sections/main/Main";
import {Icon} from "../icon/Icon";
import {Item, Link, ListItem} from "./RightMenu";

export const LeftMenu = () => {
    return (
        <StyledLeftMenu>
            <FlexWrapper direction={'column'} justifyContent={'space-between'} alignItems={'center'}>
                <PhotoWrapper>
                    <Photo src={photo} alt="Photo Rayan Adlardard"/>
                </PhotoWrapper>
                <Name>Rayan Adlardard</Name>
                <MainTitle>Font-end Developer</MainTitle>
                <Social>
                    <ListItem>
                        <Item><Link><Icon iconId={'iconFacebook'} width={'14'} height={'14'} viewBox={'0 0 14 14'}/></Link></Item>
                        <Item><Link><Icon iconId={'iconInstagram'} width={'14'} height={'14'} viewBox={'0 0 14 14'} /></Link></Item>
                        <Item><Link><Icon iconId={'iconTwitter'} width={'14'} height={'14'} viewBox={'0 0 14 14'} /></Link></Item>
                        <Item><Link><Icon iconId={'iconLinkedin'} width={'14'} height={'14'} viewBox={'0 0 14 14'} /></Link></Item>
                        <Item><Link><Icon iconId={'iconYoutube'} width={'14'} height={'14'} viewBox={'0 0 14 14'} /></Link></Item>
                        <Item><Link><Icon iconId={'iconDribble'} width={'14'} height={'14'} viewBox={'0 0 14 14'} /></Link></Item>
                    </ListItem>
                </Social>
                <PrivateInfo>
                    <p>Age: <span>24</span></p>
                    <p>Residence: <span>BD</span></p>
                    <p>Freelance: <span>Available</span></p>
                    <p>Address: <span>Dhaka,Bangladesh</span></p>
                </PrivateInfo>
                <ul>
                    <li>Private information</li>
                    <li>Languages</li>
                    <li>Skills</li>
                    <li>Extra Skills</li>
                </ul>
                <div>
                    <h4>Languages</h4>
                    <Range name={"Bangla"} value={100}/>
                    <Range name={"English"} value={80}/>
                    <Range name={"Spanish"} value={60}/>
                </div>
                <div>
                    <h4>Skills</h4>
                    <Range name={"Html"} value={90}/>
                    <Range name={"CSS"} value={85}/>
                    <Range name={"JS"} value={80}/>
                    <Range name={"PHP"} value={75} />
                    <Range name={"WordPress"} value={85} />
                </div>
            </FlexWrapper>
        </StyledLeftMenu>
    );
};

const StyledLeftMenu = styled.aside`
    width: 305px;
    padding: 50px 46px 25px 40px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${theme.colors.primaryBg};
    
    ${Name} {
        font-size: 18px;
        font-weight: 500;
        margin-top: 31px;
        margin-bottom: 15px;
    }
    
    ${MainTitle} {
        color: ${theme.colors.fontText};
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    @media ${theme.media.desktop} {
        
    }
`

const PhotoWrapper = styled.div`
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

const Social = styled.div`
    position: relative;
    padding-bottom: 24px;
    
    &::after {
        content: "";
        left: 0;
        bottom: 0;
        width: 100%;
        border: 1.5px solid rgb(240, 240, 246);
        position: absolute;
    }
    
    ${ListItem} {
        display: flex;
        flex-direction: row;
        gap: 15px;

        li + li {
            margin: 0 auto;
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

const PrivateInfo = styled.div`
    position: relative;
    padding-bottom: 24px;
    margin-top: 25px;

    &::after {
        content: "";
        left: 0;
        bottom: 0;
        width: 100%;
        border: 1.5px solid rgb(240, 240, 246);
        position: absolute;
    }
`
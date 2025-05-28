import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/button/Button";
import {MainTitle, Name} from "../../sections/main/Main_Styles";

const ListItem = styled.ul`
    li + li {
        margin-top: 43px;

        @media ${theme.media.tablet} {
            margin-top: 0;
            margin-left: 33px;
        }
    }

    @media ${theme.media.tablet} {
        display: flex;
    }
`

const Item = styled.li`
    position: relative;
    z-index: 1;
    text-align: center;

    &::before {
        content: "";
        display: inline-block;
        width: 40px;
        height: 40px;
        background-color: ${theme.colors.secondaryBg};
        border-radius: 50%;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        transform-origin: top left;
    }
`

const Link = styled.a`
    display: flex;
`

const DesktopMenu = styled.aside`
    width: 305px;
    position: absolute;
    left: 0;
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

const MobileMenu = styled.aside`
    width: 100%;
   
    padding: 50px 46px 25px 40px;
    position: fixed;
    left: 0;
    top: 0;
    background-color: ${theme.colors.primaryBg};
    z-index: 999;
    
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
    
    ${DesktopMenu} {
        left: 50%;
        right: 50%;
        transform: translateX(-50%);
    }
    
    
    ${props => props.isOpen && css <{isOpen: boolean}>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`

const RightMenu = styled.nav`
    background-color: ${theme.colors.primaryBg};

    position: fixed;
    right: 0;
    width: 108px;
    height: 1315px;
    padding: 52px 41px 0 42px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media ${theme.media.tablet} {
        bottom: 0;
        left: 0;
        right: 0;
        position: fixed;
        z-index: 999;
        width: 100%;
        height: 80px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px 15px;
        background-color: rgba(255, 255, 255, 0.7);
    }
`

const ThemeButton = styled.button`
    margin-bottom: 174px;

    @media ${theme.media.tablet} {
        margin: 0;
    }
`

export const S = {
    DesktopMenu,
    PhotoWrapper,
    FlexWrapper,
    Photo,
    Block,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    RightMenu,
    ListItem,
    Item,
    Link,
    ThemeButton
}
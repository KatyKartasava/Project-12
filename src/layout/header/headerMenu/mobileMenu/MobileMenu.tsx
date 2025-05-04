import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {DesktopMenu} from "../desktopMenu/DesktopMenu";
import {MainTitle, Name} from "../../../sections/main/Main";
import {Button} from "../../../../components/button/Button";

export const MobileMenu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const onBurgerBtnClick = () => {setMenuOpen(!menuOpen)};
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuOpen} onClick={()=>{setMenuOpen(false)}}>
                <DesktopMenu />
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

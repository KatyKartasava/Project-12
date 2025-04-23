import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Range} from "../../../components/range/Range";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={true}>
                <ul>
                    <li>

                        <h4>Rayan Adlardard</h4>
                        <p>Font-end Developer</p>
                    </li>
                    <li>Social</li>
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
                    <Range name={"PHP"} value={75}/>
                    <Range name={"WordPress"} value={85}/>
                </div>
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
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    left: 31px;
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
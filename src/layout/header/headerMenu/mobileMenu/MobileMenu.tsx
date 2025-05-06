import React, {useState} from 'react';
import {DesktopMenu} from "../desktopMenu/DesktopMenu";
import {S} from "../HeaderMenu_Styles";


export const MobileMenu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const onBurgerBtnClick = () => {setMenuOpen(!menuOpen)};
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuOpen} onClick={()=>{setMenuOpen(false)}}>
                <DesktopMenu />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};



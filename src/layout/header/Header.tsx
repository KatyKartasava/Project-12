import React from 'react';
import {RightMenu} from "./headerMenu/rightMenu/RightMenu";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {Container} from "../../components/Container";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles";

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1024;

    React.useEffect( ()=> {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
                <RightMenu />
            </Container>
        </S.Header>
    );
};



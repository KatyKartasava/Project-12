import React from 'react';
import styled from "styled-components";
import {RightMenu} from "./headerMenu/menu/RightMenu";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {Container} from "../../components/Container";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1024;

    React.useEffect( ()=> {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <StyledHeader>
            <Container>
                {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
                <RightMenu />
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    ${Container} {
        position: relative;
    }
`

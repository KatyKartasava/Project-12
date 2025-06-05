import * as React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        });
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoToBtn onClick={() => {scroll.scrollToTop()}}>
                    <Icon iconId={'arrowCircleUp'} width={'40'} height={'40'} viewBox={'0 0 40 40'} />
                </StyledGoToBtn>
            )}
        </>
    );
};

const StyledGoToBtn = styled.button`
    position: fixed;
    right: 25px;
    bottom: 30px;
    padding: 4px;
`
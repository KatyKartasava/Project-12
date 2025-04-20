import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Button = styled.button`
    color: ${theme.colors.fontPrimary};
    font-size: 12px;
    font-weight: 700;
    line-height: 17px;
    text-transform: uppercase;
    min-width: 86px;
    cursor: pointer;
`

/*
type ButtonPropsType = {
    title: string
    callBack: () => void;
}

export const Button = (props: ButtonPropsType) => {
    const OnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.callBack()
    }
    return (
        <button onClick={OnClickHandler}>{props.title}</button>
    );
};
*/
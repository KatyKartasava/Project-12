import {theme} from "./Theme";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: string,
    Fmin?: number,
    Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Inter"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.fontText};
    line-height: ${lineHeight || "24px"};
    font-size: calc((100vw - 375px)/(1440 - 375)*(${Fmax} - ${Fmin}) + ${Fmin}px);
`


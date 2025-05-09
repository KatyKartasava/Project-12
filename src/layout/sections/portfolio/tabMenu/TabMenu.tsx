import React from 'react';
import {Link} from "../../../../components/link/Link";
import {S} from "../Portfolio_Styles";

export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <S.TabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <Link href="">{item}</Link>
                    </S.ListItem>;
                })}
            </ul>
        </S.TabMenu>
    );
};


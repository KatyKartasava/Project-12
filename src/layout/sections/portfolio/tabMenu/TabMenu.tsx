import React from 'react';
import {Link} from "../../../../components/link/Link";
import {S} from "../Portfolio_Styles";

export type TabsStatusType = "all" | "design" | "web-template" | "logo" | "branding";

export type TabsItemsProps = {
    title: string
    status: TabsStatusType
};

type TabMenuPropsType = {
    tabsItems: Array<TabsItemsProps>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
};

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <S.TabMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <Link as={"button"} onClick={()=>{props.changeFilterStatus(item.status)}} active={props.currentFilterStatus === item.status}>{item.title}</Link>
                    </S.ListItem>;
                })}
            </ul>
        </S.TabMenu>
    );
};


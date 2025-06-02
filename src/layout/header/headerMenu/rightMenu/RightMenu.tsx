import React, { useState } from 'react';
import { Icon } from "../../../../components/icon/Icon";
import { S } from "../HeaderMenu_Styles";
import {TabMenu, TabsStatusType} from "../../../../components/tabMenu/TabMenu";

const listItems: { title: string; href: string; type: TabsStatusType }[]  = [
    { title: 'Home', href: 'home', type: 'home' },
    { title: 'Services', href: 'services', type: 'services' },
    { title: 'CV', href: 'cv', type: 'cv' },
    { title: 'Portfolio', href: 'portfolio', type: 'portfolio' },
    { title: 'Blog', href: 'blog', type: 'blog' },
    { title: 'Contact', href: 'contact', type: 'contact' },
];

export const RightMenu: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');

    function changeFilterStatus(value: TabsStatusType) {
        setActiveSection(value);
    }

    return (
        <S.RightMenu>
            <S.ThemeButton>
                <Icon iconId="contrast" width="30" height="30" viewBox="0 0 30 30" />
            </S.ThemeButton>
            <TabMenu
                listItems={listItems}
                activeSection={activeSection}
                changeFilterStatus={changeFilterStatus}
            />
        </S.RightMenu>
    );
};



import { S } from "../../layout/header/headerMenu/HeaderMenu_Styles";
import React from "react";
import { Icon } from "../icon/Icon";

export type TabsStatusType = 'home' | 'services' | 'cv' | 'portfolio' | 'blog' | 'contact';

type TabMenuProps = {
    listItems: Array<{ title: string; type: TabsStatusType; href: string }>;
    changeFilterStatus: (value: TabsStatusType) => void;
    activeSection: string;
};

export const TabMenu: React.FC<TabMenuProps> = ({ listItems, changeFilterStatus, activeSection }) => {
    return (
        <S.ListItem>
            {listItems.map((item) => (
                <S.IconWrapper key={item.href}>
                    <S.Item active={activeSection === item.href}>
                        <S.Link
                            as="button"
                            onClick={() => changeFilterStatus(item.type)}
                        >
                            <Icon iconId={item.href} width="18" height="18" viewBox="0 0 18 18" />
                            <S.Tooltip active={activeSection === item.href}>
                                {item.title}
                            </S.Tooltip>
                        </S.Link>
                    </S.Item>
                </S.IconWrapper>
            ))}
        </S.ListItem>
    );
};
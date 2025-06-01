import React from 'react';
import { Icon } from "../../../../components/icon/Icon";
import { S } from "../HeaderMenu_Styles";

// const listItems = ['home', 'services', 'cv', 'portfolio', 'blog', 'contact'];

const listItems = [
    {title: 'Home', href: 'home'},
    {title: 'Services', href: 'services'},
    {title: 'CV', href: 'cv'},
    {title: 'Portfolio', href: 'portfolio'},
    {title: 'Blog', href: 'blog'},
    {title: 'Contact', href: 'contact'}
];

export const RightMenu: React.FC = () => {
    return (
        <S.RightMenu>
            <S.ThemeButton>
                <Icon iconId={'contrast'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
            </S.ThemeButton>
            <S.ListItem>
                {listItems.map((item, index) => (
                    <S.IconWrapper>
                        <S.Item key={index}>
                            <S.Link href={`#${item}`}>
                                <Icon iconId={item.href} width={'18'} height={'18'} viewBox={'0 0 18 18'} />
                            </S.Link>
                        </S.Item>
                        <S.Tooltip>{item.title}</S.Tooltip>
                    </S.IconWrapper>
                ))}
            </S.ListItem>
        </S.RightMenu>
    );
};




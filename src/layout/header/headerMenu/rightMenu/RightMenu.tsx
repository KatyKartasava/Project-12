import React from 'react';
import { Icon } from "../../../../components/icon/Icon";
import { S } from "../HeaderMenu_Styles";

const listItems = ['home', 'services', 'cv', 'portfolio', 'blog', 'contact'];

export const RightMenu: React.FC = () => {
    return (
        <S.RightMenu>
            <S.ThemeButton>
                <Icon iconId={'contrast'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
            </S.ThemeButton>
            <S.ListItem>
                {listItems.map((item, index) => (
                    <S.Item key={index}>
                        <S.Link href={`#${item}`}>
                            <Icon iconId={item} width={'18'} height={'18'} viewBox={'0 0 18 18'} />
                        </S.Link>
                    </S.Item>
                ))}
            </S.ListItem>
        </S.RightMenu>
    );
};




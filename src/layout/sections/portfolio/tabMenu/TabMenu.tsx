import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/link/Link";

export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>;
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.div`
    margin-bottom: 50px;

    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        column-gap: 37px;
    }
`

const ListItem = styled.li`
    
`
import React from 'react';
import photo from '../../../assets/images/photo.png';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justifyContent={'center'} alignItems={'center'} wrap={'wrap'}>
                    <S.TextMain>
                        <S.Name>I’m Rayan Adlrdard</S.Name>
                        <S.MainTitle><span>Front-end</span> Developer</S.MainTitle>
                        <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat
                            lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</S.Text>
                        <Button>HIRE ME</Button>
                    </S.TextMain>
                    <S.WrapperPhoto>
                        <S.Photo src={photo} alt="Photo Rayan Adlrdard"/>
                    </S.WrapperPhoto>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


import React from 'react';
import photo from '../../../assets/images/photo.png';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles";
import Typewriter from "typewriter-effect";

export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper justifyContent={'center'} alignItems={'center'} wrap={'wrap'}>
                    <S.TextMain>
                        <S.Name>I’m Rayan Adlrdard</S.Name>
                        <S.MainTitle>
                            <p>Front-end Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['<span>Front-end</span> Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
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


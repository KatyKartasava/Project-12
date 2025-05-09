import React from 'react';
import {SectionTitle} from "../SectionTitle";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {Card} from "../../../components/card/Card";
import {S} from "./ContactForm_Styles";

export const ContactForm: React.FC = () => {

    const card1 = [
        { name: "Country", value: "Bangladesh" },
        { name: "City", value: "Dhaka" },
        { name: "Street", value: "35 vhatara, Badda" }
    ];

    const card2=[
        { name: "Email", value: "youremail@gmail.com" },
        { name: "Skype", value: "@yourusername" },
        { name: "Telegram", value: "@yourusername" }
    ];

    const card3= [
        { name: "Support services", value: "15369" },
        { name: "Office", value: "+58 (021)356 587 235" },
        { name: "Personal", value: "+58 (021)356 587 235" }
    ];

    return (
        <S.Contact>
            <Container>
                <S.ContactForm>
                    <SectionTitle title={'Leave us your info'} description={''} />
                    <S.Form>
                        <label>Your Full Name ( Required)</label>
                        <S.Field/>
                        <label>Your Email ( Required)</label>
                        <S.Field/>
                        <label>Subject</label>
                        <S.Field/>
                        <label>Your Message</label>
                        <S.Field as={"textarea"}/>
                        <Button>send message</Button>
                    </S.Form>
                </S.ContactForm>
                <S.ContactInformation>
                    <SectionTitle title={'Contact information'} description={''} />
                    <Card iconId={'location'} cards={card1} />
                    <Card iconId={'mail'} cards={card2} />
                    <Card iconId={'mobile'} cards={card3} />
                </S.ContactInformation>
            </Container>
        </S.Contact>
    );
};




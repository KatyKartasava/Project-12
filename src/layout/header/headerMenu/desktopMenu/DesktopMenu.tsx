import React from 'react';
import photo from '../../../../assets/images/Profile.jpg';
import {Range} from "../../../../components/range/Range";
import {Icon} from "../../../../components/icon/Icon";
import {Button} from "../../../../components/button/Button";
import {S} from "../HeaderMenu_Styles";
import {MainTitle, Name} from "../../../sections/main/Main_Styles";

const listItemsIcon = ['iconFacebook', 'iconInstagram', 'iconTwitter', 'iconLinkedin', 'iconYoutube', 'iconDribble'];
const privatInfo = [
    {name: "Age", value: "24"},
    {name: "Residence", value: "BD"},
    {name: "Freelance", value: "Available"},
    {name: "Address", value: "Dhaka,Bangladesh"}
];
const languages = [
    {name: "Bangla", value: 100},
    {name: "English", value: 80},
    {name: "Spanish", value: 60}
];
const skills = [
    {name: "Html", value: 90},
    {name: "CSS", value: 85},
    {name: "JS", value: 80},
    {name: "PHP", value: 75},
    {name: "WordPress", value: 85}
];
const extraSkills = ["Bootstrap, Materialize", "Stylus, Sass, Less", "Gulp, Webpack, Grunt", "GIT Knowledge"];

export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <S.FlexWrapper direction={'column'} justifyContent={'space-between'} alignItems={'center'}>
                <S.PhotoWrapper>
                    <S.Photo src={photo} alt="Photo Rayan Adlardard"/>
                </S.PhotoWrapper>
                <Name>Rayan Adlardard</Name>
                <MainTitle>Font-end Developer</MainTitle>
                <S.Block className="Social">
                    <S.ListItem>
                        {listItemsIcon.map((i, index) => (
                            <S.Item><S.Link><Icon iconId={i} key={index} width={'14'} height={'14'} viewBox={'0 0 14 14'}/></S.Link></S.Item>
                        ))}
                    </S.ListItem>
                </S.Block>
                <S.Block className="PrivateInfo">
                    <ul>
                        {privatInfo.map((p, index) => (
                            <li key={index}><span>{p.name}:</span> <span>{p.value}</span></li>
                        ))}
                    </ul>
                </S.Block>
                <S.Block className="Languages">
                    <h4>Languages</h4>
                    {languages.map((l, index) => (
                        <Range name={l.name} value={l.value} type={"range"} />
                    ))}
                </S.Block>
                <S.Block className="Skills">
                    <h4>Skills</h4>
                    {skills.map((s, index) => (
                        <Range name={s.name} value={s.value} type={"range"} />
                    ))}
                </S.Block>
                <S.Block className="ExtraSkills">
                    <h4>Extra Skills</h4>
                    <ul>
                        {extraSkills.map((e, index) => (
                            <li key={index}>{e}</li>
                        ))}
                    </ul>
                </S.Block>
                <Button>Download CV
                    <Icon iconId={'download'} />
                </Button>
            </S.FlexWrapper>
        </S.DesktopMenu>
    );
};


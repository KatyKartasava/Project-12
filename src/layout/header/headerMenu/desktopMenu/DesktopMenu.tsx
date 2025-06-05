import React from 'react';
import photo from '../../../../assets/images/Profile.jpg';
import { Icon } from "../../../../components/icon/Icon";
import { Button } from "../../../../components/button/Button";
import { S } from "../HeaderMenu_Styles";
import { MainTitle, Name } from "../../../sections/main/Main_Styles";
import { Progress } from "../../../../components/progress/Progress";

const listItemsIcon = [
    { id: 'iconFacebook', label: 'Facebook' },
    { id: 'iconInstagram', label: 'Instagram' },
    { id: 'iconTwitter', label: 'Twitter' },
    { id: 'iconLinkedin', label: 'LinkedIn' },
    { id: 'iconYoutube', label: 'YouTube' },
    { id: 'iconDribble', label: 'Dribbble' }
];

const privateInfo = [
    { name: "Age", value: "24" },
    { name: "Residence", value: "BD" },
    { name: "Freelance", value: "Available" },
    { name: "Address", value: "Dhaka, Bangladesh" }
];

const languages = [
    { name: "Bangla", value: 100 },
    { name: "English", value: 80 },
    { name: "Spanish", value: 60 }
];

const skills = [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 85 },
    { name: "JS", value: 80 },
    { name: "PHP", value: 75 },
    { name: "WordPress", value: 85 }
];

const extraSkills = [
    "Bootstrap, Materialize",
    "Stylus, Sass, Less",
    "Gulp, Webpack, Grunt",
    "GIT Knowledge"
];

export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <S.FlexWrapper direction="column" justifyContent="space-between" alignItems="center">
                <S.PhotoWrapper>
                    <S.Photo src={photo} alt="Photo of Rayan Adlardard" />
                </S.PhotoWrapper>
                <Name>Rayan Adlardard</Name>
                <MainTitle>Front-end Developer</MainTitle>

                <S.Block className="Social">
                    <S.ListItem>
                        {listItemsIcon.map((icon, index) => (
                            <S.Item key={index}>
                                <S.NavLink as={"a"} aria-label={icon.label}>
                                    <Icon iconId={icon.id} width="14" height="14" viewBox="0 0 14 14" />
                                </S.NavLink>
                            </S.Item>
                        ))}
                    </S.ListItem>
                </S.Block>

                <S.Block className="PrivateInfo">
                    <ul>
                        {privateInfo.map((p, index) => (
                            <li key={index}>
                                <span>{p.name}:</span> <span>{p.value}</span>
                            </li>
                        ))}
                    </ul>
                </S.Block>

                <S.Block className="Languages">
                    <h4>Languages</h4>
                    {languages.map((l, index) => (
                        <Progress
                            key={index}
                            name={l.name}
                            value={l.value}
                        />
                    ))}
                </S.Block>

                <S.Block className="Skills">
                    <h4>Skills</h4>
                    {skills.map((s, index) => (
                        <Progress
                            key={index}
                            name={s.name}
                            value={s.value}
                        />
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

                <Button>
                    Download CV
                    <Icon iconId="download" />
                </Button>
            </S.FlexWrapper>
        </S.DesktopMenu>
    );
};


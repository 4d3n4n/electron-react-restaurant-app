import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import pageTexts from '../../data/siteTexts/pages';
import Card from '../card/Card';
import bg from '../../assets/bg.mp4';
import m1 from '../../assets/m1.jpg';
import m2 from '../../assets/m2.jpg';
import m3 from '../../assets/m3.jpg';
import m4 from '../../assets/m4.jpg';
import m5 from '../../assets/m5.jpg';
import './cardsSection.css';

export default function CardsSection() {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const { paragraphs } = pageTexts.pages.home;

    const imagesFirstRow = [m1, m2, m3];
    const imagesSecondRow = [m4, m5];

    return (
        <div className="cards-section">
            <video
                className="bg-video"
                src={bg}
                autoPlay
                loop
                muted
                playsInline
            />

            <div className="cards-container">
                {paragraphs.slice(0, 3).map((para, index) => (
                    <Card
                        key={index}
                        title={para.title[t]}
                        image={imagesFirstRow[index]}
                        description={para.text[t]}
                    />
                ))}
            </div>

            <div className="cards-container2">
                {paragraphs.slice(3, 5).map((para, index) => (
                    <Card
                        key={index}
                        title={para.title[t]}
                        image={imagesSecondRow[index]}
                        description={para.text[t]}
                    />
                ))}
            </div>
        </div>
    );
}

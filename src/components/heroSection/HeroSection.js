import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
// import Slider from '../slider/Slider';
import Button from '../button/Button';
import pageTexts from '../../data/siteTexts/pages';
import rev1 from '../../assets/rev1.jpg';
import rev2 from '../../assets/rev2.jpg';
import rev3 from '../../assets/rev3.jpg';
import rev4 from '../../assets/rev4.jpg';
import googleLogo from '../../assets/googleLogo.png';
import hpBgVideo from '../../assets/hpBgVideo.webp';
import './heroSection.css';

export default function HeroSection() {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const { title, shopName, content, cta, review } = pageTexts.pages.home;

    return (
        <section className="hero-section">
            {/* <Slider /> */}
            <img
                className="hpBgVideo"
                src={hpBgVideo}
                alt="Background"
                loading="lazy"
            />
            <div className="hero-content">
                <div className="left-container">
                    {t === 'ja'
                        ?
                        <div>
                            <h2 className='shopName'>{shopName[t]}</h2>
                            <h2>{title[t]}</h2>
                        </div>
                        :
                        <div>
                            <h2>{title[t]}</h2>
                            <h2 className='shopName'>{shopName[t]}</h2>
                        </div>
                    }
                    <p>{content[t]}</p>
                    <Button
                        text={cta[t]}
                        link="https://pocket-concierge.jp/en/restaurants/244036?date=2025-04-25&partySize=2&serviceType=DINNER"
                        icon="fa fa-cutlery"
                    />
                </div>

                <div className="right-container">
                    <h3>4.8*</h3>
                    <p>{review[t]}</p>
                    <ul>
                        <li><img src={rev1} alt="" /></li>
                        <li><img src={rev2} alt="" /></li>
                        <li><img src={rev3} alt="" /></li>
                        <li><img src={rev4} alt="" /></li>
                    </ul>
                    <div>
                        <img src={googleLogo} alt="" />
                        <a href="https://g.co/kgs/ph48yfx" target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

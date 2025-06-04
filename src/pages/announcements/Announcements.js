import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import pageTexts from '../../data/siteTexts/pages';
import img from '../../assets/a1.jpg';
import './announcements.css'

const Announcements = () => {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const ann = pageTexts.pages.announcements;


    return (
        <section className="announcement-section">
            <img className='bg-image' src={img} alt="" />
            <div className="announcement-container">
                <div className="announcement-header">
                    <h2 className="announcement-title">{ann.title[t]}</h2>
                    <p className="announcement-content">{ann.content[t]}</p>
                </div>
                <div className="annonunce-card">
                    <div className="recruit-detail">
                        <p className='jobTitle'>{ann.fullTime[t].role}</p>
                        <span><i class="fa fa-money" aria-hidden="true"></i>{ann.fullTime[t].salary}</span>
                        <p>{ann.fullTime[t].details}</p>
                        <p className="recruit-note">{ann.note[t]}</p>
                    </div>
                    <div className="recruit-detail">
                        <p className='jobTitle'>{ann.partTime[t].role}</p>
                        <span><i class="fa fa-money" aria-hidden="true"></i>{ann.partTime[t].salary}</span>
                        <p>{ann.partTime[t].details}</p>
                        <p className="recruit-note">{ann.note[t]}</p>
                    </div>
                    <p className="recruit-contact">{ann.contact[t]}</p>
                </div>
            </div>

        </section>
    );
};

export default Announcements;

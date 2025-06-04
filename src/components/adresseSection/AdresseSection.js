import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import siteTexts from '../../data/siteTexts/pages';
import GoogleMap from '../customGoogleMap/CustomGoogleMap';
import Button from '../../components/button/Button';
import './adresseSection.css';

export default function AdresseSection() {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const contact = siteTexts.pages.contact;

    return (
        <section className="adresse-section">
            <div className="map-wrapper">
                <GoogleMap />
            </div>
            <div className='info-card'>
                <h2 className="adresse-title">{contact.address.title[t]}</h2>
                <p className="adresse-text">{contact.address.content[t]}</p>
                <ul className="hours-list">
                    {contact.hours[t].map((line, idx) => (
                        <li key={idx} className="hour-item">{line}</li>
                    ))}
                </ul>
                <div className="access-container">
                    <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                    <ul className="access-list">
                        {contact.access[t].map((line, idx) => (
                            <li key={idx} className="access-item">{line}</li>
                        ))}
                    </ul>
                </div>
                <Button
                    text={contact.directions[t]}
                    link="https://www.google.com/maps/dir/?api=1&destination=東京都港区西麻布4丁目1-15+セブン西麻布+B1F"
                    icon="fa fa-map-marker"
                />
            </div>
        </section>
    );
}

import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import siteTexts from '../../data/siteTexts/pages';
import GoogleMap from '../customGoogleMap/CustomGoogleMap';
import Button from '../button/Button';
import './contactSection.css';

export default function ContactSection() {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const contact = siteTexts.pages.contact;

    return (
        <section className="contact-section">
            <div className="map-wrapper">
                <GoogleMap />
            </div>
            <div className='contact-container'>
                <div className="form-card">
                    <h2 className="contact-title">{contact.title[t]}</h2>
                    <p className="contact-text">{contact.content[t]}</p>
                    <form className="contact-form">
                        <input type="text" name="name" placeholder={contact.form.name[t]} />
                        <input type="email" name="email" placeholder={contact.form.email[t]} />
                        <input type="text" name="subject" placeholder={contact.form.subject[t]} />
                        <textarea name="message" placeholder={contact.form.message[t]} />
                        <button type="submit">{contact.form.submit[t]}</button>
                    </form>
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
            </div>
        </section >
    );
}

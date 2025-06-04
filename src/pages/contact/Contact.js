import React, { useContext } from 'react';
// import { LangContext }  from '../../context/LangContext';
// import pageTexts from '../../data/siteTexts/pages';
import ContactSection from '../../components/contactSection/ContactSection';
import './contact.css'

const Contact = () => {
    // const { lang } = useContext(LangContext);
    // const t = lang.toLowerCase();
    // const { title, content, form } = pageTexts.pages.contact;

    return (
        <>
            <ContactSection />
        </>
    );
};

export default Contact;

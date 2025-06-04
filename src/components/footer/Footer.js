import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import footerTexts from '../../data/siteTexts/footer';
import x from '../../assets/x.svg'
import line from '../../assets/line.png'
import './footer.css';

const Footer = () => {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const footer = footerTexts;

    return (
        <footer className="app-footer">
            <div className="socials">
                <a className='xBtn' target="_blank" rel="noopener noreferrer">
                    <img src={x} alt="x" />
                    {footer.social.x[t]}
                </a>
                <a className='lineBtn' target="_blank" rel="noopener noreferrer">
                    <img src={line} alt="line" />
                    {footer.social.line[t]}
                </a>
            </div>
            <p>
                {footer.text[t]}
                <a href='https://adenan.xyz/' target="_blank" rel="noopener noreferrer">{footer.credit[t]}</a>
            </p>
        </footer>
    );
};

export default Footer;

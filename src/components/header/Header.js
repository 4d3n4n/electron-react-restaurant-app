import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../../context/LangContext';
import headerTexts from '../../data/siteTexts/header';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import LoginModal from '../loginModal/LoginModal';
import './header.css';
import logo from '../../assets/logo.png'


const Header = () => {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const keys = ['home', 'Menu', 'contact', 'Announcements'];

    return (
        <div className="headerSection">
            <div className="headerContainer">
                <header className="app-header">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <nav className="nav-buttons">
                        {keys.map(key => (
                            <Link className='btn' key={key} to={key === 'home' ? '/' : `/${key.toLowerCase()}`}>
                                {headerTexts.buttons[key][t]}
                            </Link>
                        ))}
                    </nav>
                    <div className="switchers">
                        <LoginModal />
                        <ThemeSwitcher />
                        <LanguageSwitcher />
                    </div>
                </header>

                <div className="infosContact">
                    <p className='infosTel'>{headerTexts.infos.content[t]}</p>
                    <p className='tel'>03-3499-9178</p>
                </div>
            </div>
        </div>
    );
};

export default Header;

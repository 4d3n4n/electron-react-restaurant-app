// src/components/loginModal/LoginModal.js
import React, { useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '../../context/AuthContext';
import { LangContext } from '../../context/LangContext';
import headerTexts from '../../data/siteTexts/header';
import './loginModal.css';

export default function LoginModal() {
    const { user, login, register, logout } = useAuth();
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const texts = headerTexts.authModal;

    const [visible, setVisible] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleToggle = () => {
        if (user) logout();
        else setVisible(v => !v);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError(null);
        try {
            if (isRegister) await register(email, password);
            else await login(email, password);
            setVisible(false);
        } catch (err) {
            setError(err.message);
        }
    };

    // log in btn
    const buttonJsx = (
        <button onClick={handleToggle} className="auth-btn">
            {user
                ? <i className="fa fa-sign-out" aria-hidden="true"></i>
                : <i className="fa fa-user" aria-hidden="true"></i>
            }
        </button>
    );

    // pop up
    const modalJsx = visible && (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={() => setVisible(false)}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <h2>{texts.title[t]}</h2>
                {error && <p className="modal-error">{error}</p>}
                <form onSubmit={handleSubmit} className="modal-form">
                    <input
                        type="email"
                        placeholder={texts.emailPlaceholder[t]}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder={texts.passwordPlaceholder[t]}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">
                        {isRegister ? texts.register[t] : texts.login[t]}
                    </button>
                </form>
                <p className="modal-toggle" onClick={() => setIsRegister(r => !r)}>
                    {isRegister ? texts.toggleToLogin[t] : texts.toggleToRegister[t]}
                </p>
            </div>
        </div>
    );

    return (
        <div className="login-modal-container">
            {buttonJsx}
            {createPortal(modalJsx, document.getElementById('modal-root'))}
        </div>
    );
}

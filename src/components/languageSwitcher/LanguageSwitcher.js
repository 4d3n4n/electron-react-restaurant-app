import React, { useContext, useState, useEffect, useRef } from 'react';
import { LangContext } from '../../context/LangContext';
import './languageSwitcher.css';

const AVAILABLE_LANGS = ['FR', 'EN', 'JA'];

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useContext(LangContext);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => setOpen(prev => !prev);


  const handleSelect = code => {
    toggleLang(code);
    setOpen(false);
  };

  return (
    <div className="lang-switcher" ref={ref}>
      <button className={`active-lang${open ? ' open' : ''}`} onClick={handleToggle}>
        {lang}
      </button>
      {open && (
        <ul className="dropdown">
          {AVAILABLE_LANGS.filter(code => code !== lang).map(code => (
            <li key={code}>
              <button onClick={() => handleSelect(code)}>{code}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

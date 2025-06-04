import React, { createContext, useState } from 'react';

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const getDefaultLang = () => {
    const browserLang = navigator.language.toLowerCase();

    if (browserLang.startsWith('fr')) {
      return 'FR';
    }
    if (browserLang.startsWith('ja')) {
      return 'JA';
    }
    return 'EN';
  };

  const [lang, setLang] = useState(getDefaultLang());

  const toggleLang = (newLang) => {
    if (['FR', 'EN', 'JA'].includes(newLang)) {
      setLang(newLang);
    }
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

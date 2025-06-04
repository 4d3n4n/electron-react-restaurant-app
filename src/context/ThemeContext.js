import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Détecter le thème système au démarrage
  useEffect(() => {
    const initializeTheme = async () => {
      if (window.electron) {
        try {
          const systemTheme = await window.electron.getSystemTheme();
          setTheme(systemTheme);
        } catch (error) {
          console.error('Erreur lors de la récupération du thème système:', error);
          // Fallback : détecter via media query
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          setTheme(prefersDark ? 'dark' : 'light');
        }
      } else {
        // Fallback : détecter via media query
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }
    };

    initializeTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    if (window.electron) {
      try {
        await window.electron.setTheme(newTheme);
      } catch (error) {
        console.error('Erreur lors du changement de thème:', error);
      }
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    if (window.electron) {
      window.electron.onThemeChanged((newTheme) => {
        setTheme(newTheme);
      });
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

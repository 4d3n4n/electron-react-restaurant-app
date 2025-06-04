import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './themeSwitcher.css'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className='themeSwitcher'>
      {theme === 'light'
        ? <i className="fa fa-moon-o" aria-hidden="true"></i>
        : <i className="fa fa-sun-o" aria-hidden="true"></i>}
    </button>
  );
};

export default ThemeSwitcher;

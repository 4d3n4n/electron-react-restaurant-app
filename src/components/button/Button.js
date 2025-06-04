import React from 'react';
import './button.css';

const Button = ({ text, link, icon }) => (
  <a href={link} className="app-button" target="_blank" rel="noopener noreferrer">
    <i class={icon} aria-hidden="true"></i>
    {text}
  </a>
);

export default Button;

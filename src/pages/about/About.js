import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import pageTexts from '../../data/siteTexts/pages';
import './about.css'

const About = () => {
  const { lang } = useContext(LangContext);
  const t = lang.toLowerCase();
  const { title, content } = pageTexts.pages.about;

  return (
    <section>
      <h2>{title[t]}</h2>
      <p>{content[t]}</p>
    </section>
  );
};

export default About;

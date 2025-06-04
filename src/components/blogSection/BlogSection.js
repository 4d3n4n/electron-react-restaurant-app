import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import siteTexts from '../../data/siteTexts/pages';
import Button from '../button/Button';
import blogBg from '../../assets/blogBg.jpg';
import './blogSection.css';

export default function BlogSection() {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const blogSection = siteTexts.pages.home.blogSection;

    return (
        <section className="blog-section">
            <img className='bg-image' src={blogBg} alt="" />
            <div className="blog-container">
                <h2 className="blog-title">{blogSection.title[t]}</h2>
                <ul className="blog-list">
                    {blogSection.posts.map((post) => (
                        <li key={post.date} className="blog-item">
                            <a href={post.link} className="blog-link" target="_blank" rel="noopener noreferrer">
                                <span className="blog-date">{post.date}</span>
                                <span className="blog-post-title">
                                    {post.title[t]}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="blog-more">
                    <Button
                    text={blogSection.more[t]}
                    link="https://www.sushisyomasa.com/fcblog/"
                    icon="fa fa-arrow-right"
                    />
                </div>
            </div>
        </section>
    );
}

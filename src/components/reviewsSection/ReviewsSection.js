import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import reviewsData from '../../data/siteTexts/reviewsData';
import './reviewsSection.css';
import revBg from '../../assets/reviewsBg.png';


export default function ReviewsSection() {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const titles = { fr: 'Témoignages', en: 'Testimonials', ja: '口コミ' };

    return (
        <section className="reviews-section">
            <img
                src={revBg}
                alt="Background"
                className="reviews-bg"
            />
            <div className="reviews-container">
                {reviewsData.map(review => (
                    <div key={review.id} className="review-card">
                        <img
                            src={review.image}
                            alt={review.author[t]}
                            className="review-avatar"
                        />
                        <p className="review-comment">“{review.comment[t]}”</p>
                        <p className="review-author">— {review.author[t]}</p>
                        <div className="review-rating">
                            {Array.from({ length: 5 }, (_, i) => (
                                <span
                                    key={i}
                                    className={i < review.rating ? 'filled' : ''}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

import React, { useState } from 'react';
import dataCarousel from '../../data/dataCarousel';
import ArrowButton from './ArrowButton'
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';
import './carousel.css';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide(currentSlide === dataCarousel.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? dataCarousel.length - 1 : currentSlide - 1);
    };

    return (
        <div className="carousel">
            {dataCarousel.map((slide, index) => (
                <div
                    key={slide.id}
                    className="slide-wrapper"
                    style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                    <img className="slide" src={slide.image} alt={slide.title} />
                </div>
            ))}

            <div className="buttonContainer">
                <ArrowButton direction="prev" icon={leftArrow} onClick={prevSlide} />
                <ArrowButton direction="next" icon={rightArrow} onClick={nextSlide} />
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react';
import dataslider from '../../data/dataSlider';
import './slider.css'

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(prev =>
            prev === dataslider.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="slider">
            {dataslider.map((slide, index) => (
                <div
                    key={slide.id}
                    className="slide-wrapper"
                    style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                    <img className="slide" src={slide.image} alt={slide.title} />
                </div>
            ))}
        </div>
    );
}

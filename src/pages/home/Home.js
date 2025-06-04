import React from 'react';
import './home.css'
import HeroSection from '../../components/heroSection/HeroSection';
import CardsSection from '../../components/cardsSection/CardsSection';
import CtaSection from '../../components/ctaSection/CtaSection';
import ReviewsSection from '../../components/reviewsSection/ReviewsSection';
import AdresseSection from '../../components/adresseSection/AdresseSection';
import BlogSection from '../../components/blogSection/BlogSection';

const Home = () => {

    return (
        <>
            <HeroSection />
            <CardsSection />
            <CtaSection />
            <ReviewsSection />
            <BlogSection />
            <AdresseSection />
        </>
    );
};

export default Home;

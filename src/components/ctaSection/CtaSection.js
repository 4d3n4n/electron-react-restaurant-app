import React, { useContext } from 'react'
import './ctaSection.css'
import { LangContext } from '../../context/LangContext';
import pageTexts from '../../data/siteTexts/pages';
import Carousel from '../../components/carousel/Carousel';
import Button from '../button/Button';
import dcCard from '../../assets/dcCard.png';
import saisonCard from '../../assets/saisonCard.png';
import ucCard from '../../assets/ucCard.png';
import mufgCard from '../../assets/mufgCard.png';



const CtaSection = () => {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const { review, cta, ctaSection } = pageTexts.pages.home;

    return (
        <div className='cta-section'>
            <div className='carousel-container'>
                <Carousel />
            </div>
            <div className='cta-infos'>
                <h2>{ctaSection.title[t]}</h2>
                <div className='price-container'>
                    <h3 className='price'>{ctaSection.price[t]}</h3>
                    <div className='cta-price-reassurance'>
                        <p><i class="fa fa-phone" aria-hidden="true"></i>03-3499-9178</p>
                        <p><i class="fa fa-star" aria-hidden="true"></i>4.8 {review[t]}</p>
                    </div>
                </div>
                <div className='cta-reassurance'>
                    <p className='desc'>{ctaSection.content[t]}</p>
                    <div class="payment-logos">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/300px-JCB_logo.svg.png" alt="JCB" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="American Express" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Diners_Club_Logo3.svg/langfr-1920px-Diners_Club_Logo3.svg.png" alt="Diners Club" />
                        <img src={dcCard} alt="Diners Club" />
                        <img src={saisonCard} alt="Saison" />
                        <img src={ucCard} alt="UC" />
                        <img src={mufgCard} alt="MUFG" />
                    </div>
                    <div className='capacity-container'>
                        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                        <p className='capacity'>{ctaSection.capacity[t]}</p>
                    </div>
                </div>
                <Button
                    text={cta[t]}
                    link="https://pocket-concierge.jp/en/restaurants/244036?date=2025-04-25&partySize=2&serviceType=DINNER"
                    icon="fa fa-cutlery"
                />
            </div>
        </div>
    )
}

export default CtaSection

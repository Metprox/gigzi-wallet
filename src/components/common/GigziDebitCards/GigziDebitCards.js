import React, { Fragment, useState, forwardRef } from 'react';
import Slider from 'react-slick';

import cls from './GigziDebitCards.scss';
import GigziDebitCard from './GigziDebitCard/GigziDebitCard';
import LinkedCard from '@/components/common/LinkedCard/LinkedCard';
import Link from '@/assets/svg/icons/link.svg';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import PopupLink from './PopupLink/PopupLink';

const GigziDebitCards = forwardRef(
    ({ cards, activeCard, handlerCard, setIsLink }, ref) => {
        const [rightCardId, setRightCardId] = useState(null);
        const [settings, setSettings] = useState({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 200,
            slidesToShow: 3.9,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1920,
                    swipe: false,
                    settings: {
                        slidesToShow: 3.9,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 1000,
                    swipe: true,
                    settings: {
                        slidesToShow: 2.9,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 693,
                    settings: {
                        slidesToShow: 2.8,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 667,
                    settings: {
                        slidesToShow: 2.5,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 602,
                    settings: {
                        slidesToShow: 2.3,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 555,
                    settings: {
                        slidesToShow: 2.1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 497,
                    settings: {
                        slidesToShow: 1.9,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 451,
                    settings: {
                        slidesToShow: 1.7,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 415,
                    settings: {
                        slidesToShow: 1.5,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 363,
                    settings: {
                        slidesToShow: 1.3,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
            ],
        });

        return (
            <Slider ref={ref} {...settings} className={cls.GigziDebitCards}>
                {cards.map(card => {
                    return (
                        <GigziDebitCard
                            card={card}
                            key={card.id}
                            id={card.id}
                            activeCard={activeCard}
                            rightCardId={rightCardId}
                            setRightCardId={setRightCardId}
                            handlerActive={() => handlerCard(card.id)}
                        />
                    );
                })}
                <div className={cls.linkCard} onClick={() => setIsLink(true)}>
                    <LinkedCard svg={<Link />} />
                </div>
            </Slider>
        );
    },
);

export default GigziDebitCards;

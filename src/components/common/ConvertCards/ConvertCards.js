import React, { useState, forwardRef } from 'react';
import Slider from 'react-slick';

import cls from './ConvertCards.scss';
import ConvertCard from './ConvertCard/ConvertCard';
import Time from '@/assets/svg/icons/Time.svg';
import SwitcherInfoCard from '@/components/common/SwitcherInfoCard/SwitcherInfoCard';

const ConvertCards = forwardRef(
    ({ cards, activeCard, handlerCard, moreAltcoin }, ref) => {
        const [settings, setSettings] = useState({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 200,
            slidesToShow: 3.9,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1001,
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
            <Slider ref={ref} {...settings} className={cls.ConvertCards}>
                {cards.map(card => {
                    return (
                        <ConvertCard
                            card={card}
                            key={card.id}
                            id={card.id}
                            activeCard={activeCard}
                            handlerActive={() => handlerCard(card.id)}
                        >
                            {moreAltcoin ? (
                                <SwitcherInfoCard
                                    name="More altcoins soon"
                                    svg={<Time />}
                                />
                            ) : null}
                        </ConvertCard>
                    );
                })}
            </Slider>
        );
    },
);

export default ConvertCards;

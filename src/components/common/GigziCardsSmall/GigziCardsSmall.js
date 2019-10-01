import React, { useState, forwardRef } from 'react';
import Slider from 'react-slick';

import cls from './GigziCardsSmall.scss';
import GigziCardSmall from './GigziCardSmall/GigziCardSmall';

const GigziCardsSmall = forwardRef((props, ref) => {
    const [settings, setSettings] = useState({
        dots: false,
        infinite: false,
        arrows: false,
        speed: 200,
        slidesToShow: 5.9,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 4.9,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 698,
                settings: {
                    slidesToShow: 4.4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 624,
                settings: {
                    slidesToShow: 3.9,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 494,
                settings: {
                    slidesToShow: 3.1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 2.7,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 392,
                settings: {
                    slidesToShow: 2.4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1.9,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
        ],
    });

    return (
        <Slider ref={ref} {...settings} className={cls.GigziCardsSmall}>
            {props.cards.map(card => {
                return (
                    <GigziCardSmall
                        name={card.name}
                        id={card.id}
                        key={card.id}
                    />
                );
            })}
        </Slider>
    );
});

export default GigziCardsSmall;

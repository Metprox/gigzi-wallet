import React, { useState } from 'react';

import cls from './NationalCards.scss';
import Time from '@/assets/svg/icons/Time.svg';
import SwitcherInfoCard from '@/components/common/SwitcherInfoCard/SwitcherInfoCard';
import NationalCard from './NationalCard/NationalCard'

const NationalCards = ({ cards, activeCard, handlerCard, moreAltcoin }) => {
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
        ],
    });

    return (
        <div className={cls.NationalCards}>
            {cards.map(card => {
                return (
                    <NationalCard
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
                    </NationalCard>
                );
            })}
        </div>
    );
};

export default NationalCards;

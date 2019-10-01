import React, { useState } from 'react';

import cls from './EthereumCards.scss';
import Time from '@/assets/svg/icons/Time.svg';
import SwitcherInfoCard from '@/components/common/SwitcherInfoCard/SwitcherInfoCard';
import EthereumCard from './EthereumCard/EthereumCard'

const EthereumCards = ({ cards, activeCard, handlerCard, moreAltcoin }) => {
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
        <div className={cls.EthereumCards}>
            {cards.map(card => {
                return (
                    <EthereumCard
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
                    </EthereumCard>
                );
            })}
        </div>
    );
};

export default EthereumCards;

import React, { useState } from 'react';

import cls from './ReddemCards.scss';
import Time from '@/assets/svg/icons/Time.svg';
import SwitcherInfoCard from '@/components/common/SwitcherInfoCard/SwitcherInfoCard';
import ReddemCard from './ReddemCard/ReddemCard'

const ReddemCards = ({ cards, activeCard, handlerCard, moreAltcoin }) => {
    return (
        <div className={cls.ReddemCards}>
            {cards.map(card => {
                return (
                    <ReddemCard
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
                    </ReddemCard>
                );
            })}
        </div>
    );
};

export default ReddemCards;

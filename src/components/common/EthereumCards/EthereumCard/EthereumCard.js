import React, { Fragment } from 'react';

import cls from './EthereumCard.scss';
import Black from '@/assets/svg/gigziCard/black.svg';
import Silver from '@/assets/svg/gigziCard/silver.svg';
import Gold from '@/assets/svg/gigziCard/gold.svg';
import Platinum from '@/assets/svg/gigziCard/platinum.svg';
import Ethereum from '@/assets/svg/gigziCard/ethereum.svg';
import Euro from '@/assets/svg/icons/euro.svg';
import Dollar from '@/assets/svg/sendingIcons/dollar.svg';

const EthereumCard = ({ card, activeCard, handlerActive, children }) => {
    const gigziCurrency = name => {
        switch (name) {
            case 'gzb':
                return 'gigzi black';
            case 'gzs':
                return 'gigzi silver';
            case 'gzg':
                return 'gigzi gold';
            case 'gzp':
                return 'gigzi platinum';
            case 'eth':
                return 'ether';
            case 'usd':
                return 'Us dollar';
            case 'eur':
                return 'Euro';
            default:
                return '';
        }
    };
    const gigziIcon = icon => {
        switch (icon) {
            case 'gzb':
                return <Black className={cls.gzb} />;
            case 'gzs':
                return <Silver className={cls.gzs} />;
            case 'gzg':
                return <Gold className={cls.gzg} />;
            case 'gzp':
                return <Platinum className={cls.gzp} />;
            case 'eth':
                return <Ethereum className={cls.eth} />;
            case 'usd':
                return <Dollar className={cls.dollar} />;
            case 'eur':
                return <Euro className={cls.euro} />;
            default:
                return '';
        }
    };

    const activeClassArray = [
        cls.EthereumCard,
        activeCard === card.id ? cls.ActiveCard : null,
    ];
    return (
        <Fragment>
            <div className={activeClassArray.join(' ')} onClick={handlerActive}>
                <div className={cls.Flex}>
                    <div className={cls.Icon}>{gigziIcon(card.name)}</div>
                    <div className={cls.Money}>
                        <p className={cls.Stone}>
                            {card.moneyStone} {card.name}
                        </p>
                        <p className={cls.Usd}>
                            {!!card.moneyCurrency
                                ? card.moneyCurrency.toLocaleString('ru-Ru')
                                : card.moneyCurrency}{' '}
                            {card.moneyCurrency && 'USD'}
                        </p>
                    </div>
                    <p className={cls.Name}>{gigziCurrency(card.name)}</p>
                </div>
            </div>
            <Fragment>{children}</Fragment>
        </Fragment>
    );
};

export default EthereumCard;

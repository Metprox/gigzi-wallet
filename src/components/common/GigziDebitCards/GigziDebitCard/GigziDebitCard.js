import React, { Fragment, useEffect } from 'react';

import cls from './GigziDebitCard.scss';
import Black from '@/assets/svg/gigziCard/black.svg';
import Silver from '@/assets/svg/gigziCard/silver.svg';
import Gold from '@/assets/svg/gigziCard/gold.svg';
import Platinum from '@/assets/svg/gigziCard/platinum.svg';
import Ethereum from '@/assets/svg/gigziCard/ethereum.svg';
import Euro from '@/assets/svg/icons/euro.svg';
import Dollar from '@/assets/svg/sendingIcons/dollar.svg';
import MCard from '@/assets/svg/icons/MCard.svg';
import Visa from '@/assets/svg/icons/Visa.svg';
import MultiCurrency from '../MultiCurrency/MultiCurrency';

const GigziDebitCard = ({
    card,
    activeCard,
    handlerActive,
    children,
    rightCardId,
    setRightCardId,
}) => {
    function gigziIcon(icon) {
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
            case 'visa':
                return <Visa className={cls.visa} />;
            case 'mcard':
                return <MCard className={cls.mc} />;
            default:
                return '';
        }
    }

    function replaceCode(codes) {
        let four = codes.slice(-4);
        const result = `**** **** **** ${four}`;
        return result;
    }

    useEffect(() => {
        replaceCode(card.code);
    }, []);

    const activeClassArray = [
        cls.GigziDebitCard,
        activeCard === card.id ? cls.ActiveCard : null,
    ].join(' ');

    return (
        <Fragment>
            <div className={activeClassArray} onClick={handlerActive}>
                <div className={cls.Flex}>
                    <div className={cls.Icon}>{gigziIcon(card.svg)}</div>
                    <div className={cls.Money}>
                        <p className={cls.Stone}>
                            {card.amount.toLocaleString('ru-RU')} {card.wallet}
                        </p>
                        <MultiCurrency
                            cardId={card.id}
                            active={activeCard}
                            rightCardId={rightCardId}
                            setRightCardId={setRightCardId}
                        />
                    </div>
                    <div className={cls.Flex2}>
                        <p className={cls.Code}>{replaceCode(card.code)}</p>
                        <p className={cls.Dates}>
                            {card.dateMonth}/{card.dateYear}
                        </p>
                    </div>
                </div>
            </div>
            <Fragment>{children}</Fragment>
        </Fragment>
    );
};

export default GigziDebitCard;

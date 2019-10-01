import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './DebitOrderCardItem.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import Gigzi from '@/assets/svg/logo.svg';
import Visa from '@/assets/svg/icons/Visa.svg';
import Check from '@/assets/svg/icons/Check.svg';

const DebitOrderCardItem = ({ card, isRightCard, setIsRightCard }) => {
    function checkSvg(svg) {
        switch (svg) {
            case 'gigzi':
                return <Gigzi className={cls.gigzi} />;
            case 'visa':
                return <Visa className={cls.visa} />;
            default:
                return '';
        }
    }

    const classesCardItem = [
        cls.DebitOrderCardItem,
        card.id === isRightCard ? cls.CardActive : null,
    ].join(' ');

    const classesListChecks = [
        cls.ListChecks,
        isRightCard == null || card.id === isRightCard
            ? null
            : cls.CheckNotActive,
    ].join(' ');

    return (
        <li className={classesCardItem} onClick={() => setIsRightCard(card.id)}>
            <div className={cls.Card}>
                <div className={cls.Flex}>
                    <div className={cls.Icon}>{checkSvg(card.svg)}</div>
                    <div className={cls.Name}>
                        <p>{card.card} Card</p>
                        <p>{card.version}</p>
                    </div>
                    <NavLink to="/debit/order/fees" className={cls.Link}>
                        Fees & limit
                    </NavLink>
                </div>
            </div>
                <ul className={classesListChecks}>
                    {card.params.map((param, index) => {
                        return (
                            <li key={index}>
                                {param.status ? (
                                    <Check className={cls.check} />
                                ) : null}{' '}
                                <span className={cls.cardItemName}>{param.name}</span>
                            </li>
                        );
                    })}
                </ul>
        </li>
    );
};

export default DebitOrderCardItem;

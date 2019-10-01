import React, { useState } from 'react';

import cls from './GigziCardSmall.scss';
import Black from '@/assets/svg/gigziCard/black.svg';
import Silver from '@/assets/svg/gigziCard/silver.svg';
import Gold from '@/assets/svg/gigziCard/gold.svg';
import Platinum from '@/assets/svg/gigziCard/platinum.svg';
import Ethereum from '@/assets/svg/gigziCard/ethereum.svg';
import Euro from '@/assets/svg/gigziCardSmall/EurCircle.svg';
import Dollar from '@/assets/svg/gigziCardSmall/UsdCircle.svg';

const GigziCardSmall = props => {
    const [toggleActive, setToggleActive] = useState(false);
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
        cls.GigziCardSmall,
        toggleActive ? cls.ActiveCard : null,
    ].join(' ');

    return (
        <div
            className={activeClassArray}
            onClick={() => setToggleActive(!toggleActive)}
        >
            <div className={cls.Icon}>{gigziIcon(props.name)}</div>
            <div className={cls.Flex}>
                <p className={cls.Name}>{props.name}</p>
                <p className={cls.Currency}>203.74 Usd</p>
            </div>
        </div>
    );
};

export default GigziCardSmall;

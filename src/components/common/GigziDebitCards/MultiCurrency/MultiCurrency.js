import React, { useState } from 'react';

import cls from './MultiCurrency.scss';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';

const MultiCurrency = props => {
    const [isToggleMulty, setIsToggleMulti] = useState(false);
    const [list, setList] = useState([
        {
            id: 1,
            name: 'Euro',
            value: '30 000',
            currency: 'Eur',
        },
        {
            id: 2,
            name: 'Pound',
            value: '1243.94',
            currency: 'Gbp',
        },
        {
            id: 3,
            name: 'Yuan',
            value: '1243.94',
            currency: 'Chn',
        },
        {
            id: 4,
            name: 'Hryvna',
            value: '1243.94',
            currency: 'Uah',
        },
    ]);

    function checkForActive() {
        return props.cardId === props.active;
    }

    const classesActive = [
        cls.MultiCurrency,
        checkForActive() && isToggleMulty ? cls.Active : null,
    ].join(' ');

    const funcToggle = () => {
        props.setRightCardId(props.cardId);
        console.log(props.rightCardId);
        console.log(props.cardId);
        setIsToggleMulti(checkForActive() && !isToggleMulty);
    };

    return (
        <div className={classesActive}>
            <p onClick={() => funcToggle()}>Multi-Currency</p>
            {checkForActive() && isToggleMulty ? (
                <ul className={cls.List}>
                    {list.map(curren => {
                        return (
                            <li key={curren.id} className={cls.Item}>
                                <FlexWrap align="center" justify="between">
                                    <span className={cls.CurrencyName}>
                                        {curren.name}
                                    </span>
                                    <span className={cls.CurrencyValue}>
                                        {curren.value} {curren.currency}
                                    </span>
                                </FlexWrap>
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </div>
    );
};

export default MultiCurrency;

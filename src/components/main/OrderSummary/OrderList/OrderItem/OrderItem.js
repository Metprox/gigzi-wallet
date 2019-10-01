import React, { useState } from 'react';

import cls from './OrderItem.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';
import Plus from '@/assets/svg/icons/plus.svg';
import Minus from '@/assets/svg/icons/minus.svg';

const OrderItem = ({ order }) => {
    const [counter, setCounter] = useState(1);
    if (counter == 0) {
        setCounter(1);
    }

    const classesBtnMunis = [counter == 1 ? cls.DisabledBtn : cls.Minus].join(
        ' ',
    );

    return (
        <li className={cls.OrderItem}>
            <ContainerWrap>
                <FlexWrap align="start" justify="between">
                    <div className={cls.Bar}>
                        <span>{order.description}</span>
                        <div className={cls.Counter}>
                            <div
                                className={classesBtnMunis}
                                onClick={() => setCounter(counter - 1)}
                            >
                                <Minus />
                            </div>
                            <span>{counter}</span>
                            <div
                                className={cls.Plus}
                                onClick={() => setCounter(counter + 1)}
                            >
                                <Plus />
                            </div>
                        </div>
                    </div>
                    <div className={cls.Money}>
                        <span>{order.fabrication}</span>
                        <span>{order.currency} Usd</span>
                    </div>
                </FlexWrap>
            </ContainerWrap>
        </li>
    );
};

export default OrderItem;

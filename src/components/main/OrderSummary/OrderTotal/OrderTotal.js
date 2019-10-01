import React, { useState } from 'react';

import cls from './OrderTotal.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';

const OrderTotal = props => {
    const [total, setTotal] = useState([
        {
            id: 1,
            totalGigzi: '14.3931535 gzg',
            totalCurrency: 305,
        },
        {
            id: 2,
            totalGigzi: '12.15 gzs',
            totalCurrency: 27,
        },
    ]);
    return (
        <li className={cls.OrderTotal}>
            <ContainerWrap>
                <FlexWrap align="start" justify="between" wrap>
                    <p>Total</p>
                    <div className={cls.Summary}>
                        {total.map(item => {
                            return (
                                <div className={cls.SummaryItem} key={item.id}>
                                    <span>{item.totalGigzi}</span>
                                    <span>{item.totalCurrency} usd</span>
                                </div>
                            );
                        })}
                    </div>

                </FlexWrap>
            </ContainerWrap>
        </li>
    );
};

export default OrderTotal;

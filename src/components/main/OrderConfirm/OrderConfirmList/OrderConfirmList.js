import React, { useState } from 'react';

import cls from './OrderConfirmList.scss';
import OrderConfirmItem from './OrderConfirmItem/OrderConfirmItem';
import GigziFee from '@/components/UI/GigziFee/GigziFee';
import NetworkFee from '@/components/UI/NetworkFee/NetworkFee';

const OrderConfirmList = props => {
    const [list, setList] = useState([
        {
            id: 1,
            bar: 'Gold 50z bar',
            gigziMoney: '1.42634854 GZG',
            count: 1,
        },
        {
            id: 2,
            bar: 'Gold 5z bar',
            gigziMoney: '12.96680496 GZG',
            count: 2,
        },
        {
            id: 3,
            bar: 'Gold 20oz bar',
            gigziMoney: '12,15 GZS',
            count: 1,
        },
    ]);
    console.log(props.checkFunc());
    return (
        <div className={cls.List}>
            {list.map(item => {
                return <OrderConfirmItem key={item.id} item={item} />;
            })}
            <div className={cls.Delivery}>
                <span>Delivery fee</span>
                <span>0.0384 GZG</span>
            </div>
            <GigziFee
                checkFunc={props.checkFunc()}
                value="0.0453 gzb"
                question={props.checkFunc()}
            />
            <NetworkFee
                checkFunc={props.checkFunc()}
                value="0.000012 eth"
                question={props.checkFunc()}
            />
            <div className={cls.Total}>
                <span>Total</span>
                <span>14.4315535 GZG</span>
            </div>
        </div>
    );
};

export default OrderConfirmList;

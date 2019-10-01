import React from 'react';

import cls from './OrderList.scss';
import OrderItem from './OrderItem/OrderItem';
import OrderTotal from '../OrderTotal/OrderTotal';

const OrderList = props => {
    return (
        <ul className={cls.OrderList}>
            {props.orderSummary.map(item => {
                return <OrderItem order={item} key={item.id} />;
            })}
            <OrderTotal />
        </ul>
    );
};

export default OrderList;

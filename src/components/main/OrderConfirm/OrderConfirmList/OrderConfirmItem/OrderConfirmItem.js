import React from 'react';

import cls from './OrderConfirmItem.scss';

const OrderConfirmItem = ({ item }) => {
    return (
        <div className={cls.Item}>
            <div>
                <span>{item.bar}</span>
                <span>{item.gigziMoney}</span>
            </div>
            <span>
                {item.count} {item.count > 1 ? 'items' : 'item'}
            </span>
        </div>
    );
};

export default OrderConfirmItem;

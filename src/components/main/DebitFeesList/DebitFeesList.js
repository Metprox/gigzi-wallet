import React, { useState } from 'react';

import cls from './DebitFeesList.scss';

const DebitFeesList = props => {
    const [list, setList] = useState([
        {
            id: 1,
            item: 'Montly fee',
            fee: 'None',
            description: '',
        },
        {
            id: 2,
            item: 'Dormancy fee',
            fee: '$3.95 per month',
            description:
                'Dormancy fee applies if your Card account does not reflect activity (including purchase transactions, cash withdrawals, addition of funds to your card, or balance inquiries) during the prior 90 days.',
        },
        {
            id: 3,
            item: 'Signature Purchase Transaction Fee',
            fee: '$0.50 per transaction',
            description: 'if Card purchased before February 1, 2019',
        },
        {
            id: 4,
            item: 'Signature Purchase Transaction Fee',
            fee: '$0.95 per transaction',
            description: 'if Card purchased after February 1, 2019',
        },
        {
            id: 5,
            item: 'PIN Debit Purchase Transaction Fee',
            fee: '0.50 per transaction',
            description: 'if Card purchased after February 1, 2019',
        },
        {
            id: 6,
            item: 'PIN Debit Purchase Transaction Fee',
            fee: '$0.95 per transaction',
            description: 'if Card purchased after February 1, 2019',
        },
    ]);
    return (
        <ul className={cls.DebitFeesList}>
            <li className={cls.Title}>
                <span>Item</span>
                <span>Free</span>
                <span>Description</span>
            </li>
            {list.map(fee => {
                return (
                    <li key={fee.id} className={cls.itemFee}>
                        <span>{fee.item}</span>
                        <span>{fee.fee}</span>
                        <span>{fee.description}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export default DebitFeesList;

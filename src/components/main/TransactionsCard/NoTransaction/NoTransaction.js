import React from 'react';

import cls from './NoTransaction.scss';

const NoTransaction = props => {
    return (
        <div className={cls.NoTransactions}>
            <h2>NO TRANSACTION RECORDS TO DISPLAY</h2>
            <p>GET STARTED BY ADDING FUNDS</p>
        </div>
    );
};

export default NoTransaction;

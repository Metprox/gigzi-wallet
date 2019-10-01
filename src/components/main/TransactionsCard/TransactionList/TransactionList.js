import React, { useState } from 'react';

import cls from './TransactionList.scss';
import TransactionItem from './TransactionItem/TransactionItem';

const TransactionList = props => {
    return (
        <ul className={cls.TransactionList}>
            <TransactionItem
                list={props.listTransaction}
                activePopup={props.activePopup}
                handlerPopup={props.handlerPopup}
            />
        </ul>
    );
};

export default TransactionList;

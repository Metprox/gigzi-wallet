import React from 'react';

import cls from './PopupWalletItem.scss';

const PopupWalletItem = ({ wallet }) => {
    return (
        <li className={cls.PopupWalletItem}>
            <p>
                {wallet.value} {wallet.currency.toUpperCase()}{' '}
                <span>Wallet {wallet.description}</span>
            </p>
        </li>
    );
};

export default PopupWalletItem;

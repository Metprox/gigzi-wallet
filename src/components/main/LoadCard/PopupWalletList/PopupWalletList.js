import React, { useState } from 'react';

import cls from './PopupWalletList.scss';
import PopupWalletItem from './PopupWalletItem/PopupWalletItem';

const PopupWalletList = props => {
    const [list, setList] = useState([
        {
            id: 1,
            currency: 'Usd',
            value: 23732.46,
            description: 'Us Dollar',
        },
        {
            id: 2,
            currency: 'Eur',
            value: 23372.46,
            description: 'Euro',
        },
        {
            id: 3,
            currency: 'Gzg',
            value: 1782.84,
            description: 'Gigzi Gold',
        },
    ]);
    return (
        <ul className={cls.PopupWalletList}>
            {list.map(wallet => {
                return <PopupWalletItem key={wallet.id} wallet={wallet} />;
            })}
        </ul>
    );
};

export default PopupWalletList;

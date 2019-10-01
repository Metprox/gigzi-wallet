import React from 'react';

import cls from './SendingAddressItem.scss';
import DefaultUser from '@/assets/svg/icons/defaultUser.svg';

const SendingAddressItem = ({ name, setAddress }) => {
    return (
        <li className={cls.SendingAddressItem} onClick={() => setAddress(name)}>
            <DefaultUser />
            {name}
        </li>
    );
};

export default SendingAddressItem;

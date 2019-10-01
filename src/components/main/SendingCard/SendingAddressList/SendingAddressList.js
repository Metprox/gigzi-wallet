import React, { useState } from 'react';

import cls from './SendingAddressList.scss';
import SendingAddressItem from './SendingAddressItem/SendingAddressItem';

const SendingAddressList = props => {

    return (
        <ul className={cls.SendingAddressList}>
            {props.list.map(item => {
                return <SendingAddressItem key={item.id} name={item.name} setAddress={props.setAddress} />;
            })}
        </ul>
    );
};

export default SendingAddressList;

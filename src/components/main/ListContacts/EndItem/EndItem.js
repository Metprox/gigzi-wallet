import React from 'react';

import cls from './EndItem.scss';

const EndItem = props => {
    return (
        <li className={cls.EndItem}>
            <p>You reached the end of the list</p>
        </li>
    );
};

export default EndItem;

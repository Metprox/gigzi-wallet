import React from 'react';

import cls from './Item.scss';

const Item = ({ item, setSelected }) => {
    return (
        <li className={cls.Item} onClick={() => setSelected(item.id)}>
            <p>
                {item.value}{' '}
                {item.currency ? <span>{item.currency}</span> : null}
            </p>
        </li>
    );
};

export default Item;

import React from 'react';

import cls from './List.scss';
import Item from './Item/Item';

const List = ({ list, setSelected }) => {
    return (
        <ul className={cls.List}>
            {list.map(item => {
                return (
                    <Item key={item.id} item={item} setSelected={setSelected} />
                );
            })}
        </ul>
    );
};

export default List;

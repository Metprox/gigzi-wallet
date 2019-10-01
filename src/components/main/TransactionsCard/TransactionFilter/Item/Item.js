import React, { useState } from 'react';
import cls from './Item.scss';

const Item = props => {
    const [toggle, setToggle] = useState(false);
    const classesToggle = [cls.Item, toggle ? cls.active : null].join(' ');

    return (
        <div className={classesToggle} onClick={() => setToggle(!toggle)}>
            {props.item.svg}
            <span>{props.item.value}</span>
        </div>
    );
};
export default Item;

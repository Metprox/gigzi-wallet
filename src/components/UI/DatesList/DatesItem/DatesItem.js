import React from 'react';

import cls from './DatesItem.scss';

const DatesItem = props => {
    const classesDateActive = [
        cls.DatesItem,
        props.id === props.rightId ? cls.ActiveDate : null,
    ].join(' ');

    return (
        <li
            className={classesDateActive}
            onClick={() => props.setRightId(props.id)}
        >
            {props.date.name}
        </li>
    );
};

export default DatesItem;

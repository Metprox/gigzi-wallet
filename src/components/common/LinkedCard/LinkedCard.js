import React from 'react';

import cls from './LinkedCard.scss';

const LinkedCard = props => {
    return (
        <div className={cls.LinkedCard}>
            {props.svg}
            <p>Link card</p>
        </div>
    );
};

export default LinkedCard;

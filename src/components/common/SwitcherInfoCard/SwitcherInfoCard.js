import React from 'react';

import cls from './SwitcherInfoCard.scss';

const SwitcherInfoCard = props => {
    return (
        <div className={cls.SwitcherInfoCard}>
            {props.svg}
            <p>{props.name}</p>
        </div>
    );
};

export default SwitcherInfoCard;

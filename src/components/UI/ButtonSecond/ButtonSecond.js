import React from 'react';

import cls from './ButtonSecond.scss';

const ButtonSecond = ({ value }) => {
    return (
        <div className={cls.ButtonSecond}>
            <span>{value}</span>
        </div>
    );
};

export default ButtonSecond;

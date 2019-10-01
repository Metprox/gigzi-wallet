import React from 'react';

import cls from './ButtonMain.scss';

const ButtonMain = ({ type, value, disabled }) => {
    return (
        <input
            className={cls.ButtonMain}
            type={type}
            value={value}
            disabled={disabled}
        />
    );
};

export default ButtonMain;

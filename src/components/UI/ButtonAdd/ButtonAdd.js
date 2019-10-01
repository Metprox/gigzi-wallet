import React from 'react';

import cls from './ButtonAdd.scss';

const ButtonAdd = ({ value, disabled }) => {
    return (
        <button className={cls.ButtonAdd} disabled={disabled}>
            <span className={cls.AddText}>{value}</span>
        </button>
    );
};
{
}

export default ButtonAdd;

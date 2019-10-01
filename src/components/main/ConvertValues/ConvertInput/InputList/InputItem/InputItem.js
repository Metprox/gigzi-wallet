import React from 'react';

import cls from './InputItem.scss';

const InputItem = ({ name, icon, setIsToggle, setRightCurrency }) => {
    function activeCurrency(name) {
        setIsToggle(false);
        setRightCurrency(name);
    }

    return (
        <div className={cls.InputItem} onClick={() => activeCurrency(name)}>
            {icon}
            <span className={cls.Name}>{name}</span>
        </div>
    );
};

export default InputItem;

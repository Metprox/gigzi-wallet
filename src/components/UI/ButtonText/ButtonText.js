import React from 'react';

import cls from './ButtonText.scss';

const ButtonText = ({ value }) => {
    return (
        <div className={cls.ButtonText}>
            <p className={cls.Text}>{value}</p>
        </div>
    );
};

export default ButtonText;

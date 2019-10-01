import React from 'react';

import cls from './ButtonDelete.scss';

const ButtonDelete = props => {
    return (
        <div className={cls.ButtonDelete}>
            <span>{props.value}</span>
        </div>
    );
};

export default ButtonDelete;

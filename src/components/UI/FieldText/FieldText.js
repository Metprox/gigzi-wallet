import React from 'react';

import cls from './FieldText.scss';

const FieldText = ({ type, label, placeholder, value }) => {
    return (
        <label className={cls.FieldText}>
            <p>{label}</p>
            <input type={type} placeholder={placeholder} defaultValue={value} />
        </label>
    );
};

export default FieldText;

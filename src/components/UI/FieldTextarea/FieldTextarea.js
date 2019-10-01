import React from 'react';

import cls from './FieldTextarea.scss';

const FieldTextarea = ({ placeholder, label, value }) => {
    return (
        <label className={cls.FieldTextarea}>
        <p>{label}</p>
        <textarea
            className={cls.FieldTextarea}
            placeholder={placeholder}
            defaultValue={value}
        />
        </label>
    );
};

export default FieldTextarea;

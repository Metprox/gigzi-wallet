import React, { useState } from 'react';

import cls from './ButtonCheckbox.scss';

const ButtonCheckbox = props => {
    const [toggleStatus, setToggleStatus] = useState(false);
    return (
        <div className={cls.ButtonCheckbox}>
            <input
                type="checkbox"
                id="gigziFee1"
                onChange={e => setToggleStatus(e.target.checked)}
            />
            <label htmlFor="gigziFee1">
                Gigzi fee is {toggleStatus ? null : 'not'} included
            </label>
        </div>
    );
};

export default ButtonCheckbox;

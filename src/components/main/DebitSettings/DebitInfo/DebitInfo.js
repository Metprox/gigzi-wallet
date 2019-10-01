import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './DebitInfo.scss';

const DebitInfo = props => {
    return (
        <div className={cls.DebitInfo}>
            <p className={cls.Title}>Physical Visa card</p>
            <p className={cls.Name}>Johnathan Smith</p>
            <p className={cls.Code}>9433 8434 0033 1111</p>
            <p className={cls.Month}>09 / 21</p>
            <NavLink to="/debit" className={cls.Link}>CVV-code</NavLink>
        </div>
    );
};

export default DebitInfo;

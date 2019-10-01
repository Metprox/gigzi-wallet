import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './BackstepFundingBtns.scss';

const BackstepFundingBtns = props => {
    const fabricRouters = name => {
        switch (name) {
            case 'add':
                return 'Add';
            case 'withdraw':
                return 'Withdraw';
            default:
                return '';
        }
    };

    return (
        <NavLink to="/funding" className={cls.BackstepFundingBtns}>
            <h3>
                Back to{' '}
                {fabricRouters(localStorage.getItem('route-funding-btn'))}
            </h3>
        </NavLink>
    );
};
// onClick={() => {
//     props.history.push(`/funding`);
// }}

export default BackstepFundingBtns;

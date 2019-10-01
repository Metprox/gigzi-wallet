import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './Verified.scss';

const Verified = props => {
    return (
        <div className={cls.Verified}>
            <NavLink
                to="/verification"
                onClick={() => props.handlerSidebar(false)}
            >
                Get verified
            </NavLink>
        </div>
    );
};

export default Verified;

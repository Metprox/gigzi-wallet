import React from 'react';

import cls from './Backdrop.scss';

const Backdrop = ({ children }) => {
    return <div className={cls.Backdrop}>{children}</div>;
};

export default Backdrop;

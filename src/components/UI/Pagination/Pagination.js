import React from 'react';

import cls from './Pagination.scss';

const Pagination = props => {
    const classesLeft = [cls.Left, false ? cls.Disabled : null].join(' ');
    const classesRight = [cls.Right, false ? cls.Disabled : null].join(' ');
    return (
        <div className={cls.Pagination}>
            <div className={classesLeft} />
            <div className={classesRight} />
        </div>
    );
};

export default Pagination;

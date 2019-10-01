import React from 'react';

import cls from './NoOrderChosen.scss';

const NoOrderChosen = props => {
    return (
        <div className={cls.NoOrderChosen}>
            <p>No golden bars have been chosen.</p>
        </div>
    );
};

export default NoOrderChosen;

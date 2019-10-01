import React from 'react';

import cls from './TitleContacts.scss';

const TitleContacts = props => {
    return (
        <div className={cls.TitleContacts}>
            <p>Name</p>
            <p>Address</p>
        </div>
    );
};

export default TitleContacts;

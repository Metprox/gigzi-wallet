import React from 'react';
import cls from './EmptyNotification.scss';

const EmptyNotification = props => {
    return (
        <div className={cls.EmptyNotification}>
            <p>No notifications to display</p>
        </div>
    );
};
export default EmptyNotification;

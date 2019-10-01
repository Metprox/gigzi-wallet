import React from 'react';
import cls from './Burger.scss';

const Burger = props => {
    const classesBurger = [
        cls.Burger,
        props.isSidebar ? cls.activeBurger : null,
    ].join(' ');

    return (
        <div className={classesBurger}>
            <div className={cls.firstLine} />
            <div className={cls.secondLine} />
        </div>
    );
};
export default Burger;

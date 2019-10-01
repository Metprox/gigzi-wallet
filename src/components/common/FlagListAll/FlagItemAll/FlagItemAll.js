import React from 'react';
import cls from './FlagItemAll.scss';

const FlagItemAll = ({ flag, id, activeCurrency, setActiveCurrency }) => {
    const classesActiveFlag = [
        cls.FlagItemAll,
        id === activeCurrency ? cls.activeFlag : null,
    ].join(' ');
    return (
        <li className={classesActiveFlag} onClick={() => setActiveCurrency(id)}>
            <p className={cls.Name}>{flag.name}</p>
            <div className={cls.Flag}>{flag.flag}</div>
        </li>
    );
};

export default FlagItemAll;

import React, {memo} from 'react';
import cls from './FlagItem.scss';

const FlagItem = ({ flag, id, activeCurrency, setActiveCurrency }) => {
    const classesActiveFlag = [
        cls.FlagItem,
        id === activeCurrency ? cls.activeFlag : null,
    ].join(' ');
    return (
        <li className={classesActiveFlag} onClick={() => setActiveCurrency(id)}>
            <p className={cls.Name}>{flag.name}</p>
            <div className={cls.Flag}>{flag.flag}</div>
        </li>
    );
};

export default memo(FlagItem);

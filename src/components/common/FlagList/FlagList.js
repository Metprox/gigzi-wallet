import React, { useState, memo } from 'react';

import cls from './FlagList.scss';

import FlagItem from './FlagItem/FlagItem';

const FlagList = ({ flags, activeCurrency, setActiveCurrency }) => {
    return (
        <ul className={cls.FlagList}>
            {flags.map(flag => {
                return (
                    <FlagItem
                        flag={flag}
                        key={flag.id}
                        id={flag.id}
                        activeCurrency={activeCurrency}
                        setActiveCurrency={setActiveCurrency}
                    />
                );
            })}
        </ul>
    );
};

export default memo(FlagList);

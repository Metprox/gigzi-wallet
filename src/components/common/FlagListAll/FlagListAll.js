import React, { useState, memo } from 'react';

import cls from './FlagListAll.scss';
import FlagItemAll from './FlagItemAll/FlagItemAll';

const FlagListAll = ({ flags, activeCurrency, setActiveCurrency }) => {
    return (
        <ul className={cls.FlagListAll}>
            {flags.map(flag => {
                return (
                    <FlagItemAll
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

export default memo(FlagListAll);

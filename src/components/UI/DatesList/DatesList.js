import React, { useState } from 'react';

import cls from './DatesList.scss';
import DatesItem from './DatesItem/DatesItem';

const DatesList = props => {
    const [dateList, setDateList] = useState([
        { id: 1, name: '1h' },
        { id: 2, name: '4h' },
        { id: 3, name: '1d' },
        { id: 4, name: '1w' },
        { id: 5, name: '1m' },
        { id: 6, name: '1m' },
    ]);
    const [rightId, setRightId] = useState(4);

    return (
        <ul className={cls.DatesList}>
            {dateList.map(date => {
                return (
                    <DatesItem
                        date={date}
                        key={date.id}
                        id={date.id}
                        rightId={rightId}
                        setRightId={setRightId}
                    />
                );
            })}
        </ul>
    );
};

export default DatesList;

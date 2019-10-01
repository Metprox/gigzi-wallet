import React, { useState, useEffect } from 'react';

import cls from './Day.scss';

const Day = props => {
    const [isToggle, setIsToggle] = useState(false);
    const [current, setCurrent] = useState('');
    const classesBlock = [cls.Day, isToggle ? cls.ActiveArrow : null].join(' ');
    const classesCurrent = [
        cls.CurrentVal,
        current ? cls.CurrentValActive : null,
    ].join(' ');

    useEffect(() => {
        document.addEventListener('click', handlerDayOutside, false);
        return () => {
            document.removeEventListener('click', handlerDayOutside, false);
        };
    }, []);

    function handlerDayOutside(event) {
        if (event.target.className !== `${cls.Day} ${cls.ActiveArrow}`) {
            setIsToggle(false);
        }
    }

    return (
        <div className={classesBlock} onClick={() => setIsToggle(!isToggle)}>
            <span className={classesCurrent}>{current ? current : 'Day'}</span>
            {isToggle ? (
                <ul className={cls.List}>
                    {props.days.map((item, index) => {
                        return (
                            <li key={index} onClick={() => setCurrent(item)}>
                                <span>{item}</span>
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </div>
    );
};

export default Day;

import React, { useState, useEffect } from 'react';

import cls from './Month.scss';

const Month = props => {
    const [isToggle, setIsToggle] = useState(false);
    const [current, setCurrent] = useState('');

    const classesBlock = [cls.Month, isToggle ? cls.ActiveArrow : null].join(
        ' ',
    );
    const classesCurrent = [
        cls.CurrentVal,
        current ? cls.CurrentValActive : null,
    ].join(' ');

    useEffect(() => {
        document.addEventListener('click', handlerMonthOutside, false);
        return () => {
            document.removeEventListener('click', handlerMonthOutside, false);
        };
    }, []);

    function handlerMonthOutside(event) {
        console.log(event.target.className);
        if (event.target.className !== `${cls.Month} ${cls.ActiveArrow}`) {
            setIsToggle(false);
        }
    }

    return (
        <div className={classesBlock} onClick={() => setIsToggle(!isToggle)}>
            <span className={classesCurrent}>
                {current ? current : 'Month'}
            </span>
            {isToggle ? (
                <ul className={cls.List}>
                    {props.months.map((item, index) => {
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

export default Month;

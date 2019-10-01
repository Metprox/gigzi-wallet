import React, { useState, useEffect } from 'react';

import cls from './Year.scss';

const Year = props => {
    const [isToggle, setIsToggle] = useState(false);
    const [current, setCurrent] = useState('');

    const classesBlock = [cls.Year, isToggle ? cls.ActiveArrow : null].join(
        ' ',
    );
    const classesCurrent = [
        cls.CurrentVal,
        current ? cls.CurrentValActive : null,
    ].join(' ');

    useEffect(() => {
        document.addEventListener('click', handlerYearOutside, false);
        return () => {
            document.removeEventListener('click', handlerYearOutside, false);
        };
    }, []);

    function handlerYearOutside(event) {
        console.log(event.target.className);
        if (event.target.className !== `${cls.Year} ${cls.ActiveArrow}`) {
            setIsToggle(false);
        }
    }

    return (
        <div className={classesBlock} onClick={() => setIsToggle(!isToggle)}>
            <span className={classesCurrent}>{current ? current : 'Year'}</span>
            {isToggle ? (
                <ul className={cls.List}>
                    {props.years.map((item, index) => {
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

export default Year;

import React from 'react';

import cls from './Calendar.scss';
import CalendarSVG from '@/assets/svg/transactions/calendar.svg';


const Calendar = props => {
    return (
        <div className={cls.Calendar}>
            <span>01.11.18 - 30.11.18</span>
            <CalendarSVG />
        </div>
    );
};

export default Calendar;

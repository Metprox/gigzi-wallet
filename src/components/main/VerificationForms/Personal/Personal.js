import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import cls from './Personal.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import Day from './Day/Day';
import Month from './Month/Month';
import Year from './Year/Year';
import FieldText from '@/components/UI/FieldText/FieldText';

const Personal = props => {
    const [day, setDay] = useState([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
    ]);
    const [month, setMonth] = useState([
        'November',
        'October',
        'September',
        'August',
        'July',
        'June',
        'May',
        'April',
        'March',
        'February',
        'January',
        'December',
    ]);
    const [year, setYear] = useState([
        1991,
        1992,
        1993,
        1994,
        1995,
        1996,
        1997,
        1998,
        1999,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
    ]);

    return (
        <div className={cls.Personal}>
            <div className={cls.Title}>
                <ContainerWrap>
                    <h3>Personal data</h3>
                </ContainerWrap>
            </div>
            <div className={cls.Inputs}>
                <ContainerWrap>
                    <div className={cls.flexInputs}>
                        <div className={cls.offsetRight}>
                            <FieldText
                                type="text"
                                label="First name"
                                placeholder="Enter first name"
                            />
                        </div>
                        <FieldText
                            type="text"
                            label="Last name"
                            placeholder="Enter last name"
                        />
                    </div>
                </ContainerWrap>
            </div>
            <div className={cls.wrapBottomBlock}>
                <div className={cls.Birthday}>
                    <p className={cls.DescriptionInput}>Date of birth</p>
                    <FlexWrap align="center" justify="start">
                        <Day days={day} />
                        <Month months={month} />
                        <Year years={year} />
                    </FlexWrap>
                </div>
                <div className={cls.Next}>
                    <Link to="/verification/contact">
                        <ButtonMain type="submit" value="Next" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Personal;

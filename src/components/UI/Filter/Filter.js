import React from 'react';

import cls from './Filter.scss';
import FilterSVG from '@/assets/svg/transactions/filter.svg';


const Filter = props => {
    return (
        <div className={cls.Filter}>
            <span>Filter</span>
            <FilterSVG />
        </div>
    );
};

export default Filter;

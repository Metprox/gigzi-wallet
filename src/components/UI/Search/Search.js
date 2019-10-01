import React from 'react';

import cls from './Search.scss';
import SearchSVG from '@/assets/svg/transactions/search.svg';

const Search = props => {
    const classesSearchMultiply = [
        cls.Search,
        props.bgWhite ? cls.bgWhite : null,
    ].join(' ');

    return (
        <div className={classesSearchMultiply}>
            <input type="text" placeholder={props.placeholder} />
            <SearchSVG />
        </div>
    );
};

export default Search;

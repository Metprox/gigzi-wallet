import React, { useState } from 'react';
import cls from './DropdownList.scss';

const DropdownList = props => {
    const [toggleList, setToggleList] = useState(false);
    const [rightCurrency, setRightCurrency] = useState(1);
    const classesDropdownToggle = [
        cls.DropdownList,
        toggleList ? cls.activeCurrency : null,
    ].join(' ');

    const fabricOnce = id => {
        const answer = props.list.find(item => item.id === id);
        const result = answer.value;
        return result;
    };

    const toggleFunction = id => {
        setToggleList(false);
        setRightCurrency(id);
    };

    return (
        <div className={classesDropdownToggle}>
            <p onClick={() => setToggleList(!toggleList)}>
                {fabricOnce(rightCurrency)}
            </p>
            {toggleList ? (
                <ul className={cls.currencyList}>
                    {props.list.map(currency => {
                        return (
                            <li
                                key={currency.id}
                                onClick={() => toggleFunction(currency.id)}
                            >
                                {currency.value}
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </div>
    );
};
export default DropdownList;

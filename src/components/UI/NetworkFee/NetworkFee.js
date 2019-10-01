import React, { useState, useEffect, useRef } from 'react';

import cls from './NetworkFee.scss';
import Info from '@/assets/svg/icons/Info.svg';

const NetworkFee = ({ question, value, changeValue, checkFunc }) => {
    const [toggleList, setToggleList] = useState(false);
    const [rightCurrency, setRightCurrency] = useState(1);
    const [isWrite, setIsWrite] = useState(false);
    const [list, setList] = useState([
        { id: 1, value: 'Low' },
        { id: 2, value: 'Medium' },
        { id: 3, value: 'High' },
    ]);
    const refInput = useRef();
    const classesDropdownToggle = [
        cls.DropdownList,
        toggleList ? cls.activeCurrency : null,
    ].join(' ');

    const fabricOnce = id => {
        const answer = list.find(item => item.id === id);
        const result = answer.value;
        return result;
    };

    const toggleFunction = id => {
        setToggleList(false);
        setRightCurrency(id);
    };

    const [toggleInfo, setToggleInfo] = useState(false);

    useEffect(() => {
        document.addEventListener('click', handlerQuestionOutside, false);
        document.addEventListener('click', handlerDropDownOutside, false);

        return () => {
            document.removeEventListener(
                'click',
                handlerQuestionOutside,
                false,
            );
            document.removeEventListener(
                'click',
                handlerDropDownOutside,
                false,
            );
        };
    }, []);

    function handlerDropDownOutside(event) {
        console.log(event.target.className);
        if (event.target.className !== cls.droper) {
            setToggleList(false);
        }
    }

    function handlerQuestionOutside(event) {
        console.log(event.target.className);
        if (event.target.className !== `${cls.wrapInfo} ${cls.arrowActive}`) {
            setToggleInfo(false);
        }
    }

    const classesPopupArrow = [
        cls.wrapInfo,
        toggleInfo ? cls.arrowActive : null,
    ].join(' ');

    return (
        <div className={cls.NetworkFee}>
            <span>
                Network fee{' '}
                {question ? (
                    <div className={cls.popupInfo}>
                        <div
                            className={classesPopupArrow}
                            onClick={() => setToggleInfo(!toggleInfo)}
                        >
                            <Info />
                        </div>
                        {toggleInfo ? (
                            <p>
                                The transaction fee of 0.2% gets deducted from
                                the sent amount. Tick ‘add to amount’ if you
                                prefer the recipient receives the full amount
                                being sent.
                            </p>
                        ) : null}
                    </div>
                ) : null}
            </span>
            <input
                ref={refInput}
                className={cls.value}
                type="text"
                value={value}
                onChange={e => changeValue(e.target.value)}
                readOnly={!isWrite}
            />
            {checkFunc ? (
                <div className={cls.NetworkEdit}>
                    <div className={classesDropdownToggle}>
                        <p
                            className={cls.droper}
                            onClick={() => setToggleList(!toggleList)}
                        >
                            {fabricOnce(rightCurrency)}
                        </p>
                        {toggleList ? (
                            <ul className={cls.currencyList}>
                                {list.map(currency => {
                                    return (
                                        <li
                                            key={currency.id}
                                            onClick={() =>
                                                toggleFunction(currency.id)
                                            }
                                        >
                                            {currency.value}
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : null}
                    </div>
                    <div
                        onClick={() => {
                            setIsWrite(!isWrite);
                            refInput.current.focus();
                        }}
                    >
                        {isWrite ? 'Save' : 'Edit'}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default NetworkFee;

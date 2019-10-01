import React, { useState, Fragment } from 'react';
import NumberFormat from 'react-number-format';

import cls from './ConvertInput.scss';
import InputList from './InputList/InputList';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';
import Gzb from '@/assets/svg/gigziCurrenciesSmall/gzb.svg';
import Gzg from '@/assets/svg/gigziCurrenciesSmall/gzg.svg';
import Gzp from '@/assets/svg/gigziCurrenciesSmall/gzp.svg';
import Gzs from '@/assets/svg/gigziCurrenciesSmall/gzs.svg';
import Eth from '@/assets/svg/gigziCurrenciesSmall/eth.svg';
import Usd from '@/assets/svg/gigziCurrenciesSmall/usd.svg';
import Eur from '@/assets/svg/gigziCurrenciesSmall/eur.svg';

const ConvertInput = ({ name, value, onChange }) => {
    const [isToggleList, setIsToggleList] = useState(false);
    const [rightCurrency, setRightCurrency] = useState('gzb');
    const [list, setList] = useState([
        {
            id: 1,
            name: 'gzb',
            icon: <Gzb />,
        },
        {
            id: 2,
            name: 'gzs',
            icon: <Gzs />,
        },
        {
            id: 3,
            name: 'gzg',
            icon: <Gzg />,
        },
        {
            id: 4,
            name: 'gzp',
            icon: <Gzp />,
        },
        {
            id: 5,
            name: 'eth',
            icon: <Eth />,
        },
        {
            id: 6,
            name: 'usd',
            icon: <Usd />,
        },
        {
            id: 7,
            name: 'eur',
            icon: <Eur />,
        },
    ]);
    function handlerRightId(name) {
        switch (name) {
            case 'gzb':
                return (
                    <Fragment>
                        <Gzb />
                        <span>Gzb</span>
                    </Fragment>
                );
            case 'gzs':
                return (
                    <Fragment>
                        <Gzs />
                        <span>Gzs</span>
                    </Fragment>
                );
            case 'gzg':
                return (
                    <Fragment>
                        <Gzg />
                        <span>Gzg</span>
                    </Fragment>
                );
            case 'gzp':
                return (
                    <Fragment>
                        <Gzp />
                        <span>Gzp</span>
                    </Fragment>
                );
            case 'eth':
                return (
                    <Fragment>
                        <Eth />
                        <span>Eth</span>
                    </Fragment>
                );
            case 'usd':
                return (
                    <Fragment>
                        <Usd />
                        <span>Usd</span>
                    </Fragment>
                );
            case 'eur':
                return (
                    <Fragment>
                        <Eur />
                        <span>Eur</span>
                    </Fragment>
                );
            default:
                return null;
        }
    }
    return (
        <div className={cls.ConvertInput}>
            <FlexWrap align="center" justify="between">
                <FlexWrap align="center" justify="start">
                    <div
                        className={cls.CurrentVal}
                        onClick={() => setIsToggleList(!isToggleList)}
                    >
                        {handlerRightId(rightCurrency)}
                    </div>
                    <NumberFormat
                        className={cls.ValueInput}
                        value={value}
                        onChange={e => onChange(e.target.value)}
                        format="##########################"
                    />
                    <InputList
                        list={list}
                        isToggle={isToggleList}
                        setIsToggle={setIsToggleList}
                        setRightCurrency={setRightCurrency}
                    />
                </FlexWrap>
                <span className={cls.NameInput}>{name}</span>
            </FlexWrap>
        </div>
    );
};

export default ConvertInput;

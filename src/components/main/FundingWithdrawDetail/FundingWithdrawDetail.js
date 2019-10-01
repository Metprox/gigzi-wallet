import React, { useState, useEffect } from 'react';

import cls from './FundingWithdrawDetail.scss';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import FieldSelected from '@/components/UI/FieldSelected/FieldSelected';
import FieldTextAmount from '@/components/UI/FieldTextAmount/FieldTextAmount';

const FundingWithdrawDetail = props => {
    const [amount, setAmount] = useState('');
    const [fromList, setFromList] = useState([
        { id: 1, value: '30 457.80 USD', currency: 'Wallet US Dollar' },
        { id: 2, value: '11 305.24 EUR', currency: 'Wallet Euro' },
        { id: 3, value: '97 999.50 USD', currency: 'Wallet Us Dollar' },
        { id: 3, value: '58 005.19 EUR', currency: 'Wallet Euro' },
    ]);

    const [toList, setToList] = useState([
        { id: 1, value: 'New Bank UK', currency: '(USD)' },
        { id: 2, value: 'Resident permit', currency: '(EUR)' },
        { id: 3, value: 'National identity document', currency: '(USD)' },
        { id: 4, value: 'Old Bank UK', currency: '(EUR)' },
    ]);

    const fabricAll = (list, id) => {
        const answer = list.find(item => item.id === id);
        const result = { value: answer.value, currency: answer.currency };
        return result;
    };

    return (
        <div className={cls.FundingWithdrawDetail}>
            <div className={cls.childFlex}>
                <div className={cls.from}>
                    <FieldSelected
                        label="From wallet"
                        list={fromList}
                        fabricSelected={fabricAll}
                    />
                </div>
                <div className={cls.to}>
                    <FieldSelected
                        label="Payment account"
                        list={toList}
                        fabricSelected={fabricAll}
                    />
                </div>
                <div className={cls.amount}>
                    <FieldTextAmount
                        label="Amount"
                        value={amount}
                        onChange={setAmount}
                        currency="Usd"
                        placeholder="Enter amount"
                    />
                </div>
            </div>
            <div className={cls.btn} onClick={props.handlerNext}>
                <ButtonMain type="submit" value="Next" />
            </div>
        </div>
    );
};

export default FundingWithdrawDetail;

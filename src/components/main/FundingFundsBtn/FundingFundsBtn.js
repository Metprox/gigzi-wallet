import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import cls from './FundingFundsBtn.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';

const FundingFundsBtn = props => {
    const addClasses = [
        cls.Add,
        props.isCheckActiveBtn === 'add' ? cls.Active : null,
    ].join(' ');

    const withdrawClasses = [
        cls.Withdraw,
        props.isCheckActiveBtn === 'withdraw' ? cls.Active : null,
    ].join(' ');

    return (
        <div className={cls.FundingFundsBtn}>
            <ContainerWrap>
                <div className={cls.Flex}>
                    <div
                        className={addClasses}
                        onClick={() => props.handleAcitveBtn('add')}
                    >
                        <p>Add funds</p>
                    </div>
                    <div
                        className={withdrawClasses}
                        onClick={() => props.handleAcitveBtn('withdraw')}
                    >
                        <p>Withdraw Funds</p>
                    </div>
                </div>
            </ContainerWrap>
        </div>
    );
};

export default FundingFundsBtn;

import React from 'react';
import {NavLink} from 'react-router-dom';

import cls from './FundingWithdrawConfirm.scss';
import FundingAddSavingBtns from '@/components/main/FundingAddSavingBtns/FundingAddSavingBtns';

const FundingWithdrawConfirm = props => {
    return (
        <div className={cls.FundingWithdrawConfirm}>
            <div className={cls.groupLeft}>
                <ul className={cls.list}>
                    <li>
                        <span>Payment account</span>
                        <span>New Bank UK </span>
                    </li>
                    <li>
                        <span>Contract number</span>
                        <span>713944-041</span>
                    </li>
                    <li>
                        <span>Date</span>
                        <span>15 October, 2018</span>
                    </li>
                    <li>
                        <span>Currency bought</span>
                        <span>50 000.00 GBP</span>
                    </li>
                    <li>
                        <span>Rate</span>
                        <span>39.7167</span>
                    </li>
                    <li>
                        <span>Processing fee</span>
                        <span>8.30 GBP</span>
                    </li>
                    <li>
                        <span>Amount to be send</span>
                        <span>1 258.92 GBP</span>
                    </li>
                </ul>
            </div>
            <div className={cls.groupRight}>
                <div className={cls.blockInfo}>
                    <p className={cls.blockHeader}>
                        Withdrawal will be processed and sent by bank transfer.
                    </p>
                    <p>
                        It could take up to 5 working days to arrive in your
                        account.
                    </p>
                    <p>
                        If your funds do not arrive within this time then get in
                        touch with our{' '}
                        <NavLink to="/funding">support team</NavLink> to assist
                        you further.
                    </p>
                </div>
                <FundingAddSavingBtns />
            </div>
        </div>
    );
};

export default FundingWithdrawConfirm;

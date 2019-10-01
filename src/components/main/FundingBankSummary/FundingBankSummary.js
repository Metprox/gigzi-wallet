import React, { useState } from 'react';

import cls from './FundingBankSummary.scss';

const FundingBankSummary = ({
    owner,
    ownerAddress,
    iban,
    currency,
    bank,
    bankAddress,
    code,
    amount,
}) => {
    return (
        <ul className={cls.FundingBankSummary}>
            <li className={cls.owner}>
                <p>Account owner</p>
                <p className={cls.address}>
                    <span>{owner}</span>
                    <span>{ownerAddress}</span>
                </p>
            </li>
            <li className={cls.iban}>
                <p>IBAN</p>
                <p>{iban}</p>
            </li>
            <li className={cls.currency}>
                <p>Currency</p>
                <p>{currency}</p>
            </li>
            <li className={cls.bank}>
                <p>Beneficiary bank</p>
                <p className={cls.address}>
                    <span>{bank}</span>
                    <span>{bankAddress}</span>
                </p>
            </li>
            <li className={cls.code}>
                <p>Beneficiary bank SWIFT/BIC code</p>
                <p>{code}</p>
            </li>
            <li className={cls.amount}>
                <p>Amount</p>
                <p>{amount}</p>
            </li>
        </ul>
    );
};

export default FundingBankSummary;

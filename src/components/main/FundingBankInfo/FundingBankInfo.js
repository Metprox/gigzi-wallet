import React, { useState } from 'react';

import cls from './FundingBankInfo.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import FieldSelected from '@/components/UI/FieldSelected/FieldSelected';
import { fabricOnce } from '@/tools/customFunc';

const FundingBankInfo = props => {
    const [isCurrency, setIsCurrency] = useState(false);
    const [list, setList] = useState([
        { id: 1, value: '23 372.46 USD' },
        { id: 2, value: '23 372.46 EUR' },
        { id: 3, value: '3000 GBP' },
    ]);
    const classesCurrencyInput = [
        cls.currencyInput,
        isCurrency ? cls.currencyInputActive : null,
    ].join(' ');

    return (
        <div className={cls.FundingBankInfo}>
            <ContainerWrap>
                <label className={cls.bank}>
                    <p>Beneficiary bank</p>
                    <input type="text" placeholder="Enter beneficiary bank" />
                </label>
                <label className={cls.owner}>
                    <p>Account owner</p>
                    <input type="text" placeholder="Johnathan Smith" />
                </label>
                <label className={cls.ownerAddress}>
                    <p>Account owner address</p>
                    <input type="text" placeholder="Enter address" />
                </label>
                <label className={cls.iban}>
                    <p>IBAN</p>
                    <input type="text" placeholder="Enter IBAN" />
                </label>
                <label className={cls.currency}>
                    <FieldSelected
                        label="Currency"
                        list={list}
                        fabricSelected={fabricOnce}
                    />
                </label>
                <label className={cls.bankAddress}>
                    <p>Beneficiary bank address</p>
                    <input
                        type="text"
                        placeholder="Enter beneficiary bank address"
                    />
                </label>
                <label className={cls.bankCode}>
                    <p>Beneficiary bank SWIFT/BIC code</p>
                    <input type="text" placeholder="Enter SWIFT/BIC code" />
                </label>
            </ContainerWrap>
        </div>
    );
};

export default FundingBankInfo;

import React, { useState, useEffect } from 'react';

import cls from './FundingAddBankTransfer.scss';
// import { fabricOnce } from '@/tools/customFunc';
import FundingBankSummary from '@/components/main/FundingBankSummary/FundingBankSummary';
import FundingAddSavingBtns from '@/components/main/FundingAddSavingBtns/FundingAddSavingBtns';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import DropdownList from '@/components/UI/DropdownList/DropdownList'

const FundingAddBankTransfer = props => {
    const [listCurrency, setListCurrency] = useState([
        { id: 1, value: 'Eur' },
        { id: 2, value: 'Usd' },
        { id: 3, value: 'Gbp' },
    ]);

    return (
        <div className={cls.FundingAddBankTransfer}>
            <div className={cls.bankInfo}>
                <ContainerWrap>
                    <div className={cls.bankFlex}>
                        <h6>Bank account information</h6>
                        <DropdownList list={listCurrency} />
                    </div>
                    <p className={cls.descriptionFirst}>
                        Only payments in EUR currency are accepted. Payments in
                        other currencies will be rejected by the bank.
                    </p>
                    <p className={cls.descriptionLast}>
                        Kindly make your payment by bank transfer using the
                        following bank account information. Please remember to
                        include your reference as it will assist us in
                        processing your order faster.
                    </p>
                </ContainerWrap>
            </div>
            <FundingBankSummary
                owner="Gigzi Limited"
                ownerAddress="Charlotte Street 48 W1T 2NS London, United Kingdom"
                iban="BE27 9140 0711 6273"
                currency="EUR"
                bank="Ibanfirst"
                bankAddress="Avenue Louise 350, 1050 Brussels - Belgium"
                code="FXBBBEBBXX"
                amount="50 000 USD"
            />
            <div className={cls.btnsWrap}>
                <FundingAddSavingBtns />
            </div>
        </div>
    );
};

export default FundingAddBankTransfer;

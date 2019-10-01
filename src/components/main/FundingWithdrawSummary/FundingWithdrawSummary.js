import React from 'react';

import cls from './FundingWithdrawSummary.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import FundingBankSummary from '@/components/main/FundingBankSummary/FundingBankSummary';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';

const FundingWithdrawSummary = ({ from, to, amount, handlerWithdrawConfirm }) => {
    return (
        <div className={cls.FundingWithdrawSummary}>
            <div className={cls.Container}>
                <ul className={cls.listSummary}>
                    <li>
                        <span>From wallet</span>
                        <span>{from}</span>
                    </li>
                    <li>
                        <span>To payment account</span>
                        <span>{to}</span>
                    </li>
                    <li>
                        <span>Amount</span>
                        <span>{amount}</span>
                    </li>
                </ul>

                <h6>payment account details</h6>
                <div className={cls.bankSummaryWrap}>
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
                </div>
                <label className={cls.checkbox} htmlFor="check">
                    <input type="checkbox" id="check" />
                    <div className={cls.check} />
                    <span>I confirm the bank account details above</span>
                </label>
                <div className={cls.btnText}>
                    <p>
                        By clicking ‘Confirm’ you are committing to the purchase
                        of currency and entering into a legally binding
                        contract, as detailed in our{' '}
                        <span>terms and conditions</span>
                    </p>
                </div>
                <div className={cls.btn} onClick={handlerWithdrawConfirm}>
                    <ButtonMain type="submit" value="Confirm" />
                </div>
                </div>
        </div>
    );
};

export default FundingWithdrawSummary;

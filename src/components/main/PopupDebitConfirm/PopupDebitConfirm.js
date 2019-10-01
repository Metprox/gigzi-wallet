import React, { useState, useEffect } from 'react';

import cls from './PopupDebitConfirm.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import GigziFee from '@/components/UI/GigziFee/GigziFee';
import NetworkFee from '@/components/UI/NetworkFee/NetworkFee';
import Close from '@/components/UI/Close/Close';
import DropdownList from '@/components/UI/DropdownList/DropdownList'

const PopupDebitConfirm = props => {
    const [value, setValue] = useState('748.4949');
    const [listCurrency, setListCurrency] = useState([
        { id: 1, value: 'Eur' },
        { id: 2, value: 'Usd' },
        { id: 3, value: 'Gbp' },
    ]);

    function toggleToSuccess() {
        props.setConfirm(false);
        props.setSuccess(true);
    }

     useEffect(() => {
       document.documentElement.style.overflow='hidden';
        return () => {
           document.documentElement.style.overflow='';
        };
    }, []);

    return (
        <div className={cls.PopupDebitConfirm}>
            <ContainerWrap>
                <h2>Confirmation</h2>
                <div className={cls.FieldWrap}>
                    <span>From</span>
                    <div className={cls.FieldValues}>
                        <p>Wallet Us Dollar</p>
                        <p>30 357.80 USD</p>
                    </div>
                </div>
                <div className={cls.FieldWrapAmount}>
                    <span>Amount</span>
                    <div className={cls.FieldValues}>
                        <p>22.687500 GZG</p>
                    </div>
                </div>
                <NetworkFee question={true} value={'20 usd'} />
                <GigziFee checkFunc={true} question={true} value={'60 usd'} />
                <p className={cls.Note}>
                    By clicking ‘Confirm’ you are committing to the purchase of
                    currency and entering into a legally binding contract, as
                    detailed in our <span>terms and conditions.</span> This
                    operation will affect your reward at the end of the current
                    billing period.
                </p>
                <div className={cls.btnWrap} onClick={() => toggleToSuccess()}>
                    <ButtonMain type="submit" value={`send to ${value} gzb`} />
                </div>
            </ContainerWrap>
            <div
                className={cls.CloseWrap}
                onClick={() => props.setConfirm(false)}
            >
                <Close />
            </div>
        </div>
    );
};

export default PopupDebitConfirm;

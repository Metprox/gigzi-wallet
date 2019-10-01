import React, { useState, useEffect } from 'react';

import cls from './PopupWalletConfirm.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import GigziFee from '@/components/UI/GigziFee/GigziFee';
import NetworkFee from '@/components/UI/NetworkFee/NetworkFee';
import Close from '@/components/UI/Close/Close';

const PopupWalletConfirm = props => {
    const [value, setValue] = useState('748,4949');
    const [networkValue, setNetworkValue] = useState('0.000012 eth');

    function toggleToSuccess() {
        props.handlerConfirm(false);
        props.handlerSuccess(true);
    }

    useEffect(() => {
       document.documentElement.style.overflow='hidden';
        return () => {
           document.documentElement.style.overflow='';
        };
    }, []);

    return (
        <div className={cls.PopupWalletConfirm}>
            <ContainerWrap>
                <h2>Confirmation</h2>
                <div className={cls.FieldWrap}>
                    <span>Amount</span>
                    <div className={cls.FieldValues}>
                        <p>750.00 gzb</p>
                        <p>987.65 usd</p>
                    </div>
                </div>
                <NetworkFee
                    checkFunc={true}
                    question={true}
                    value={networkValue}
                    changeValue={setNetworkValue}
                />
                <GigziFee checkFunc={true} question={true} value="0.0384 Gzg" />
                <p className={cls.Note}>
                    By clicking ‘Confirm’ you are committing to the purchase of
                    currency and entering into a legally binding contract, as
                    detailed in our <span>terms and conditions.</span> This
                    operation will affect your reward at the end of the current
                    billing period.
                </p>
                <div className={cls.btn} onClick={() => toggleToSuccess()}>
                    <ButtonMain
                        type="submit"
                        value={`Convert to ${value} Eth`}
                    />
                </div>
            </ContainerWrap>
            <div
                className={cls.CloseWrap}
                onClick={() => props.handlerConfirm(false)}
            >
                <Close />
            </div>
        </div>
    );
};

export default PopupWalletConfirm;

import React, { useState, useEffect } from 'react';

import cls from './PopupConverting.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import GigziFee from '@/components/UI/GigziFee/GigziFee';
import NetworkFee from '@/components/UI/NetworkFee/NetworkFee';
import Close from '@/components/UI/Close/Close';

const PopupConverting = props => {
    const [value, setValue] = useState('22.687500');
    const [networkValue, setNetworkValue] = useState('0.000012 eth');

    function toggleToSuccess() {
        props.handlerConverting(false);
        props.handlerSuccess(true);
    }

     useEffect(() => {
       document.documentElement.style.overflow='hidden';
        return () => {
           document.documentElement.style.overflow='';
        };
    }, []);

    return (
        <div className={cls.PopupConverting}>
            <ContainerWrap>
                <h2>Confirmation</h2>
                <div className={cls.FieldWrap}>
                    <span>Convert from</span>
                    <div className={cls.FieldValues}>
                        <p>125.000000 gzg</p>
                        <p>1 gzg = 0.181504 eth</p>
                    </div>
                </div>
                <div className={cls.FieldWrapTo}>
                    <span>To</span>
                    <div className={cls.FieldValues}>
                        <p>22.687500 gzg</p>
                        <p>1 eth = 5.509641 gzg</p>
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
                onClick={() => props.handlerConverting(false)}
            >
                <Close />
            </div>
        </div>
    );
};

export default PopupConverting;

import React, {useEffect} from 'react';

import cls from './PopupDebitReplacement.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import Close from '@/components/UI/Close/Close';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';

const PopupDebitReplacement = props => {
    function toSuccess() {
        props.setIsReplacement(false);
        props.setIsReplacementSuccess(true);
    }

    useEffect(() => {
       document.documentElement.style.overflow='hidden';
        return () => {
           document.documentElement.style.overflow='';
        };
    }, []);

    return (
        <div className={cls.PopupDebitReplacement}>
            <ContainerWrap>
                <h1>Replacement</h1>
                <div className={cls.Order}>
                    <span>Order</span>
                    <span>Gigzi Gold card</span>
                </div>
                <div className={cls.GigziFee}>
                    <span>Gigzi fee</span>
                    <span>20 gzb</span>
                </div>
                <p className={cls.BtnDescription}>
                    By clicking ‘Confirm’ you are committing to the purchase of
                    currency and entering into a legally binding contract, as
                    detailed in our <span>terms and conditions</span>
                </p>
                <div className={cls.Btn} onClick={toSuccess}>
                    <ButtonMain type="submit" value="Order replacement" />
                </div>
                <div
                    className={cls.Close}
                    onClick={() => props.setIsReplacement(false)}
                >
                    <Close />
                </div>
            </ContainerWrap>
        </div>
    );
};

export default PopupDebitReplacement;

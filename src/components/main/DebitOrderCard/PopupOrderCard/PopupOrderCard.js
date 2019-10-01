import React, { useEffect } from 'react';

import cls from './PopupOrderCard.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import Close from '@/components/UI/Close/Close';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import GigziFee from '@/components/UI/GigziFee/GigziFee';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';

const PopupOrderCard = props => {
    function switchPopupToSuccess() {
        props.setIsPopupOrder(false);
        props.setIsPopupSuccess(true);
    }

    useEffect(() => {
       document.documentElement.style.overflow='hidden';
        return () => {
           document.documentElement.style.overflow='';
        };
    }, []);

    return (
        <div className={cls.PopupOrderCard}>
            <ContainerWrap>
                <h2>Order a card</h2>
                <div className={cls.FieldType}>
                    <FlexWrap align="start" justify="between">
                        <p>Type of card</p>
                        <div className={cls.nameCard}>
                            <p>Gigzi Card</p>
                            <p>Virtual card</p>
                        </div>
                    </FlexWrap>
                </div>
                <div className={cls.gigziFee}>
                    <GigziFee value="1.25 gzg" />
                </div>
            </ContainerWrap>
            <div className={cls.BtnDesc}>
                <ContainerWrap>
                    <p>
                        By clicking ‘Confirm’ you are committing to the purchase
                        of currency and entering into a legally binding
                        contract, as detailed in our{' '}
                        <span>terms and conditions.</span> This operation will
                        affect your reward at the end of the current billing
                        period.
                    </p>
                </ContainerWrap>
            </div>
            <div className={cls.BtnWrap} onClick={switchPopupToSuccess}>
                <ButtonMain type="submit" value="Confirm order" />
            </div>
            <div
                className={cls.Close}
                onClick={() => props.setIsPopupOrder(false)}
            >
                <Close />
            </div>
        </div>
    );
};

export default PopupOrderCard;

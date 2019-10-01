import React from 'react';

import cls from './OrderConfirmTitle.scss';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';

const OrderConfirmTitle = props => {
    return (
        <div className={cls.Title}>
            <ContainerWrap>
                <FlexWrap align="center" justify="between">
                    <h6>Order Summary</h6>
                    <span>{props.checkFunc() ? '1' : '2'} of 2 step</span>
                </FlexWrap>
            </ContainerWrap>
        </div>
    );
};

export default OrderConfirmTitle;

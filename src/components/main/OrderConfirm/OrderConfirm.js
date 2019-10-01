import React from 'react';
import { Link } from 'react-router-dom';

import cls from './OrderConfirm.scss';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import OrderConfirmTitle from './OrderConfirmTitle/OrderConfirmTitle';
import OrderConfirmList from './OrderConfirmList/OrderConfirmList';
import OrderConfirmInfo from './OrderConfirmInfo/OrderConfirmInfo';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import ButtonSecond from '@/components/UI/ButtonSecond/ButtonSecond';

const OrderConfirm = props => {
    const pushing = () => {
        props.history.push('/redeem/2');
    };
    const checkPath = () => {
        if (props.match.params.id === '1') {
            return true;
        } else if (props.match.params.id === '2') {
            return false;
        }
    };
    return (
        <div className={cls.OrderConfirm}>
            <OrderConfirmTitle checkFunc={checkPath} />
            <div className={cls.Description}>
                <ContainerWrap>
                    <p>{checkPath() ? 'Confirmation' : 'Receipt'}</p>
                </ContainerWrap>
            </div>

            <div className={cls.bodyContainer}>
                <FlexWrap align="start" justify="between" wrap>
                    <OrderConfirmList
                        checkFunc={checkPath}
                        params={props.match.params.id}
                    />
                    <OrderConfirmInfo checkFunc={checkPath} />
                    {checkPath() ? (
                        <div className={cls.FooterNote}>
                            <p>
                                By clicking ‘Confirm’ you are committing to the
                                purchase of currency and entering into a legally
                                binding contract, as detailed in our{' '}
                                <span>terms and conditions.</span> This
                                operation will affect your reward at the end of
                                the current billing period.
                            </p>
                        </div>
                    ) : null}
                </FlexWrap>
                {checkPath() ? (
                    <div className={cls.Confirm} onClick={() => pushing()}>
                        <ButtonMain type="submit" value="Confirm" />
                    </div>
                ) : (
                    <div className={cls.SaveBtns}>
                        <ButtonSecond value="Print" />
                        <ButtonSecond value="Download" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderConfirm;

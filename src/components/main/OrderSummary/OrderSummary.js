import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import cls from './OrderSummary.scss';
import NoOrderChosen from './NoOrderChosen/NoOrderChosen';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import OrderList from './OrderList/OrderList';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';

const OrderSummary = ({ orderSummary, activeSummary }) => {
    return (
        <div className={cls.OrderSummary}>
            <ContainerWrap>
                <h2>Order Summary</h2>
            </ContainerWrap>

            {activeSummary ? (
                <Fragment>
                    <OrderList orderSummary={orderSummary} />
                    <div className={cls.btnWrap}>
                        <Link className={cls.OrderLink} to="/redeem/1">
                            <ButtonMain type="submit" value="Submit Order" />
                        </Link>
                    </div>
                </Fragment>
            ) : (
                <ContainerWrap>
                    <NoOrderChosen />
                </ContainerWrap>
            )}
        </div>
    );
};

export default OrderSummary;

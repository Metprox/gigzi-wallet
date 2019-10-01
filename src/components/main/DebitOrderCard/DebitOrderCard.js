import React, { useState, Fragment } from 'react';

import cls from './DebitOrderCard.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import DebitOrderCardItem from './DebitOrderCardItem/DebitOrderCardItem';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import PopupOrderCard from './PopupOrderCard/PopupOrderCard';
import PopupOrderSuccess from './PopupOrderSuccess/PopupOrderSuccess';

const DebitOrderCard = props => {
    const [isRightCard, setIsRightCard] = useState(null);
    const [isPopupOrder, setIsPopupOrder] = useState(false);
    const [isPopupSuccess, setIsPopupSuccess] = useState(false);
    const [listCard, setListCard] = useState([
        {
            id: 1,
            card: 'Gold',
            version: 'Virtual',
            svg: 'gigzi',
            params: [
                {
                    name: 'Return protection',
                    status: true,
                },
                {
                    name: 'Perchase security',
                    status: true,
                },
                {
                    name: 'Warranty manager service',
                    status: true,
                },
                {
                    name: 'Trip delay reimbursement',
                    status: true,
                },
            ],
        },
        {
            id: 2,
            card: 'Visa',
            version: 'Virtual',
            svg: 'visa',
            params: [
                {
                    name: 'Return protection',
                    status: true,
                },
                {
                    name: 'Perchase security',
                    status: true,
                },
                {
                    name: 'Warranty manager service',
                    status: true,
                },
                {
                    name: 'Trip delay reimbursement',
                    status: true,
                },
            ],
        },
        {
            id: 3,
            card: 'Gold',
            version: 'Physical',
            svg: 'visa',
            params: [
                {
                    name: 'Return protection',
                    status: true,
                },
                {
                    name: 'Perchase security',
                    status: true,
                },
                {
                    name: 'Warranty manager service',
                    status: true,
                },
                {
                    name: 'Trip delay reimbursement',
                    status: true,
                },
            ],
        },
    ]);

    function checkDisabledBtn() {
        return isRightCard === null;
    }

    return (
        <div className={cls.DebitOrderCard}>
            <ContainerWrap>
                <ul className={cls.List}>
                    {listCard.map(card => {
                        return (
                            <DebitOrderCardItem
                                key={card.id}
                                card={card}
                                isRightCard={isRightCard}
                                setIsRightCard={setIsRightCard}
                            />
                        );
                    })}
                </ul>
            </ContainerWrap>
            <ContainerWrap>
                <div
                    className={cls.BtnWrap}
                    onClick={() => setIsPopupOrder(true)}
                >
                    <ButtonMain
                        type="submit"
                        value="Submit order"
                        disabled={checkDisabledBtn()}
                    />
                </div>
            </ContainerWrap>
            {isPopupOrder ? (
                <Fragment>
                    <div onClick={() => setIsPopupOrder(false)}>
                        <Backdrop />
                    </div>
                    <PopupOrderCard
                        setIsPopupOrder={setIsPopupOrder}
                        setIsPopupSuccess={setIsPopupSuccess}
                    />
                </Fragment>
            ) : null}
            {isPopupSuccess ? (
                <Fragment>
                    <div onClick={() => setIsPopupSuccess(false)}>
                        <Backdrop />
                    </div>
                    <PopupOrderSuccess setIsPopupSuccess={setIsPopupSuccess} />
                </Fragment>
            ) : null}
        </div>
    );
};

export default DebitOrderCard;

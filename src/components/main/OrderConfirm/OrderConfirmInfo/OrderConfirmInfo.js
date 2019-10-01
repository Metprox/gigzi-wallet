import React, { useState } from 'react';

import cls from './OrderConfirmInfo.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';

const OrderConfirmInfo = props => {
    const [list, setList] = useState({});

    return (
        <div className={cls.OrderConfirmInfo}>
            <h2>Personal Information</h2>
            <ContainerWrap>
                <div className={cls.Item}>
                    <span>Account name</span>
                    <span>Johnathan Smith</span>
                </div>
                <div className={cls.Item}>
                    <span>Contract number</span>
                    <span>713944-041</span>
                </div>
                <div className={cls.Item}>
                    <span>Account name</span>
                    <span>Johnathan Smith</span>
                </div>
                <div className={cls.Item}>
                    <span> TX Hash</span>
                    <span>51eaf04f9dbbc1417dc97123adsqweq</span>
                    <div className={cls.Verify}>
                        <p>
                            verify transaction on
                            <br />
                            the blockchain
                        </p>
                    </div>
                </div>
                <div className={cls.Item}>
                    <span>Date</span>
                    <span>15 October, 2018</span>
                </div>
                <div className={cls.Item}>
                    <span>Address</span>
                    <span>
                        United States, New York
                        <br />
                        10004
                        <br />
                        25 Brodway, 9th floor, office
                    </span>
                    {props.checkFunc() ? (
                        <div className={cls.Edit}>
                            <p>Edit</p>
                        </div>
                    ) : null}
                </div>
            </ContainerWrap>
        </div>
    );
};

export default OrderConfirmInfo;

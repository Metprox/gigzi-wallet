import React, { Component } from 'react';

import cls from './SectionDebitFees.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import DebitFeesList from '@/components/main/DebitFeesList/DebitFeesList';

export default class SectionDebitFees extends Component {
    backstepToOrder = () => {
        this.props.history.push(`/debit/order`);
    };

    render() {
        return (
            <div className={cls.SectionDebitFees}>
                <div className={cls.wrapBackstep}>
                    <div
                        onClick={() => this.backstepToOrder()}
                        className={cls.Backstep}
                    >
                        <h3>Back to order</h3>
                    </div>
                </div>
                <div className={cls.BackgroundSection}>
                    <div className={cls.Title}>
                        <ContainerWrap>
                            <h6>Gigzi gold card</h6>
                        </ContainerWrap>
                    </div>
                    <div className={cls.Description}>
                        <ContainerWrap>
                            <p>Fees & Limits</p>
                        </ContainerWrap>
                    </div>
                    <DebitFeesList />
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';

import cls from './FundingAddAccount.scss';
import BackstepFundingBtns from '@/components/UI/BackstepFundingBtns/BackstepFundingBtns';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import FundingDescription from '@/components/main/FundingDescription/FundingDescription';
import FundingBankInfo from '@/components/main/FundingBankInfo/FundingBankInfo';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';

export default class FundingAddAccount extends Component {
    render() {
        return (
            <section className={cls.FundingAddAccount}>
                <div className={cls.backstep}>
                    <BackstepFundingBtns {...this.props} />
                </div>
                <div className={cls.Body}>
                    <div className={cls.Header}>
                        <ContainerWrap>
                            <h6>Add payment account</h6>
                        </ContainerWrap>
                    </div>
                    <FundingDescription value="Bank information" />
                    <FundingBankInfo />
                    <ContainerWrap>
                        <div
                            className={cls.Btn}
                            onClick={() => this.props.handlerAddBank()}
                        >
                            <ButtonMain type="submit" value="Save" />
                        </div>
                    </ContainerWrap>
                </div>
            </section>
        );
    }
}

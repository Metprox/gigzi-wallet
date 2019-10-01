import React, { Component, Fragment } from 'react';

import cls from './FundingEditAccount.scss';
import BackstepFundingBtns from '@/components/UI/BackstepFundingBtns/BackstepFundingBtns';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import FundingDescription from '@/components/main/FundingDescription/FundingDescription';
import FundingBankInfo from '@/components/main/FundingBankInfo/FundingBankInfo';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import ButtonSecond from '@/components/UI/ButtonSecond/ButtonSecond';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import PopupDeleteContact from '@/components/main/PopupDeleteContact/PopupDeleteContact'

class FundingEditAccount extends Component {
    state = {
        isDelete: false,
    };

    handlerDelete = statusDelete => {
        this.setState({
            isDelete: statusDelete,
        });
    };

    render() {
        const { isDelete } = this.state;
        return (
            <section className={cls.FundingEditAccount}>
                <div className={cls.backstep}>
                    <BackstepFundingBtns {...this.props} />
                </div>
                <div className={cls.Body}>
                    <div className={cls.Header}>
                        <h6>Edit payment account</h6>
                        <div className={cls.Delete} onClick={() => this.handlerDelete(true)}>
                            <p>Delete</p>
                        </div>
                    </div>
                    <FundingDescription value="Bank information" />
                    <FundingBankInfo />
                    <div className={cls.Btns}>
                        <div className={cls.Cancel}>
                            <span>Cancel</span>
                        </div>
                        <div className={cls.Save}>
                            <ButtonMain type="submit" value="Save" />
                        </div>
                    </div>
                </div>
                {isDelete ? (
                    <Fragment>
                        <div onClick={() => this.handlerDelete(false)}>
                            <Backdrop />
                        </div>
                        <PopupDeleteContact
                            handlerDelete={this.handlerDelete}
                            />
                    </Fragment>
                ) : null}
            </section>
        );
    }
}

export default FundingEditAccount;

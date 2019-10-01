import React, { Component, Fragment } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import cls from './SectionSecondFunding.scss';
import FundingFundsBtn from '@/components/main/FundingFundsBtn/FundingFundsBtn';
import FundingDescription from '@/components/main/FundingDescription/FundingDescription';
import FundingNoAccount from '@/components/main/FundingNoAccount/FundingNoAccount';
import FundingAddAccount from '@/containers/FundingAddAccount/FundingAddAccount';
import FundingManageAccount from '@/containers/FundingManageAccount/FundingManageAccount';
import FundingEditAccount from '@/containers/FundingEditAccount/FundingEditAccount';
import FundingWithdrawDetail from '@/components/main/FundingWithdrawDetail/FundingWithdrawDetail';
import FundingAddHasBankDetail from '@/components/main/FundingAddHasBankDetail/FundingAddHasBankDetail';
import FundingAddNewBank from '@/components/main/FundingAddNewBank/FundingAddNewBank';
import FundingBankSummary from '@/components/main/FundingBankSummary/FundingBankSummary';
import FundingAddSavingBtns from '@/components/main/FundingAddSavingBtns/FundingAddSavingBtns';
import FundingAddBankTransfer from '@/components/main/FundingAddBankTransfer/FundingAddBankTransfer';
import FundingPopupSuccess from '@/components/main/FundingPopupSuccess/FundingPopupSuccess';
import FundingWithdrawSummary from '@/components/main/FundingWithdrawSummary/FundingWithdrawSummary';
import FundingWithdrawConfirm from '@/components/main/FundingWithdrawConfirm/FundingWithdrawConfirm';

export default class SectionSecondFunding extends Component {
    state = {
        isCheckActiveBtn: 'add',
        hasBank: true,
        content: null,
        popupNewAccountSuccess: false,
        popupWithdrawConfirm: false,
    };
    componentDidMount() {
        localStorage.setItem('route', 'funding');
        this.handlerActiveBtn(this.state.isCheckActiveBtn);
    }

    handlerActiveBtn = activeBtn => {
        if (activeBtn == 'add') {
            localStorage.setItem('route-funding-btn', 'add');

            if (this.state.hasBank) {
                this.setState({
                    isCheckActiveBtn: localStorage.getItem('route-funding-btn'),
                    content: (
                        <Fragment>
                            <FundingDescription value="Detail" />
                            <FundingAddHasBankDetail
                                btnContinue={this.handlerHasBankBankTransfer}
                            />
                        </Fragment>
                    ),
                });
            } else {
                this.setState({
                    isCheckActiveBtn: localStorage.getItem('route-funding-btn'),
                    content: (
                        <Fragment>
                            <FundingDescription value="Detail" />
                            <FundingNoAccount />
                        </Fragment>
                    ),
                });
            }
        } else if (activeBtn == 'withdraw') {
            localStorage.setItem('route-funding-btn', 'withdraw');

            this.setState({
                isCheckActiveBtn: localStorage.getItem('route-funding-btn'),
                content: (
                    <Fragment>
                        <FundingDescription value="Details" />
                        <FundingWithdrawDetail
                            handlerNext={this.handlerWithdrawNext}
                        />
                    </Fragment>
                ),
            });
        }
    };

    handlerAddBank = () => {
        localStorage.setItem('route-funding-btn', 'add');
        this.setState({
            isCheckActiveBtn: localStorage.getItem('route-funding-btn'),
            content: (
                <Fragment>
                    <FundingDescription value="Detail" />
                    <FundingAddNewBank
                        orderConfirm={this.handlerAddOrderConfirm}
                    />
                </Fragment>
            ),
        });
        this.props.history.push('/funding');
    };

    handlerHasBankBankTransfer = () => {
        this.setState({
            content: (
                <Fragment>
                    <FundingDescription value="Bank tranfser" />
                    <FundingAddBankTransfer />
                </Fragment>
            ),
        });
    };

    handlerWithdrawNext = () => {
        this.setState({
            isCheckActiveBtn: localStorage.getItem('route-funding-btn'),
            content: (
                <Fragment>
                    <FundingDescription value="Order a summary" />
                    <FundingWithdrawSummary
                        from="30 457.80 USD Wallet US Dollar"
                        to="New Bank UK "
                        amount="50 000 USD"
                        handlerWithdrawConfirm={this.handlerWithdrawConfirm}
                    />
                </Fragment>
            ),
        });
    };

    handlerAddOrderConfirm = () => {
        this.setState({
            popupNewAccountSuccess: true,
            content: (
                <Fragment>
                    <FundingDescription value="Order confirm" />
                    <FundingBankSummary
                        owner="Gigzi Limited"
                        ownerAddress="Charlotte Street 48 W1T 2NS London, United Kingdom"
                        iban="BE27 9140 0711 6273"
                        currency="EUR"
                        bank="Ibanfirst"
                        bankAddress="Avenue Louise 350, 1050 Brussels - Belgium"
                        code="FXBBBEBBXX"
                        amount="50 000 USD"
                    />
                    <div className={cls.addOrderConfirmBtn}>
                        <FundingAddSavingBtns />
                    </div>
                </Fragment>
            ),
        });
    };

    handlerClosePopup = () => {
        if (this.state.popupNewAccountSuccess) {
            this.setState({
                popupNewAccountSuccess: false,
            });
        }
        if (this.state.popupWithdrawConfirm) {
            this.setState({
                popupWithdrawConfirm: false,
            });
        }
    };

    handlerWithdrawConfirm = () => {
        console.log('qweweq')
        this.setState({
            popupWithdrawConfirm: true,
            content: (
                <Fragment>
                    <FundingDescription value="Order confirmation" />
                    <FundingWithdrawConfirm />
                </Fragment>
            ),
        });
    };

    render() {
        const {
            content,
            isCheckActiveBtn,
            popupNewAccountSuccess,
            popupWithdrawConfirm
        } = this.state;
        return (
            <Switch>
                <Route exact path="/funding">
                    <section className={cls.Funding}>
                        <header className={cls.Header}>
                            <h1>Funding options</h1>
                            <NavLink
                                className={cls.linkManage}
                                to="/funding/manage"
                            >
                                Manage payment accounts
                            </NavLink>
                        </header>
                        <div className={cls.Body}>
                            <FundingFundsBtn
                                handleAcitveBtn={this.handlerActiveBtn}
                                isCheckActiveBtn={isCheckActiveBtn}
                            />
                            {content}
                            {popupNewAccountSuccess ? (
                                <FundingPopupSuccess
                                    text="Your add request has been successfully received"
                                    handlerClose={this.handlerClosePopup}
                                />
                            ) : null}
                            {popupWithdrawConfirm ? (
                                <FundingPopupSuccess
                                    text="Your withdrawal request has been successfully received"
                                    handlerClose={this.handlerClosePopup}
                                />
                            ) : null}
                        </div>
                    </section>
                </Route>
                <Route
                    path="/funding/manage"
                    component={FundingManageAccount}
                />
                <Route path="/funding/add">
                    <FundingAddAccount handlerAddBank={this.handlerAddBank} />
                </Route>
                <Route path="/funding/edit" component={FundingEditAccount} />
            </Switch>
        );
    }
}

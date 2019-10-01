import React, { Component, createRef, Fragment } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

import cls from './SectionSecondDebit.scss';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';
import GigziDebitCards from '@/components/common/GigziDebitCards/GigziDebitCards';
import TransactionsCard from '@/components/main/TransactionsCard/TransactionsCard';
import LoadCard from '@/components/main/LoadCard/LoadCard';
import SectionDebitOrder from '@/containers/SectionDebitOrder/SectionDebitOrder';
import SectionDebitSettings from '@/containers/SectionDebitSettings/SectionDebitSettings';
import Pagination from '@/components/UI/Pagination/Pagination';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import PopupLink from '@/components/common/GigziDebitCards/PopupLink/PopupLink';

const ref = React.createRef();
const classesLeft = [cls.Left, false ? cls.Disabled : null].join(' ');
const classesRight = [cls.Right, false ? cls.Disabled : null].join(' ');

export default class SectionSecondDebit extends Component {
    state = {
        cards: [
            {
                id: 1,
                svg: 'visa',
                wallet: 'usd',
                amount: 23372.46,
                code: '2819 4765 3916 4855',
                dateMonth: '02',
                dateYear: 22,
            },
            {
                id: 2,
                svg: 'mcard',
                wallet: 'eur',
                amount: 18230.46,
                code: '2819 4765 3916 0321',
                dateMonth: '01',
                dateYear: 24,
            },
            {
                id: 3,
                svg: 'gzg',
                wallet: 'gzg',
                amount: 34029.46,
                code: '2819 4765 3916 0321',
                dateMonth: '05',
                dateYear: 25,
            },
        ],
        listTransaction: [
            {
                name: 'Transfer',
                from: 'from Us Dollar wallet',
                to: '',
                statusArrow: 1,
                money: {
                    state: true,
                    sum: 4093.12,
                    sumWallet: 'Usd',
                    usd: null,
                },
                date: {
                    month: 'November',
                    day: 4,
                    year: 2018,
                    time: '18:54',
                },
            },
            {
                name: 'Transfer',
                from: 'Euro wallet',
                to: '',
                statusArrow: 1,
                money: {
                    state: true,
                    sum: 2495.48,
                    sumWallet: 'Usd',
                    usd: null,
                },
                date: {
                    month: 'November',
                    day: 3,
                    year: 2018,
                    time: '14:43',
                },
            },
            {
                name: 'Shopping',
                from: '',
                to: '',
                statusArrow: 2,
                money: {
                    state: false,
                    sum: 475.65,
                    sumWallet: 'Usd',
                    usd: null,
                },
                date: {
                    month: 'November',
                    day: 2,
                    year: 2018,
                    time: '12:36',
                },
            },
            {
                name: 'Shopping',
                from: '',
                to: '',
                statusArrow: 2,
                money: {
                    state: false,
                    sum: 1285.28,
                    sumWallet: 'Usd',
                    usd: null,
                },
                date: {
                    month: 'November',
                    day: 2,
                    year: 2018,
                    time: '10:19',
                },
            },
            {
                name: 'Transfer',
                from: 'from Us Wallet',
                to: '',
                statusArrow: 1,
                money: {
                    state: true,
                    sum: 500.493,
                    sumWallet: 'Usd',
                    usd: null,
                },
                date: {
                    month: 'November',
                    day: 2,
                    year: 2018,
                    time: '09:12',
                },
            },
        ],
        activePopup: null,
        activeCard: null,
        isLink: false,
    };

    componentDidMount() {
        localStorage.setItem('route', 'debit');
    }

    setIsLink = status => {
        this.setState({ isLink: status });
    };

    handlerPopupActive = id => {
        this.setState((state, props) => {
            return {
                activePopup: id,
            };
        });
    };

    handlerCardActive = id => {
        this.setState((state, props) => {
            return {
                activeCard: id,
            };
        });
    };

    render() {
        const { cards, activePopup, activeCard, listTransaction } = this.state;
        return (
            <Switch>
                <Route exact path="/debit">
                    <section className={cls.Debit}>
                        <div className={cls.flexTitle}>
                            <h1>Debit Cards</h1>
                            <div className={cls.rightTitleBlock}>
                                <NavLink
                                    to="/debit/order"
                                    className={cls.LinkOrder}
                                >
                                    Order a card
                                </NavLink>
                                <div className={cls.wrapPagination}>
                                    <div className={cls.Pagination}>
                                        <div
                                            className={classesLeft}
                                            onClick={() =>
                                                ref.current.slickPrev()
                                            }
                                        />
                                        <div
                                            className={classesRight}
                                            onClick={() =>
                                                ref.current.slickNext()
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <GigziDebitCards
                            ref={ref}
                            cards={cards}
                            activeCard={activeCard}
                            handlerCard={this.handlerCardActive}
                            setIsLink={this.setIsLink}
                        />
                        <div className={cls.Flex}>
                            <div className={cls.Transactions}>
                                <TransactionsCard
                                    activeCard={activeCard}
                                    activePopup={activePopup}
                                    handlerPopup={this.handlerPopupActive}
                                    visibleFilterWallet={true}
                                    listTransaction={listTransaction}
                                />
                            </div>
                            <LoadCard />
                        </div>
                        {this.state.isLink ? (
                            <Fragment>
                                <div onClick={() => this.setIsLink(false)}>
                                    <Backdrop />
                                </div>
                                <PopupLink setIsLink={this.setIsLink} />
                            </Fragment>
                        ) : null}
                    </section>
                </Route>
                <Route path="/debit/order" component={SectionDebitOrder} />
                <Route
                    path="/debit/settings"
                    component={SectionDebitSettings}
                />
                <Redirect to="/debit" />
            </Switch>
        );
    }
}

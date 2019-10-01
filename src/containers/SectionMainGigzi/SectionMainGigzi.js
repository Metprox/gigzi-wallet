import React, { Component, createRef, Fragment } from 'react';

import cls from './SectionMainGigzi.scss';
import GigziCards from '@/components/common/GigziCards/GigziCards';
import TransactionsCard from '@/components/main/TransactionsCard/TransactionsCard';
import SendingCard from '@/components/main/SendingCard/SendingCard';
import Pagination from '@/components/UI/Pagination/Pagination';
import PopupWalletConfirm from '@/components/main/PopupWalletConfirm/PopupWalletConfirm';
import PopupConfirmSuccess from '@/components/main/PopupConfirmSuccess/PopupConfirmSuccess';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import Gzb from '@/assets/svg/gigziCard/black.svg';

const ref = React.createRef();
const classesLeft = [cls.Left, false ? cls.Disabled : null].join(' ');
const classesRight = [cls.Right, false ? cls.Disabled : null].join(' ');
export default class SectionMainGigzi extends Component {
    state = {
        cards: [
            {
                id: 1,
                name: 'gzb',
                moneyStone: 295.7463,
                moneyCurrency: 60457.8,
            },
            {
                id: 2,
                name: 'gzs',
                moneyStone: 295.7463,
                moneyCurrency: 60457.42,
            },
            {
                id: 3,
                name: 'gzg',
                moneyStone: 295.7463,
                moneyCurrency: 60457.24,
            },
            {
                id: 4,
                name: 'gzp',
                moneyStone: 295.7463,
                moneyCurrency: 60457.35,
            },
        ],
        listTransaction: [
            {
                name: 'Converted',
                from: 'GZG',
                to: 'GZB',
                statusArrow: 3,
                money: {
                    state: true,
                    sum: 4093.12,
                    sumWallet: 'Gzb',
                    usd: 2100.48,
                },
                date: {
                    month: 'November',
                    day: 4,
                    year: 2018,
                    time: '18:54',
                },
            },
            {
                name: 'Sent',
                from: 'Gigzi Black',
                to: '',
                statusArrow: 1,
                money: {
                    state: true,
                    sum: 2495.48,
                    sumWallet: 'Gzb',
                    usd: 3928.81,
                },
                date: {
                    month: 'November',
                    day: 3,
                    year: 2018,
                    time: '14:43',
                },
            },
            {
                name: 'Sent Gigzi Black',
                from: '',
                to: '',
                statusArrow: 2,
                money: {
                    state: false,
                    sum: 475.65,
                    sumWallet: 'Gzb',
                    usd: 643,
                },
                date: {
                    month: 'November',
                    day: 2,
                    year: 2018,
                    time: '12:36',
                },
            },
            {
                name: 'Converted',
                from: 'GZB',
                to: 'GZG',
                statusArrow: 3,
                money: {
                    state: false,
                    sum: 1285.28,
                    sumWallet: 'Gzb',
                    usd: 542.95,
                },
                date: {
                    month: 'November',
                    day: 2,
                    year: 2018,
                    time: '10:19',
                },
            },
            {
                name: 'Received',
                from: 'Gigzi Black',
                to: '',
                statusArrow: 1,
                money: {
                    state: true,
                    sum: 2495.48,
                    sumWallet: 'Gzb',
                    usd: 3928.81,
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
        activeCard: 1,
        isConfirm: false,
        isSuccess: false,
    };

    componentDidMount() {
        localStorage.setItem('route', 'gigzi');
    }

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

    handlerConfirm = statusConfirm => {
        this.setState({
            isConfirm: statusConfirm,
        });
    };

    handlerSuccess = statusSuccess => {
        this.setState({
            isSuccess: statusSuccess,
        });
    };

    render() {
        const {
            cards,
            activePopup,
            activeCard,
            listTransaction,
            isConfirm,
            isSuccess,
        } = this.state;
        return (
            <section className={cls.Gigzi}>
                <div className={cls.flexTitle}>
                    <h1>Wallet — gigzi</h1>
                    <div className={cls.wrapPagination}>
                        <div className={cls.Pagination}>
                            <div
                                className={classesLeft}
                                onClick={() => ref.current.slickPrev()}
                            />
                            <div
                                className={classesRight}
                                onClick={() => ref.current.slickNext()}
                            />
                        </div>
                    </div>
                </div>
                <GigziCards
                    ref={ref}
                    cards={cards}
                    handlerCard={this.handlerCardActive}
                    activeCard={activeCard}
                />
                <div className={cls.Flex}>
                    <div className={cls.Transactions}>
                        <TransactionsCard
                            activeCard={activeCard}
                            activePopup={activePopup}
                            handlerPopup={this.handlerPopupActive}
                            listTransaction={listTransaction}
                        />
                    </div>
                    <SendingCard
                        Currency="gzb"
                        placeholder="Gigzi Black"
                        svg="gigzi"
                        handlerConfirm={this.handlerConfirm}
                    />
                </div>
                {isConfirm ? (
                    <Fragment>
                        <div onClick={() => this.handlerConfirm(false)}>
                            <Backdrop />
                        </div>

                        <PopupWalletConfirm
                            handlerConfirm={this.handlerConfirm}
                            handlerSuccess={this.handlerSuccess}
                        />
                    </Fragment>
                ) : null}
                {isSuccess ? (
                    <Fragment>
                        <div onClick={() => this.handlerSuccess(false)}>
                            <Backdrop />
                        </div>
                        <PopupConfirmSuccess
                            handlerSuccess={this.handlerSuccess}
                            svg={<Gzb />}
                            title="CONVERTED"
                            value="22.48750"
                            wallet="usd"
                            hash="51eaf04f9dbbc1417dc97e789edd0c37ecda88bac490434e367ea81b71b7b015"
                        />
                    </Fragment>
                ) : null}
            </section>
        );
    }
}

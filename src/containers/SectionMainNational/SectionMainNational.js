import React, { Component, Fragment } from 'react';

import cls from './SectionMainNational.scss';
import GigziCards from '@/components/common/GigziCards/GigziCards';
import TransactionsCard from '@/components/main/TransactionsCard/TransactionsCard';
import SendingCard from '@/components/main/SendingCard/SendingCard';
import PopupWalletConfirm from '@/components/main/PopupWalletConfirm/PopupWalletConfirm';
import PopupConfirmSuccess from '@/components/main/PopupConfirmSuccess/PopupConfirmSuccess';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import Gzb from '@/assets/svg/gigziCard/black.svg';
import NationalCards from '@/components/common/NationalCards/NationalCards';

export default class SectionMainNational extends Component {
    state = {
        cards: [
            {
                id: 1,
                name: 'usd',
                moneyStone: 60457.8,
                moneyCurrency: null,
            },
            {
                id: 2,
                name: 'eur',
                moneyStone: 295.7463,
                moneyCurrency: 60457.8,
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
                    sumWallet: 'GZB',
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
                    sumWallet: 'GZB',
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
                    sumWallet: 'GZB',
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
                    sumWallet: 'GZB',
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
                    sumWallet: 'GZB',
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
        localStorage.setItem('route', 'national');
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
            <section className={cls.National}>
                <h1>wallet — national</h1>
                <NationalCards
                    cards={cards}
                    activeCard={activeCard}
                    handlerCard={this.handlerCardActive}
                />
                <div className={cls.Flex}>
                    <div className={cls.Transactions}>
                        <TransactionsCard
                            activeCard={activeCard}
                            activePopup={this.state.activePopup}
                            handlerPopup={this.handlerPopupActive}
                            listTransaction={listTransaction}
                        />
                    </div>
                    <SendingCard
                        offFirstAmount={true}
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

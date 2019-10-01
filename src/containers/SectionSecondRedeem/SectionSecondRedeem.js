import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import cls from './SectionSecondRedeem.scss';
import ReddemCards from '@/components/common/ReddemCards/ReddemCards';
import PurityGold from '@/components/main/PurityGold/PurityGold';
import OrderSummary from '@/components/main/OrderSummary/OrderSummary';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';
import OrderConfirm from '@/components/main/OrderConfirm/OrderConfirm';
export default class SectionSecondRedeem extends Component {
    state = {
        cards: [
            {
                id: 1,
                name: 'gzs',
                moneyStone: 23372.4673,
                moneyCurrency: 60457.8,
            },
            {
                id: 2,
                name: 'gzg',
                moneyStone: 1782.8493,
                moneyCurrency: 60457.42,
            },
            {
                id: 3,
                name: 'gzp',
                moneyStone: 683.5382,
                moneyCurrency: 60457.42,
            },
        ],
        purityGold: [
            {
                id: 1,
                description: 'Gold 1oz Bar',
                code: 'A1BD',
                fabrication: '0.518672 GZG',
            },
            {
                id: 2,
                description: 'Gold 5oz Bar',
                code: 'A1BD',
                fabrication: '1.42634854 GZG',
            },
            {
                id: 3,
                description: 'Gold 11oz Bar',
                code: 'A1BD',
                fabrication: '1.815352697 GZG',
            },
            {
                id: 4,
                description: 'Gold 20oz Bar',
                code: 'A1BD',
                fabrication: '2.59336099 GZG',
            },
            {
                id: 5,
                description: 'Gold 1KG Bar',
                code: 'A1BD',
                fabrication: '3.90004149 GZG',
            },
            {
                id: 6,
                description: 'Gold 50oz Bar',
                code: 'A1BD',
                fabrication: '6.48340248 GZG',
            },
            {
                id: 7,
                description: 'Gold 400oz Bar',
                code: 'A1BD',
                fabrication: '6.22406639 GZG',
            },
        ],
        orderSummary: [
            {
                id: 1,
                description: 'Gold 1oz Bar',
                fabrication: '0.518672 GZG',
                currency: 55,
            },
            {
                id: 2,
                description: 'Gold 5oz Bar',
                fabrication: '1.42634854 GZG',
                currency: 250,
            },
            {
                id: 3,
                description: 'Gold 11oz Bar',
                fabrication: '1.815352697 GZG',
                currency: 27,
            },
        ],
        activeCard: null,
        activeSummary: false,
    };

    componentDidMount() {
        localStorage.setItem('route', 'redeem');
    }

    handlerCardActive = id => {
        this.setState((state, props) => {
            return {
                activeCard: id,
            };
        });
    };

    handlerPurityActive = () => {
        this.setState((state, props) => {
            return {
                activeSummary: !state.activeSummary,
            };
        });
    };

    render() {
        const {
            cards,
            activeCard,
            purityGold,
            orderSummary,
            activeSummary,
        } = this.state;
        return (
            <section className={cls.Redeem}>
                <h1>Redeem assets</h1>
                <Route
                    path="/redeem"
                    exact
                    render={() => {
                        return (
                            <Fragment>
                                <ReddemCards
                                    cards={cards}
                                    handlerCard={this.handlerCardActive}
                                    activeCard={activeCard}
                                />
                                <div className={cls.Flex}>
                                    <PurityGold
                                        purityGold={purityGold}
                                        purityActive={this.handlerPurityActive}
                                    />
                                    <OrderSummary
                                        orderSummary={orderSummary}
                                        activeSummary={activeSummary}
                                    />
                                </div>
                            </Fragment>
                        );
                    }}
                />
                <Route path="/redeem/:id" exact component={OrderConfirm} />
            </section>
        );
    }
}

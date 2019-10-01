import React, { Component, Fragment, createRef } from 'react';

import cls from './SectionSecondConverter.scss';
import ConvertAmount from '@/components/main/ConvertAmount/ConvertAmount';
import ConvertValues from '@/components/main/ConvertValues/ConvertValues';
import ConvertBalances from '@/components/main/ConvertBalances/ConvertBalances';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import PopupConverting from '@/components/main/PopupConverting/PopupConverting';
import PopupConfirmSuccess from '@/components/main/PopupConfirmSuccess/PopupConfirmSuccess';
import Eth from '@/assets/svg/gigziCard/ethereum.svg';


class SectionSecondConverter extends Component {
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
            {
                id: 5,
                name: 'gzp',
                moneyStone: 295.7463,
                moneyCurrency: 60457.93,
            },
            {
                id: 6,
                name: 'eth',
                moneyStone: 295.7463,
                moneyCurrency: 60457.8,
            },
            {
                id: 7,
                name: 'usd',
                moneyStone: 60457.8,
                moneyCurrency: null,
            },
            {
                id: 8,
                name: 'eur',
                moneyStone: 295.7463,
                moneyCurrency: 60457.8,
            },
        ],
        activeCard: null,
        converting: false,
        isSuccess: false,
    };
    componentDidMount() {
        localStorage.setItem('route', 'converter');
    }
    handlerCardActive = id => {
        this.setState((state, props) => {
            return {
                activeCard: id,
            };
        });
    };

    handlerConverting = statusConvert => {
        this.setState({
            converting: statusConvert,
        });
    };

    handlerSuccess = statusSuccess => {
        this.setState({
            isSuccess: statusSuccess,
        });
    };

    render() {
        const { cards, activeCard, converting, isSuccess } = this.state;
        return (
            <section className={cls.Converter}>
                <h1>Convert</h1>
                <div className={cls.Flex}>
                    <ConvertValues />
                    <ConvertAmount handlerConverting={this.handlerConverting} />
                </div>
                <ConvertBalances
                    cards={cards}
                    handlerCard={this.handlerCardActive}
                    activeCard={activeCard}
                />
                {converting ? (
                    <Fragment>
                        <div onClick={() => this.handlerConverting(false)}>
                            <Backdrop />
                        </div>

                        <PopupConverting
                            handlerConverting={this.handlerConverting}
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
                            svg={<Eth style={{fill: '#fff'}} />}
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

export default SectionSecondConverter;

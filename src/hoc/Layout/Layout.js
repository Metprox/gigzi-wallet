import { hot } from 'react-hot-loader/root';
import React, { Component, Fragment } from 'react';

import cls from './Layout.scss';
import Header from '@/containers/Header/Header';
import Main from '@/containers/Main/Main';
import Sidebar from '@/containers/Sidebar/Sidebar';
import PopupLanguages from '@/components/header/PopupLanguages/PopupLanguages';
import PopupCurrencies from '@/components/header/PopupCurrencies/PopupCurrencies';
import Backdrop from '@/components/UI/Backdrop/Backdrop';

class Layout extends Component {
    state = {
        isSidebar: false,
        isLanguages: false,
        isCurrencies: false,
    };

    handlerSidebar = status => {
        if (status) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
        }

        this.setState((state, props) => {
            return {
                isSidebar: status,
            };
        });
    };

    setIsLanguages = status => {
        this.setState({ isLanguages: status });
    };

    setIsCurrencies = status => {
        this.setState({ isCurrencies: status });
    };

    render() {
        const { isSidebar, isLanguages, isCurrencies, isCopied } = this.state;
        return (
            <Fragment>
                <Header
                    handlerSidebar={this.handlerSidebar}
                    isSidebar={isSidebar}
                    setIsLanguages={this.setIsLanguages}
                    setIsCurrencies={this.setIsCurrencies}
                />
                <div className={cls.Flex}>
                    <Sidebar
                        handlerSidebar={this.handlerSidebar}
                        isSidebar={isSidebar}
                        isLanguages={isLanguages}
                        isCurrencies={isCurrencies}
                        setIsLanguages={this.setIsLanguages}
                        setIsCurrencies={this.setIsCurrencies}
                    />
                    <Main />
                    <div style={{ display: isLanguages ? 'block' : 'none' }}>
                        <div onClick={() => this.setIsLanguages(false)}>
                            <Backdrop />
                        </div>
                        <PopupLanguages
                            showPopupContact={this.setIsLanguages}
                        />
                    </div>
                    <div style={{ display: isCurrencies ? 'block' : 'none' }}>
                        <div onClick={() => this.setIsCurrencies(false)}>
                            <Backdrop />
                        </div>
                        <PopupCurrencies
                            showPopupContact={this.setIsCurrencies}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default hot(Layout);

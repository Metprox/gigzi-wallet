import React, { Component, Fragment, useEffect } from 'react';

import cls from './Sidebar.scss';

import ListMain from '@/components/sidebar/ListMain/ListMain';
import ListSecond from '@/components/sidebar/ListSecond/ListSecond';
import Verified from '@/components/sidebar/Verified/Verified';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import MobileMore from '@/components/sidebar/MobileMore/MobileMore';
import Rewards from '@/components/header/Rewards/Rewards';
class Sidebar extends Component {
    state = {
        checkVerified: false,
    };

    render() {
        const { checkVerified } = this.state;
        const { isSidebar, handlerSidebar } = this.props;
        return (
            <Fragment>
                <aside
                    className={[
                        cls.Sidebar,
                        this.props.isSidebar ? cls.activeSidebar : null,
                    ].join(' ')}
                >
                    <div>
                        <div className={cls.mobileWrapRewards}>
                            <Rewards />
                        </div>
                        <ListMain handlerSidebar={handlerSidebar} />
                        <ListSecond
                            checkVerified={checkVerified}
                            handlerSidebar={handlerSidebar}
                        />
                    </div>
                    {!this.state.checkVerified && (
                        <Verified handlerSidebar={handlerSidebar} />
                    )}
                    <div className={cls.wrapMobileMore}>
                        <MobileMore
                            handlerSidebar={handlerSidebar}
                            isLanguages={this.props.isLanguages}
                            isCurrencies={this.props.isCurrencies}
                            setIsLanguages={this.props.setIsLanguages}
                            setIsCurrencies={this.props.setIsCurrencies}
                        />
                    </div>
                </aside>
                {isSidebar ? (
                    <div
                        className={cls.wrapBackdrop}
                        onClick={() => handlerSidebar(false)}
                    >
                        <Backdrop />
                    </div>
                ) : null}
            </Fragment>
        );
    }
}

export default Sidebar;

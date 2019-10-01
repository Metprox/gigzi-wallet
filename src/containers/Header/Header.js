import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import cls from './Header.scss';
import Logo from '@/assets/svg/logo.svg';

import Notification from '@/components/header/Notification/Notification';
import More from '@/components/header/More/More';
import Rewards from '@/components/header/Rewards/Rewards';
import Burger from '@/components/UI/Burger/Burger';

class Header extends Component {
    handlerBurgerOutside = event => {
        if (event.target.className !== cls.wrapBurger) {
            this.props.handlerSidebar(false);
        }
    };

    componentDidMount() {
        document.addEventListener('click', this.handlerBurgerOutside, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handlerBurgerOutside, false);
    }

    render() {
        const { isSidebar, handlerSidebar } = this.props;
        return (
            <header className={cls.Header}>
                <div className={cls.Logo}>
                    <div
                        className={cls.wrapBurger}
                        onClick={() => handlerSidebar(!isSidebar)}
                    >
                        <Burger isSidebar={this.props.isSidebar} />
                    </div>
                    <NavLink to="/" className={cls.Link}>
                        <Logo />
                    </NavLink>
                </div>
                <div className={cls.Notifications}>
                    <div className={cls.wrapRewards}>
                        <Rewards />
                    </div>
                    <div className={cls.Settings}>
                        <Notification />
                        <More
                            setIsLanguages={this.props.setIsLanguages}
                            setIsCurrencies={this.props.setIsCurrencies}
                        />
                    </div>
                </div>
                <div className={cls.mobileRewards}>
                    <Rewards />
                </div>
            </header>
        );
    }
}

export default Header;

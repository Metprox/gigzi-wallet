import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './MobileMore.scss';

const MobileMore = props => {
    const popupCurrencies = () => {
        props.handlerSidebar(false);
        props.setIsCurrencies(true);
        console.log('HELLO');
    };

    const popupLanguages = () => {
        props.handlerSidebar(false);
        props.setIsLanguages(true);
    };

    return (
        <div className={cls.MobileMore}>
            <NavLink to="#">My account</NavLink>
            <p onClick={popupCurrencies}>Currencies</p>
            <p onClick={popupLanguages}>Languages</p>
            <NavLink to="#">About us</NavLink>
            <NavLink to="#">Terms of service</NavLink>
            <NavLink to="#">Privacy policy</NavLink>
            <NavLink to="#">Log out</NavLink>
        </div>
    );
};
export default MobileMore;

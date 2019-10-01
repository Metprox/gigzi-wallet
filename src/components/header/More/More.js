import React, { useEffect, useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import cls from './More.scss';
// import Dots from '@/assets/svg/header/More.svg';
import Dots from '@/assets/svg/header/button_settings.svg';
import PopupLanguages from '../PopupLanguages/PopupLanguages';
import PopupCurrencies from '../PopupCurrencies/PopupCurrencies';
import Backdrop from '@/components/UI/Backdrop/Backdrop';

const More = props => {
    const [toggle, setToggle] = useState(false);
    // const [isLanguages, setIsLanguages] = useState(false);
    // const [isCurrencies, setIsCurrencies] = useState(false);

    useEffect(() => {
        document.addEventListener('click', handlerMoreOutside, false);
        return () => {
            document.removeEventListener('click', handlerMoreOutside, false);
        };
    }, []);

    function handlerMoreOutside(event) {
        if (event.target.className !== cls.More) {
            setToggle(false);
        }
    }

    return (
        <div className={cls.wrapper}>
            <div className={cls.More} onClick={() => setToggle(!toggle)}>
                <Dots />
                {toggle && <span className={cls.ArrowUp} />}
            </div>
            {toggle && (
                <ul className={cls.List}>
                    <li className={cls.ListItem}>
                        <NavLink className={cls.ListLink} to="#">
                            My Account
                        </NavLink>
                    </li>
                    <li className={cls.ListItem}>
                        <div
                            className={cls.ListLink}
                            onClick={() => props.setIsCurrencies(true)}
                        >
                            Currencies
                        </div>
                    </li>
                    <li
                        className={cls.ListItem}
                        onClick={() => props.setIsLanguages(true)}
                    >
                        <div className={cls.ListLink}>Languages</div>
                    </li>
                    <li className={cls.ListItem}>
                        <NavLink className={cls.ListLink} to="#">
                            About us
                        </NavLink>
                    </li>
                    <li className={cls.ListItem}>
                        <NavLink className={cls.ListLink} to="#">
                            Terms of service
                        </NavLink>
                    </li>
                    <li className={cls.ListItem}>
                        <NavLink className={cls.ListLink} to="#">
                            Privacy Policy
                        </NavLink>
                    </li>
                    <li className={cls.ListItem}>
                        <NavLink className={cls.ListLink} to="#">
                            Log out
                        </NavLink>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default More;

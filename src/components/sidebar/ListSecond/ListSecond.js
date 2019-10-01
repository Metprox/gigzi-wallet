import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './ListSecond.scss';
import Converter from '@/assets/svg/sidebar/convert.svg';
import Carts from '@/assets/svg/sidebar/debitCart.svg';
import Options from '@/assets/svg/sidebar/funcOption.svg';
import Reddem from '@/assets/svg/sidebar/gold.svg';
import Charts from '@/assets/svg/sidebar/chart.svg';
import Contacts from '@/assets/svg/sidebar/contacts.svg';

const ListSecond = props => {
    const list = [
        {
            id: 1,
            title: 'Converter',
            Svg: <Converter />,
            checkVerified: true,
            to: '/converter',
        },
        {
            id: 2,
            title: 'Debit Cards',
            Svg: <Carts />,
            checkVerified: !props.checkVerified,
            to: '/debit',
        },
        {
            id: 3,
            title: 'Funding options',
            Svg: <Options className={cls.SvgOptions} />,
            checkVerified: !props.checkVerified,
            to: '/funding',
        },
        {
            id: 4,
            title: 'redeem assets',
            Svg: <Reddem />,
            checkVerified: !props.checkVerified,
            to: '/redeem',
        },
        {
            id: 5,
            title: 'Charts',
            Svg: <Charts />,
            checkVerified: true,
            to: '/charts',
        },
        {
            id: 6,
            title: 'Contacts',
            Svg: <Contacts />,
            checkVerified: true,
            to: '/contacts',
        },
    ];

    return (
        <div className={cls.List}>
            {list.map(item =>
                item.checkVerified ? (
                    <NavLink
                        className={cls.Item}
                        key={item.id}
                        to={item.to}
                        activeClassName={
                            item.checkVerified ? cls.ActiveLink : ''
                        }
                        onClick={() => props.handlerSidebar(false)}
                    >
                        <p className={cls.Link}>
                            <span className={cls.Svg}>{item.Svg}</span>
                            {item.title}
                        </p>
                    </NavLink>
                ) : (
                    <div className={cls.ItemDisabled} key={item.id}>
                        <p className={cls.Link}>
                            <span className={cls.Svg}>{item.Svg}</span>
                            {item.title}
                        </p>
                    </div>
                ),
            )}
        </div>
    );
};

export default ListSecond;

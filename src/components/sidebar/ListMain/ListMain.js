import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './ListMain.scss';
import Gigzi from '@/assets/svg/icons/gigzi.svg';
import Ethereum from '@/assets/svg/sidebar/ethereum.svg';
import National from '@/assets/svg/sidebar/national.svg';

const ListMain = props => {
    const list = [
        {
            id: 1,
            title: 'Gigzi',
            Svg: <Gigzi style={{ width: 20 }} />,
            to: '/',
        },
        {
            id: 2,
            title: 'Ethereum',
            Svg: <Ethereum />,
            to: '/ethereum',
        },
        {
            id: 3,
            title: 'National',
            Svg: <National />,
            to: '/national',
        },
    ];
    return (
        <div className={cls.List}>
            {list.map(item => (
                <NavLink
                    className={cls.Item}
                    key={item.id}
                    to={item.to}
                    exact
                    activeClassName={cls.ActiveLink}
                    onClick={() => props.handlerSidebar(false)}
                >
                    <p className={cls.Link}>
                        <span className={cls.Svg}>{item.Svg}</span>
                        {item.title}
                    </p>
                </NavLink>
            ))}
        </div>
    );
};

export default ListMain;

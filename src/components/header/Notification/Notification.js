import React, { useState, useEffect, useRef } from 'react';

import cls from './Notification.scss';
import Bell from '@/assets/svg/header/bell.svg';
import EmptyNotification from '../EmptyNotification/EmptyNotification';
import BellEmpty from '@/assets/svg/icons/bellEmpty.svg';
import BellNew from '@/assets/svg/icons/bellNew.svg';

const Notification = props => {
    const [toggle, setToggle] = useState(false);
    const [clearToggle, setClearToggle] = useState(false);
    const [notificationItem, setNotificationItem] = useState([
        {
            id: 1,
            title: 'Rewarded',
            prize: '12.4693',
            currency: 'gzg',
            person: 'GIGZI',
            date: 'November 5, 2018 at 16:38',
            newPost: true,
        },
        {
            id: 2,
            title: 'Received',
            prize: '25.8463',
            currency: 'gzb',
            person: 'Alex Barnett',
            date: 'November 4, 2018 at 17:34',
            newPost: false,
        },
        {
            id: 3,
            title: 'Received',
            prize: '28.9657',
            currency: 'gzb',
            person: 'Francis Gordon',
            date: 'November 3, 2018 at 13:54',
            newPost: true,
        },
        {
            id: 4,
            title: 'Rewarded',
            prize: '4.2648',
            currency: 'gzg',
            person: 'GIGZI',
            date: 'November 3, 2018 at 11:42',
            newPost: false,
        },
        {
            id: 5,
            title: 'Received',
            prize: '28.9657',
            currency: 'gzb',
            person: 'Francis Gordon',
            date: 'November 3, 2018 at 13:54',
            newPost: true,
        },
        {
            id: 6,
            title: 'Rewarded',
            prize: '4.2648',
            currency: 'gzg',
            person: 'GIGZI',
            date: 'November 3, 2018 at 11:42',
            newPost: false,
        },
    ]);

    // const domNode = useRef();

    useEffect(() => {
        document.addEventListener('click', handlerNotification, false);
        return () => {
            document.removeEventListener('click', handlerNotification, false);
        };
    }, []);

    function handlerNotification(event) {
        if (event.target.className !== cls.Notification) {
            setToggle(false);
        }
    }

    const styleCheckNewPost = [
        {
            backgroundColor: '#DB5477',
        },
        {
            backgroundColor: '#212121',
            opacity: '.15',
        },
    ];
    const handlerClear = () => {
        setNotificationItem([]);
        if (notificationItem.length) {
            setClearToggle(true);
        } else {
            setClearToggle(false);
        }
    };
    return (
        <div className={cls.wrapper}>
            <div
                className={cls.Notification}
                onClick={() => setToggle(!toggle)}
            >
                <div className={cls.bellWrap}>
                    {notificationItem.length > 0 ? <BellNew /> : <BellEmpty />}
                </div>
                {toggle && !clearToggle ? (
                    <span className={cls.ArrowUp} />
                ) : toggle && clearToggle ? (
                    <span className={cls.ArrowUp} />
                ) : null}
            </div>
            {toggle && !clearToggle ? (
                <div className={cls.wrapList}>
                    <ul className={cls.List}>
                        {notificationItem.map(item => (
                            <li className={cls.ListItem} key={item.id}>
                                <p>
                                    {item.title}
                                    <span>
                                        {' '}
                                        {item.prize} {item.currency}
                                    </span>{' '}
                                    from {item.person}
                                    <span
                                        className={cls.checkNewPost}
                                        style={
                                            item.newPost
                                                ? styleCheckNewPost[0]
                                                : styleCheckNewPost[1]
                                        }
                                    />
                                </p>
                                <p>{item.date}</p>
                            </li>
                        ))}
                        {!!notificationItem.length && (
                            <li
                                className={cls.ListClear}
                                onClick={handlerClear}
                            >
                                <button>Clear all</button>
                            </li>
                        )}
                    </ul>
                </div>
            ) : toggle && clearToggle ? (
                <EmptyNotification />
            ) : null}
        </div>
    );
};

export default Notification;

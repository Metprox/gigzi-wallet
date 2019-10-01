import React, { Fragment, useState } from 'react';

import cls from './TransactionItem.scss';
import Arrows from '@/assets/svg/arrows/TransactionArrows.svg';
import ArrowUp from '@/assets/svg/arrows/TransactionUp.svg';
import ArrowDown from '@/assets/svg/arrows/TransactionDown.svg';
import User from '@/assets/svg/sendingIcons/user.svg';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';

const TransactionItem = ({ list, activePopup, handlerPopup }) => {
    const [isToggle, setIsToggle] = useState(false);
    const statusColor = status => {
        return status ? cls.green : cls.red;
    };
    const activeItemClass = (status, index) => {
        return status == index && isToggle ? cls.TransactionActive : cls.TransactionItem;
    };

    function localHandlerPopup(index) {
        if (handlerPopup) {
            handlerPopup(index);
            if (activePopup !== index) {
                setIsToggle(true);
            } else {
                setIsToggle(!isToggle);
            }
        } else {
            return;
        }
    }

    function arrowSelected(item) {
        switch (item.statusArrow) {
            case 3:
                return (
                    <Arrows
                        style={{ width: 20 }}
                        className={statusColor(item.money.state)}
                    />
                );
            case 1:
                return (
                    <ArrowUp
                        style={{ width: 25 }}
                        className={statusColor(item.money.state)}
                    />
                );
            case 2:
                return (
                    <ArrowDown
                        style={{ width: 25 }}
                        className={statusColor(item.money.state)}
                    />
                );
        }
    }

    return (
        <Fragment>
            {list.map((item, index) => {
                return (
                    <li
                        className={activeItemClass(activePopup, index)}
                        key={index}
                        onClick={() => localHandlerPopup(index)}
                    >
                        <ContainerWrap>
                            <div className={cls.Flex}>
                                <div className={cls.Icon}>
                                    {arrowSelected(item)}
                                </div>
                                <div className={cls.Description}>
                                    <p className={cls.DescriptionTop}>
                                        <span>
                                            {item.name} <span>{item.from}</span>{' '}
                                            {item.name == 'Converted'
                                                ? 'to'
                                                : null}{' '}
                                            <span>{item.to}</span>
                                        </span>
                                        <span className={cls.upper}>
                                            {item.money.state ? '+' : '-'}
                                            {item.money.sum}{' '}
                                            {item.money.sumWallet}
                                        </span>
                                    </p>
                                    <p className={cls.DescriptionBottom}>
                                        <span>
                                            {item.date.month} {item.date.day},{' '}
                                            {item.date.year} at {item.date.time}
                                        </span>
                                        <span className={cls.upper}>
                                            {item.money.usd
                                                ? item.money.state
                                                    ? '+'
                                                    : '-'
                                                : null}
                                            {item.money.usd
                                                ? `${item.money.usd} Usd`
                                                : null}
                                        </span>
                                    </p>
                                    {activePopup == index && isToggle ? (
                                        <div className={cls.Popup}>
                                            <div className={cls.Address}>
                                                <p>Address</p>
                                                <span>
                                                    0x974e0a821186b3e0746146e0fbd123158c81a2b8
                                                </span>
                                                <div className={cls.Add}>
                                                    <span>Add to</span>
                                                    <User />
                                                </div>
                                            </div>
                                            <div className={cls.Comment}>
                                                <p>Comment</p>
                                                <span>
                                                    John’s birthday present
                                                </span>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </ContainerWrap>
                    </li>
                );
            })}
        </Fragment>
    );
};

export default TransactionItem;

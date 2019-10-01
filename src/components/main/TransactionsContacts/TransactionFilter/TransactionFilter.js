import React, { useState } from 'react';
import cls from './TransactionFilter.scss';
import Gigzi from '@/assets/svg/icons/gigzi.svg';
import Arrows from '@/assets/svg/arrows/TransactionArrows.svg';
import ArrowUp from '@/assets/svg/arrows/TransactionUp.svg';
import ArrowDown from '@/assets/svg/arrows/TransactionDown.svg';
import Item from './Item/Item';

const TransactionFilter = props => {
    const [list, setList] = useState([
        {
            id: 1,
            value: 'Sent',
            svg: <ArrowDown style={{ width: 20 }} />,
        },
        {
            id: 2,
            value: 'Received',
            svg: <ArrowUp style={{ width: 20 }} />,
        },
        {
            id: 3,
            value: 'Converted',
            svg: <Arrows style={{ width: 15 }} />,
        },
        {
            id: 4,
            value: 'Rewards',
            svg: <Gigzi style={{ width: 15 }} />,
        },
    ]);

    return (
        <div className={cls.TransactionFilter}>
            <p>Transaction type</p>
            <div className={cls.flex}>
                {list.map(item => {
                    return <Item key={item.id} item={item} />;
                })}
            </div>
            <div className={cls.btns}>
                <button
                    className={cls.cancel}
                    onClick={() => props.setToggleFilter(false)}
                >
                    Cancel
                </button>
                <button
                    className={cls.done}
                    onClick={() => props.setToggleFilter(false)}
                >
                    Done
                </button>
            </div>
        </div>
    );
};
export default TransactionFilter;

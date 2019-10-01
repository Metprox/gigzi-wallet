import React, { useState } from 'react';

import cls from './FundingManageList.scss';
import FundingManageItem from './FundingManageItem/FundingManageItem';

const FundingManageList = props => {
    const [list, setList] = useState([
        {
            id: 1,
            bank: 'New bank UK',
            location: 'London',
            currency: 'Euro',
        },
        {
            id: 2,
            bank: 'Deutchland Bank',
            location: 'Hannover',
            currency: 'US Dollar, Euro',
        },
    ]);
    const [activeItem, setActiveItem] = useState(0);
    const [toggleMenu, setToggleMenu] = useState(false);

    function checkActiveItem(id) {
        setActiveItem(id);
        if (id === activeItem) {
            setToggleMenu(!toggleMenu);
            return toggleMenu;
        } else {
            setToggleMenu(true);
            return toggleMenu;
        }
    }

    return (
        <ul className={cls.FundingManageList}>
            {list.map(item => {
                return (
                    <FundingManageItem
                        key={item.id}
                        item={item}
                        checkActiveItem={checkActiveItem}
                        activeItem={activeItem}
                        toggleMenu={toggleMenu}
                        setToggleMenu={setToggleMenu}
                    />
                );
            })}
        </ul>
    );
};

export default FundingManageList;

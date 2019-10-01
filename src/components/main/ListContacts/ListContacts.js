import React, { useState, Fragment } from 'react';

import cls from './ListContacts.scss';
import ItemContacts from './ItemContacts/ItemContacts';
import EndItem from './EndItem/EndItem';
import Copied from '@/components/UI/Copied/Copied';

const ListContacts = ({ list }) => {
    const [activeItem, setActiveItem] = useState(0);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);

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

    const handlerIsCopied = e => {
        setX(e.clientX);
        setY(e.clientY);
        document.addEventListener('mousemove', logKey);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
            document.removeEventListener('mousemove', logKey);
        }, 3000);
    };

    function logKey(e) {
        setX(e.clientX);
        setY(e.clientY);
    }

    return (
        <Fragment>
            <ul className={cls.ListContacts}>
                {list.map(item => {
                    return (
                        <ItemContacts
                            key={item.id}
                            item={item}
                            checkActiveItem={checkActiveItem}
                            activeItem={activeItem}
                            toggleMenu={toggleMenu}
                            setToggleMenu={setToggleMenu}
                            handlerIsCopied={handlerIsCopied}
                        />
                    );
                })}
                <EndItem />
            </ul>
            {isCopied ? <Copied x={x + 5} y={y + 3} /> : null}
        </Fragment>
    );
};

export default ListContacts;

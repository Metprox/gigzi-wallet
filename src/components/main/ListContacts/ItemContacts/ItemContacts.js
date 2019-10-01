import React from 'react';

import cls from './ItemContacts.scss';
import DefaultUser from '@/assets/svg/icons/defaultUser.svg';
import PopupEditorContact from '@/components/main/PopupEditorContact/PopupEditorContact';

const ItemContacts = props => {
    const classesActiveItem = [
        cls.ItemContacts,
        props.toggleMenu && itemActive() ? cls.ActiveItem : null,
    ].join(' ');

    const classesActiveMore = [
        props.toggleMenu && itemActive() ? cls.MoreActive : cls.More,
    ].join(' ');

    function itemActive() {
        return props.activeItem == props.item.id;
    }

    return (
        <li className={classesActiveItem}>
            <div className={cls.Name}>
                <div className={cls.groupLeft}>
                    <div className={cls.defaultNameMobile}>
                        <DefaultUser />
                    </div>
                    <p>{props.item.name}</p>
                </div>
                <div className={cls.moreMobile}>
                    <div
                        className={classesActiveMore}
                        style={{}}
                        onClick={() => props.checkActiveItem(props.item.id)}
                    >
                        {props.toggleMenu && itemActive() ? (
                            <div className={cls.wrapEditor}>
                                <PopupEditorContact
                                    handlerIsCopied={props.handlerIsCopied}
                                />
                            </div>
                        ) : null}
                        <div className={cls.Dots} />
                    </div>
                </div>
            </div>
            <div className={cls.Address}>
                <DefaultUser />
                <span className={cls.Code}>{props.item.code}</span>
                <div
                    className={classesActiveMore}
                    onClick={() => props.checkActiveItem(props.item.id)}
                >
                    {props.toggleMenu && itemActive() ? (
                        <div className={cls.wrapEditor}>
                            <PopupEditorContact
                                handlerIsCopied={props.handlerIsCopied}
                            />
                        </div>
                    ) : null}
                    <div className={cls.Dots} />
                </div>
            </div>
        </li>
    );
};

export default ItemContacts;

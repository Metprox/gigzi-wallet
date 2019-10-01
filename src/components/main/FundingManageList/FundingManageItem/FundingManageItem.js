import React from 'react';

import cls from './FundingManageItem.scss';
import PopupFundingManageEdit from '@/components/main/PopupFundingManageEdit/PopupFundingManageEdit';

const FundingManageItem = props => {
    const classesActiveItem = [
        cls.FundingManageItem,
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
            <div className={cls.bank}>
                <p>{props.item.bank}</p>
            </div>
            <div className={cls.location}>
                <p className={cls.Code}>{props.item.location}</p>
            </div>
            <div className={cls.currency}>
                <p>{props.item.currency}</p>
                <div
                    className={classesActiveMore}
                    onClick={() => props.checkActiveItem(props.item.id)}
                >
                    {props.toggleMenu && itemActive() ? (
                        <PopupFundingManageEdit />
                    ) : null}
                    <div className={cls.Dots} />
                </div>
            </div>
        </li>
    );
};

export default FundingManageItem;

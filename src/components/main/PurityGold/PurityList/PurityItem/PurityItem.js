import React, { useState } from 'react';

import cls from './PurityItem.scss';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';

const PurityItem = ({ description, code, fabrication, purityActive }) => {
    const [selectItem, setSelectItem] = useState(false);

    const classesItem = [
        cls.PurityItem,
        selectItem ? cls.ActiveItem : null,
    ].join(' ');

    const activeItem = () => {
        setSelectItem(!selectItem);
        purityActive();
    };

    return (
        <li className={classesItem} onClick={() => activeItem()}>
            <ContainerWrap>
                <FlexWrap align="center" justify="between">
                    <span className={cls.Description}>{description}</span>
                    <span className={cls.Code}>{code}</span>
                    <span className={cls.Fabrication}>{fabrication}</span>
                </FlexWrap>
            </ContainerWrap>
            {selectItem && (
                <div className={cls.Close} onClick={() => setSelectItem(false)}>
                    <div />
                </div>
            )}
        </li>
    );
};

export default PurityItem;

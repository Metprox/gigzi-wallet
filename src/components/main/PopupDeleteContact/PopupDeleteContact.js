import React, { useEffect } from 'react';

import cls from './PopupDeleteContact.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import ButtonDelete from '@/components/UI/ButtonDelete/ButtonDelete';
import ButtonSecond from '@/components/UI/ButtonSecond/ButtonSecond';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';

const PopupDeleteContact = props => {
    useEffect(() => {
       document.documentElement.style.overflow='hidden';
        return () => {
           document.documentElement.style.overflow='';
        };
    }, []);

    return (
        <div className={cls.PopupDeleteContact}>
            <ContainerWrap>
                <h1>Delete Contact</h1>
                <p className={cls.Description}>
                    Are you sure you want to delete this contact?
                </p>
                <div className={cls.Btns}>
                    <div
                        className={cls.OffsetRight}
                        onClick={() => props.handlerDelete(false)}
                    >
                        <ButtonDelete value="Yes" />
                    </div>
                    <div onClick={() => props.handlerDelete(false)}>
                        <ButtonSecond value="No" />
                    </div>
                </div>
            </ContainerWrap>
        </div>
    );
};

export default PopupDeleteContact;

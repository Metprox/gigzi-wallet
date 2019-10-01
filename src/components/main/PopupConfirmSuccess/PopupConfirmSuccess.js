import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import cls from './PopupConfirmSuccess.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';

const PopupConfirmSuccess = props => {
    useEffect(() => {
       document.documentElement.style.overflow='hidden';
        return () => {
           document.documentElement.style.overflow='';
        };
    }, []);

    return (
        <div className={cls.PopupConfirmSuccess}>
            <ContainerWrap>
                <div className={cls.SvgWrap}>{props.svg}</div>
                <h2>SUCCESSFULLY {props.title}</h2>
                <div className={cls.Summary}>
                    <p>
                        {props.value}
                        <span>{props.wallet}</span>
                    </p>
                </div>
                <div className={cls.Hash}>
                    <p>TX Hash</p>
                    <p>{props.hash}</p>
                    <NavLink to="/verification" className={cls.Link}>
                        verify transaction on the blockchain
                    </NavLink>
                </div>
                <div
                    className={cls.BtnWrap}
                    onClick={() => props.handlerSuccess(false)}
                >
                    <ButtonMain type="submit" value="Done" />
                </div>
            </ContainerWrap>
        </div>
    );
};

export default PopupConfirmSuccess;

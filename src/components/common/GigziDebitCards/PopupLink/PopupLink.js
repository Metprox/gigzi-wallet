import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './PopupLink.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import FieldText from '@/components/UI/FieldText/FieldText';
import Close from '@/components/UI/Close/Close';

const PopupLink = props => {
    return (
        <div className={cls.PopupLink}>
            <ContainerWrap>
                <h2>Link Card</h2>
                <div className={cls.CardNumber}>
                    <FieldText
                        label="Card number"
                        placeholder="Enter card number"
                    />
                </div>
                <div className={cls.linkOrder}>
                    <p>
                        Don't have a card?{' '}
                        <NavLink to="/debit/order">Order it here</NavLink>
                    </p>
                </div>
                <div className={cls.btn} onClick={() => props.setIsLink(false)}>
                    <ButtonMain type="submit" value="Link card" />
                </div>
            </ContainerWrap>
            <div className={cls.Close} onClick={() => props.setIsLink(false)}>
                <Close />
            </div>
        </div>
    );
};

export default PopupLink;

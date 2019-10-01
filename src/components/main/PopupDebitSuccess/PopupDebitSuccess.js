import React from 'react';

import cls from './PopupDebitSuccess.scss';
import DebitPopupWrap from '@/hoc/DebitPopupWrap/DebitPopupWrap';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';

const PopupDebitSuccess = props => {
    return (
        <DebitPopupWrap>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div className={cls.Btn} onClick={() => props.funcOverSuccess(false)}>
                <ButtonMain type="submit" value="Done" />
            </div>
        </DebitPopupWrap>
    );
};

export default PopupDebitSuccess;

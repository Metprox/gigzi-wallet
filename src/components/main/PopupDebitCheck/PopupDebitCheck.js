import React from 'react';

import cls from './PopupDebitCheck.scss';
import DebitPopupWrap from '@/hoc/DebitPopupWrap/DebitPopupWrap';
import ButtonDelete from '@/components/UI/ButtonDelete/ButtonDelete';
import ButtonSecond from '@/components/UI/ButtonSecond/ButtonSecond';

const PopupDebitCheck = props => {
    function toSuccess() {
        props.funcStatus(false);
        if (props.funcToSuccess) {
            props.funcToSuccess(true);
        }
    }

    return (
        <DebitPopupWrap>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div className={cls.Btns}>
                <div className={cls.cancel} onClick={() => props.funcStatus(false)}>
                    <ButtonDelete value={props.btnCancel} />
                </div>
                <div onClick={toSuccess}>
                    <ButtonSecond value={props.btnSuccess} />
                </div>
            </div>
        </DebitPopupWrap>
    );
};

export default PopupDebitCheck;

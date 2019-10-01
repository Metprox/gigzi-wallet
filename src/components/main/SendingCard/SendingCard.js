import React, { useState, Fragment } from 'react';

import cls from './SendingCard.scss';

import SendingTabs from './SendingTabs/SendingTabs';
import FormReceive from './FormReceive/FormReceive';
import FormSend from './FormSend/FormSend';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';

const SendingCard = props => {
    const [formToggle, setFormToggle] = useState(true);
    const [listActive, setListActive] = useState(false);
    const [confirm, setConfirm] = useState(false);
    return (
        <div className={cls.SendingCard}>
            <ContainerWrap>
                <SendingTabs
                    formToggle={formToggle}
                    handlerToggleTab={setFormToggle}
                />
                {formToggle ? (
                    <FormSend
                        listActive={listActive}
                        setListActive={setListActive}
                        Currency={props.Currency}
                        offFirstAmount={props.offFirstAmount}
                        placeholder={props.placeholder}
                        svg={props.svg}
                        handlerConfirm={props.handlerConfirm}
                    />
                ) : (
                    <FormReceive />
                )}
            </ContainerWrap>
            {/* {confirm ? <Fragment /> : null} */}
        </div>
    );
};

export default SendingCard;

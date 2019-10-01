import React, { useState } from 'react';

import cls from './ConvertValues.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import ExchangeRate from './ExchangeRate/ExchangeRate';
import ConvertInput from './ConvertInput/ConvertInput';
import ConvertArrow from '@/assets/svg/arrows/convertArrow.svg';

const ConvertValues = props => {
    const [valueSend, setValueSend] = useState('125.000000');
    const [valueReceive, setValueReceive] = useState('22.687500');

    const reverseValues = () => {
        setValueSend(valueReceive);
        setValueReceive(valueSend);
    };

    return (
        <div className={cls.ConvertValues}>
            <ContainerWrap>
                <div className={cls.ValuesWrap}>
                    <p className={cls.Description}>Conversion values</p>
                    <ConvertInput
                        name="Send"
                        value={valueSend}
                        onChange={setValueSend}
                    />
                    <ConvertInput
                        name="Receive"
                        value={valueReceive}
                        onChange={setValueReceive}
                    />
                    <div
                        className={cls.ConvertArrowWrap}
                        onClick={() => reverseValues()}
                    >
                        <ConvertArrow />
                    </div>
                </div>
                <ExchangeRate />
            </ContainerWrap>
        </div>
    );
};

export default ConvertValues;

import React from 'react';

import cls from './ExchangeRate.scss';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';

const ExchangeRate = props => {
    return (
        <div className={cls.ExchangeRate}>
            <p className={cls.Description}> Exchange rate</p>
            <div className={cls.Input}>
                <FlexWrap align="center" justify="between">
                    <span>1.228</span>
                    <p>
                        Rate refresh in <span>45 seconds</span>
                    </p>
                </FlexWrap>
            </div>
        </div>
    );
};

export default ExchangeRate;

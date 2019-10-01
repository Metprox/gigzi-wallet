import React from 'react';

import cls from './FundingAddSavingBtns.scss';
import ButtonSecond from '@/components/UI/ButtonSecond/ButtonSecond';

const FundingAddSavingBtns = props => {
    return (
        <div className={cls.FundingAddSavingBtns}>
            <div className={cls.print}>
                <ButtonSecond value="Print" />
            </div>
            <div className={cls.download}>
                <ButtonSecond value="Download" />
            </div>
        </div>
    );
};

export default FundingAddSavingBtns;

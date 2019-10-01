import React from 'react';

import cls from './FundingPopupSuccess.scss';
import Close from '@/components/UI/Close/Close';
import Check from '@/assets/svg/icons/Check.svg';

const FundingPopupSuccess = ({ text, handlerClose }) => {
    return (
        <div className={cls.FundingPopupSuccess}>
            <p>
                {text}
                <Check />
            </p>
            <div className={cls.close} onClick={handlerClose}>
                <Close white={true} />
            </div>
        </div>
    );
};

export default FundingPopupSuccess;

import React, { useState } from 'react';

import cls from './FundingAddHasBankDetail.scss';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import FieldSelected from '@/components/UI/FieldSelected/FieldSelected';

const FundingAddHasBankDetail = props => {
    const [list, setList] = useState([
        { id: 1, value: 'New Bank UK', currency: '(USD)' },
        { id: 2, value: 'Resident permit', currency: '(EUR)' },
        { id: 3, value: 'National identity document', currency: '(USD)' },
        { id: 4, value: 'Driver license', currency: '(EUR)' },
    ]);

    const fabricAll = (list, id) => {
        const answer = list.find(item => item.id === id);
        const result = { value: answer.value, currency: answer.currency };
        return result;
    };

    return (
        <div className={cls.FundingAddHasBankDetail}>
            <div className={cls.payment}>
                <FieldSelected
                    label="Payment account"
                    list={list}
                    fabricSelected={fabricAll}
                />
            </div>
            <div className={cls.btn} onClick={props.btnContinue}>
                <ButtonMain type="submit" value="Continue" />
            </div>
        </div>
    );
};

export default FundingAddHasBankDetail;

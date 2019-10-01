import React from 'react';

import cls from './FundingManageTitleList.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';

const FundingManageTitleList = props => {
    return (
        <div className={cls.FundingManageTitleList}>
                <span>Bank name</span>
                <span>Location</span>
                <span>Currency</span>
        </div>
    );
};

export default FundingManageTitleList;

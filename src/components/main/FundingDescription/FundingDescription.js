import React from 'react';

import cls from './FundingDescription.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';

const FundingDescription = props => {
    return (
        <div className={cls.FundingDescription}>
            <ContainerWrap>
                <p>{props.value}</p>
            </ContainerWrap>
        </div>
    );
};

export default FundingDescription;

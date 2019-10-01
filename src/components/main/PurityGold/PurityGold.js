import React from 'react';

import cls from './PurityGold.scss';
import PurityList from './PurityList/PurityList';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import PurityHeader from './PurityHeader/PurityHeader'

const PurityGold = ({purityGold, purityActive}) => {
    return (
        <div className={cls.PurityGold}>
            <ContainerWrap>
                <h2>99.99% PURITY GOLD</h2>
            </ContainerWrap>
            <PurityHeader />
            <PurityList purityGold={purityGold} purityActive={purityActive} />
        </div>
    );
};

export default PurityGold;

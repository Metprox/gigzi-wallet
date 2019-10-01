import React from 'react';

import cls from './PurityHeader.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';

const PurityHeader = props => {
    return (
        <div className={cls.PurityHeader}>
            <ContainerWrap>
                <FlexWrap align="center" justify="between">
                    <span>description</span>
                    <span>product code</span>
                    <span>fabrication premium</span>
                </FlexWrap>
            </ContainerWrap>
        </div>
    );
};

export default PurityHeader;

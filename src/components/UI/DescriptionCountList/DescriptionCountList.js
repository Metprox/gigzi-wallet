import React from 'react';

import cls from './DescriptionCountList.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';

const DescriptionCountList = ({ count, value }) => {
    return (
        <div className={cls.DescriptionCountList}>
            <ContainerWrap>
                <p>
                    {count} {value}
                </p>
            </ContainerWrap>
        </div>
    );
};

export default DescriptionCountList;

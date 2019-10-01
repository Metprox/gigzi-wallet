import React from 'react';

import cls from './SectionDebitSettings.scss';
import Backstep from '@/components/UI/Backstep/Backstep';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import DebitSettings from '@/components/main/DebitSettings/DebitSettings';

const SectionDebitSettings = props => {
    return (
        <div className={cls.SectionDebitSettings}>
            <div className={cls.backstep}>
                <Backstep {...props} />
            </div>
            <div className={cls.Header}>
                <ContainerWrap>
                    <h6>Card Settings</h6>
                </ContainerWrap>
            </div>

            <div className={cls.Body}>
                <ContainerWrap>
                    <DebitSettings />
                </ContainerWrap>
            </div>
        </div>
    );
};

export default SectionDebitSettings;

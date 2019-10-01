import React, { useEffect } from 'react';

import cls from './DebitPopupWrap.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';

const DebitPopupWrap = props => {
    useEffect(() => {
       document.documentElement.style.overflow='hidden';
        return () => {
           document.documentElement.style.overflow='';
        };
    }, []);

    return (
        <div className={cls.DebitPopupWrap}>
            <ContainerWrap>{props.children}</ContainerWrap>
        </div>
    );
};

export default DebitPopupWrap;

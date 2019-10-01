import React from 'react';

import cls from './ContainerWrap.scss';

const ContainerWrap = props => {
    return <div className={cls.ContainerWrap}>{props.children}</div>;
};

export default ContainerWrap;

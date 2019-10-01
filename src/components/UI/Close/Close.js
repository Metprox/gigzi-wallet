import React from 'react';

import cls from './Close.scss';

const Close = props => {
    const classesChangeColor = [
        cls.Close,
        props.white ? cls.ChangeColorWhite : null,
    ].join(' ');

    return <div className={classesChangeColor} />;
};

export default Close;

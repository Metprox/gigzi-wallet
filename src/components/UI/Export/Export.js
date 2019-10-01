import React from 'react';

import cls from './Export.scss';
import ExportSVG from '@/assets/svg/transactions/export.svg';

const Export = props => {
    return (
        <div href="#" className={cls.Export}>
            <ExportSVG />
            <span>Export</span>
        </div>
    );
};

export default Export;

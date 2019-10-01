import React, { Fragment } from 'react';

import cls from './PurityList.scss';
import PurityItem from './PurityItem/PurityItem';

const PurityList = ({ purityGold, purityActive }) => {
    return (
        <Fragment>
            <ul className={cls.PurityList}>
                {purityGold.map(item => {
                    return (
                        <PurityItem
                            key={item.id}
                            description={item.description}
                            code={item.code}
                            fabrication={item.fabrication}
                            purityActive={purityActive}
                        />
                    );
                })}
            </ul>
            {/* <div className={cls.more}>
                <span>Show more</span>
            </div> */}
        </Fragment>
    );
};

export default PurityList;

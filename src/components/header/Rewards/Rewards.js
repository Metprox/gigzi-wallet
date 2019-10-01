import React from 'react';

import ArrowUp from '@/assets/svg/arrows/arrowUp.svg';
import Panding from '@/assets/svg/icons/panding.svg';
import cls from './Rewards.scss';

const Rewards = props => {
    return (
        <div className={cls.Rewards}>
            <div className={cls.Reward}>
                <p>Gold Rewards</p>
                <p><ArrowUp />18.25%</p>
            </div>
            <div className={cls.Remaining}>
                <Panding />
                <p>84 days remaining</p>
            </div>
        </div>
    );
};

export default Rewards;

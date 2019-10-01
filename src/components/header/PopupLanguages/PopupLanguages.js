import React, { useState, useEffect, memo } from 'react';

import cls from './PopupLanguages.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import FlagList from '@/components/common/FlagList/FlagList';

import CHN from '@/assets/svg/flags/CHN.svg';
import ENG from '@/assets/svg/flags/ENG.svg';
import JPN from '@/assets/svg/flags/JPN.svg';
import RUS from '@/assets/svg/flags/RUS.svg';
import FRA from '@/assets/svg/flags/FRA.svg';
import DEU from '@/assets/svg/flags/DEU.svg';
import SPA from '@/assets/svg/flags/SPA.svg';
import ITA from '@/assets/svg/flags/ITA.svg';

const PopupLanguages = props => {
    const [activeCurrency, setActiveCurrency] = useState(null);
    const [flags, setFlags] = useState([
        {
            id: 1,
            name: 'ENG',
            flag: <ENG />,
        },
        {
            id: 2,
            name: 'FRA',
            flag: <FRA />,
        },
        {
            id: 3,
            name: 'DEU',
            flag: <DEU />,
        },
        {
            id: 4,
            name: 'SPA',
            flag: <SPA />,
        },
        {
            id: 5,
            name: 'ITA',
            flag: <ITA />,
        },
        {
            id: 6,
            name: 'RUS',
            flag: <RUS />,
        },
        {
            id: 7,
            name: 'CHN',
            flag: <CHN />,
        },
        {
            id: 8,
            name: 'JPN',
            flag: <JPN />,
        },
    ]);

    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.documentElement.style.overflow = '';
        };
    }, []);

    return (
        <div className={cls.PopupLanguages}>
            <div className={cls.Title}>
                <h1>Languages</h1>
            </div>
            <ContainerWrap>
                <div className={cls.WrapFlags}>
                    <FlagList
                        flags={flags}
                        activeCurrency={activeCurrency}
                        setActiveCurrency={setActiveCurrency}
                    />
                </div>
                <div
                    className={cls.Btn}
                    onClick={() => props.showPopupContact(false)}
                >
                    <ButtonMain type="submit" value="select" />
                </div>
            </ContainerWrap>
        </div>
    );
};

export default memo(PopupLanguages);

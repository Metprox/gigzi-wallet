import React, { useState, useEffect, memo } from 'react';

import cls from './PopupCurrencies.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import FlagList from '@/components/common/FlagList/FlagList';
import FlagListAll from '@/components/common/FlagListAll/FlagListAll';
import Search from '@/components/UI/Search/Search';
import AUD from '@/assets/svg/flags/AUD.svg';
import BRL from '@/assets/svg/flags/BRL.svg';
import CAD from '@/assets/svg/flags/CAD.svg';
import CHF from '@/assets/svg/flags/CHF.svg';
import CHN from '@/assets/svg/flags/CHN.svg';
import ENG from '@/assets/svg/flags/ENG.svg';
import EUR from '@/assets/svg/flags/EUR.svg';
import GBP from '@/assets/svg/flags/GBP.svg';
import INR from '@/assets/svg/flags/INR.svg';
import JPN from '@/assets/svg/flags/JPN.svg';
import MXN from '@/assets/svg/flags/MXN.svg';
import PLN from '@/assets/svg/flags/PLN.svg';
import SEK from '@/assets/svg/flags/SEK.svg';
import TRY from '@/assets/svg/flags/TRY.svg';
import AED from '@/assets/svg/flags/AED.svg';
import UAH from '@/assets/svg/flags/UAH.svg';
import RUS from '@/assets/svg/flags/RUS.svg';
import FRA from '@/assets/svg/flags/FRA.svg';
import DEU from '@/assets/svg/flags/DEU.svg';
import SPA from '@/assets/svg/flags/SPA.svg';
import ITA from '@/assets/svg/flags/ITA.svg';

const PopupCurrencies = props => {
    const [activeCurrency, setActiveCurrency] = useState(null);
    const [activeCurrencyAll, setActiveCurrencyAll] = useState(null);
    const [popularFlags, setPopularFlags] = useState([
        {
            id: 1,
            name: 'USD',
            flag: <ENG />,
        },
        {
            id: 2,
            name: 'EUR',
            flag: <ENG />,
        },
        {
            id: 3,
            name: 'GBP',
            flag: <GBP />,
        },
        {
            id: 4,
            name: 'CAD',
            flag: <CAD />,
        },
        {
            id: 5,
            name: 'CHN',
            flag: <CHN />,
        },
        {
            id: 6,
            name: 'INR',
            flag: <INR />,
        },
        {
            id: 7,
            name: 'JPN',
            flag: <JPN />,
        },
        {
            id: 8,
            name: 'CHF',
            flag: <CHF />,
        },
        {
            id: 9,
            name: 'PLN',
            flag: <PLN />,
        },
        {
            id: 10,
            name: 'BRL',
            flag: <BRL />,
        },
        {
            id: 11,
            name: 'MXN',
            flag: <MXN />,
        },
        {
            id: 12,
            name: 'UAH',
            flag: <UAH />,
        },
    ]);

    const [allFlags, setAllFlags] = useState([
        {
            id: 1,
            name: 'SEK',
            flag: <SEK />,
        },
        {
            id: 2,
            name: 'TRY',
            flag: <TRY />,
        },
        {
            id: 3,
            name: 'AED',
            flag: <AED />,
        },
        {
            id: 4,
            name: 'AUD',
            flag: <AUD />,
        },
    ]);

    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.documentElement.style.overflow = '';
        };
    }, []);

    return (
        <div className={cls.PopupCurrencies}>
            <div className={cls.Title}>
                <h1>Currencies</h1>
                <ContainerWrap>
                    <Search placeholder="Search by country name or сurrencies" />
                </ContainerWrap>
            </div>

            <div className={cls.PopularFlags}>
                <div className={cls.TitleFlag}>
                    <ContainerWrap>
                        <p>Popular currencies</p>
                    </ContainerWrap>
                </div>
                <ContainerWrap>
                    <FlagList
                        flags={popularFlags}
                        activeCurrency={activeCurrency}
                        setActiveCurrency={setActiveCurrency}
                    />
                </ContainerWrap>
            </div>
            <div className={cls.AllFlags}>
                <div className={cls.TitleFlag}>
                    <ContainerWrap>
                        <p>All currencies</p>
                    </ContainerWrap>
                </div>
                <ContainerWrap>
                    <FlagListAll
                        flags={allFlags}
                        activeCurrency={activeCurrencyAll}
                        setActiveCurrency={setActiveCurrencyAll}
                    />
                </ContainerWrap>
            </div>
            <div
                className={cls.Btn}
                onClick={() => props.showPopupContact(false)}
            >
                <ButtonMain type="submit" value="select" />
            </div>
        </div>
    );
};

export default memo(PopupCurrencies);

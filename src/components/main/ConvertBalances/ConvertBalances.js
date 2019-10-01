import React, { useRef } from 'react';

import cls from './ConvertBalances.scss';
import ConvertCards from '@/components/common/ConvertCards/ConvertCards';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';
import Search from '@/components/UI/Search/Search';
import Pagination from '@/components/UI/Pagination/Pagination';

const ConvertBalances = ({ cards, handlerCard, activeCard }) => {
    const ref = React.useRef();
    const classesLeft = [cls.Left, false ? cls.Disabled : null].join(' ');
    const classesRight = [cls.Right, false ? cls.Disabled : null].join(' ');
    return (
        <div className={cls.ConvertBalances}>
            <div className={cls.Title}>
                <FlexWrap align="start" justify="between">
                    <h1>Balances</h1>
                    <div className={cls.Settings}>
                        <div className={cls.SearchWrap}>
                            <Search placeholder="Search" bgWhite={true} />
                        </div>
                        <div className={cls.Pagination}>
                            <div
                                className={classesLeft}
                                onClick={() => ref.current.slickPrev()}
                            />
                            <div
                                className={classesRight}
                                onClick={() => ref.current.slickNext()}
                            />
                        </div>
                    </div>
                </FlexWrap>
            </div>
            <ConvertCards
                ref={ref}
                cards={cards}
                handlerCard={handlerCard}
                activeCard={activeCard}
            />
        </div>
    );
};

export default ConvertBalances;

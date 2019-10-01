import React, { useState, useEffect } from 'react';

import cls from './GigziFee.scss';
import Info from '@/assets/svg/icons/Info.svg';
import ButtonCheckbox from '@/components/UI/ButtonCheckbox/ButtonCheckbox';

const GigziFee = ({ question, value, checkFunc }) => {
    const [toggleInfo, setToggleInfo] = useState(false);

    useEffect(() => {
        document.addEventListener('click', handlerQuestionTwoOutside, false);
        return () => {
            document.removeEventListener(
                'click',
                handlerQuestionTwoOutside,
                false,
            );
        };
    }, []);

    function handlerQuestionTwoOutside(event) {
        console.log(event.target.className);
        if (event.target.className !== `${cls.wrapInfo} ${cls.arrowActive}`) {
            setToggleInfo(false);
        }
    }

    const classesPopupArrow = [
        cls.wrapInfo,
        toggleInfo ? cls.arrowActive : null,
    ].join(' ');

    return (
        <div className={cls.GigziFee}>
            <span>
                Gigzi Fee{' '}
                {question ? (
                    <div className={cls.popupInfo}>
                        <div
                            className={classesPopupArrow}
                            onClick={() => setToggleInfo(!toggleInfo)}
                        >
                            <Info />
                        </div>
                        {toggleInfo ? (
                            <p>
                                The transaction fee of 0.2% gets deducted from
                                the sent amount. Tick ‘add to amount’ if you
                                prefer the recipient receives the full amount
                                being sent.
                            </p>
                        ) : null}
                    </div>
                ) : null}
            </span>
            <span>{value}</span>
            {checkFunc ? <ButtonCheckbox /> : null}
        </div>
    );
};

export default GigziFee;

import React, { useEffect } from 'react';

import cls from './PopupOrderSuccess.scss';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';

const PopupOrderSuccess = props => {
    useEffect(() => {
       document.documentElement.style.overflow='hidden';
        return () => {
           document.documentElement.style.overflow='';
        };
    }, []);

    return (
        <div className={cls.PopupOrderSuccess}>
            <h2>Success</h2>
            <p>You will receive a card within week.</p>
            <div
                className={cls.Btn}
                onClick={() => props.setIsPopupSuccess(false)}
            >
                <ButtonMain type="submit" value="done" />
            </div>
        </div>
    );
};

export default PopupOrderSuccess;

import React, { useEffect } from 'react';
import cls from './VerificationPopup.scss';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';

const VerificationPopup = props => {
    useEffect(() => {
       document.documentElement.style.overflow='hidden';
        return () => {
           document.documentElement.style.overflow='';
        };
    }, []);

    return (
        <div className={cls.VerificationPopup}>
            <h2>Verification in Progress</h2>
            <p>
                You'll be notified by the email when the verification process is
                done
            </p>
            <div className={cls.Btn} onClick={props.routeBack}>
                <ButtonMain type="submit" value="Ok" />
            </div>
        </div>
    );
};

export default VerificationPopup;

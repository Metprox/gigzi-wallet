import React, { useEffect } from 'react';

import cls from './PopupContact.scss';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import FieldText from '@/components/UI/FieldText/FieldText';
import FieldTextarea from '@/components/UI/FieldTextarea/FieldTextarea';
import Close from '@/components/UI/Close/Close';

const PopupContact = props => {
    const popupClose = () => {
        props.showPopupContact(false);
    };

    useEffect(() => {
       document.documentElement.style.overflow='hidden';
        return () => {
           document.documentElement.style.overflow='';
        };
    }, []);

    return (
        <div className={cls.PopupContact}>
            <ContainerWrap>
                <h1>{props.title}</h1>
                <div className={cls.Name}>
                    <FieldText
                        type="text"
                        label="Name"
                        value={props.valueName}
                        placeholder="Enter name"
                    />
                </div>
                <div className={cls.Address}>
                    <FieldText
                        type="text"
                        label="Address"
                        placeholder="Enter Gigzi address"
                        value={props.valueAddress}
                    />
                </div>
                <div className={cls.Notes}>
                    <FieldTextarea
                        placeholder="Enter notes"
                        label="Notes"
                        value={props.valueNotes}
                    />
                </div>
                <div className={cls.Btn}>
                    <ButtonMain type="submit" value={props.btnName} />
                </div>
            </ContainerWrap>
            <div className={cls.WrapClose} onClick={popupClose}>
                <Close white={false} />
            </div>
        </div>
    );
};

export default PopupContact;
